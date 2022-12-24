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
    this.state= {data: users, edit:{id:"",value:""}};
}
    render(){
        let edit = (id, value)=>{
           this.setState({edit: { id, value, }});
        };
        let itemdelet = (id)=>{
         let kiy = this.state.data.filter((item) => item.id !== id);
         console.log(kiy);
         this.setState({data:kiy});
        };
        let handelSave = (id)=>{
            this.setState({
                data: this.state.data.map((value)=>{
                    if (value.id===id) {
                        return {...value, name:this.state.edit.value};
                    }else{return value;};
                })
            });
            this.setState({edit:{id:"", value:""}});
        }
        let serarch = ({target})=>{
            let kiy = target.value;
            let serch = this.state.data.filter((item)=>
              item.name.includes(kiy)
            );
            this.setState({data: serch});
            if (kiy === "") {
                this.setState({data:users});
            }
        }
        
        return(
            <>
            <input type="text" placeholder="search" onChange={serarch} />
            {this.state.data.map((item)=>(
                <div>
                    {this.state.edit.id === item.id ? (
                        <div className="item-edit">
                            <input value={this.state.edit.value} onChange={({target})=>this.setState({edit:{...this.state.edit, value: target.value}})}  /><span className="edit-btn" onClick={()=>handelSave(item.id)} >save</span><span onClick={()=>this.setState({edit:{id:"",value: ""}})} className="edit-btn">cancel</span>
                        </div>
                    ):(
                        <div className="item-edit">
                            <h4>{item.name}</h4> 
                            <span className="edit-btn" onClick={()=>itemdelet(item.id)}>delete</span>
                            <span className="edit-btn" onClick={()=>edit(item.id, item.name)}>edit</span>
                        </div>
                    )}
                </div>
            ))}
            </>
        );
    }
}
export default Edit;