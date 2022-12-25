import React from "react";
import "./edit.css";
let users =[
    {id:1, name: "Qayumov Javohir"},
    {id:2, name: "Qayumov So'hrob"},
    {id:3, name: "A’loxonov Abrorxon"},
    {id:6, name: "Qudratov Qodirjon "},
    {id:4, name: "Abdulhamidov Asilbek "},
    {id:5, name: "Abdurashidov Suhrob "},
    {id:7, name: "Omonov Alimardon "},
    {id:8, name: "Tangirov Javlonbek "},
];
class Edit extends React.Component{
constructor(props){
    super(props);
    this.state=({data:users, edit:{id:"", value:""}});
}
    render(){
       let Edit = (id, value)=>{
        this.setState({edit:{id:id, value:value}})
       };
       let Seve = (id)=>{
           this.setState({data:this.state.data.map((value)=>{
            if (value.id === id) {
                return {...value, name:this.state.edit.value};
            }else{return value};
           })})
           this.setState({edit:{id:"", value:""}})
       };
       let Del = (id)=>{
        let dels = this.state.data.filter((item)=>item.id!==id);
        this.setState({data:dels});
       };
       let Search = ({target})=>{
        let kiy = target.value;
        let searchs = this.state.data.filter(item=>(
            item.name.includes(kiy)
        ));
        this.setState({data:searchs});
        if (kiy === "") {
            this.setState({data:users})
        }
       }
        return(
            <>
            <input type="text" placeholder="search" onChange={Search} />
            {this.state.data.map((item)=>(
                <div>
                    {this.state.edit.id === item.id ? (
                        <div className="item-edit">
                            <input value={this.state.edit.value} onChange={({target})=>this.setState({edit: {...this.state.edit, value: target.value}})}  /><span className="edit-btn" onClick={()=>Seve(item.id)}  >save</span><span  className="edit-btn" onClick={()=>this.setState({edit:{id:'',value:""}})}>cancel</span>
                        </div>
                    ):(
                        <div className="item-edit">
                            <h4>{item.name}</h4> 
                            <span className="edit-btn" onClick={()=>Del(item.id)} >delete</span>
                            <span className="edit-btn" onClick={()=>Edit(item.id, item.name)} >edit</span>
                        </div>
                    )}
                </div>
            ))}
            </>
        );
    }
}
export default Edit;