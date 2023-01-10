import React from "react";
import "./edit.css";
let admin = [
    {id:1, Id:1, email_id:1,username:"admin",user_id:1,email:"admin@somemail.com", ip:1, time:"27-Nov-20 08:30", login:"27-Nov-20 09:00",confirmation:'Confirmed' ,status:'Block'},
    {id:2, Id:2, email_id:2,username:"officer",user_id:2,email:"officer1@somemail.com", ip:1, time:"27-Nov-20 08:30", login:"27-Nov-20 09:00",confirmation:'Confirmed' ,status:'Block'},
    {id:3, Id:1,user_id:3, email_id:3,username:"admin",email:"admin@somemail.com", ip:1, time:"27-Nov-20 08:30", login:"27-Nov-20 09:00",confirmation:'Confirmed' ,status:'Block'},
    {id:4, Id:2,user_id:4, email_id:4,username:"officer",email:"officer1@somemail.com", ip:1, time:"27-Nov-20 08:30", login:"27-Nov-20 09:00",confirmation:'Confirmed' ,status:'Block'},
    {id:5, Id:1,user_id:5, email_id:5,username:"admin",email:"admin@somemail.com", ip:1, time:"27-Nov-20 08:30", login:"27-Nov-20 09:00",confirmation:'Confirmed' ,status:'Block'},
    {id:6, Id:2,user_id:6, email_id:6,username:"officer",email:"admin@somemail.com", ip:1, time:"27-Nov-20 08:30", login:"27-Nov-20 09:00",confirmation:'Confirmed' ,status:'Block'},
]
class AdminElt extends React.Component{
   constructor(props){
    super(props);
    this.state = {data:admin, edit:{id:"", userid:"",  emailid:"", Id:"", username:"", email:"", ip:"", time:"", login:"",confirmation:"" ,status:""}, add: {id:7, Id:"", username:"", email:"", ip:"", time:"", login:"",confirmation:"" ,status:""} }
   }

    render(){
       let Edit = (id, Id, username,email, ip, time, login,confirmation ,status)=>{
        this.setState({edit:{id,  Id, username, email, ip, time, login, confirmation ,status}});
       };
       let enDelete = (id)=>{
        let delt = this.state.data.filter((item)=>item.id!==id);
        this.setState({data: delt}); 
       };
       let userName = (id , value)=>{
        this.setState({edit:{userid:id, username: value}});
       };
       let editEmail = (id, value)=>{
           this.setState({edit:{emailid:id, email:value}})
       }
       let Saqlash = (id)=>{
            this.setState({data:this.state.data.map((item)=>{
                if(item.id=== id){
                    return{...item,Id:this.state.edit.Id, username:this.state.edit.username, email:this.state.edit.email, ip:this.state.edit.ip, time:this.state.edit.time, login:this.state.edit.login, confirmation:this.state.edit.confirmation,status:this.state.edit.status};
                }else{return item;}
            })})
            this.setState({edit:{id:""}})
       };
       let hendelAdd = ({target})=>{
        this.setState({add:{...this.state.add, [target.name]: target.value},});
       };
       let add = ()=>{
        console.log(this.state.add);
        this.setState({data:[...this.state.data, this.state.add],});
        this.setState({add:{id:'', Id:"", username:"", email:"", ip:"", time:"", login:"",confirmation:"" ,status:""}})
       }
    return (
        <>
            {
                <div className="table-body">
                    <table>
                        <tr className="table-item bgr">
                            <th className="table-title">Id</th>
                            <th className="table-title">Username</th>
                            <th className="table-title">Email</th>
                            <th className="table-title">Registration ip</th>
                            <th className="table-title">Registration Time</th>
                            <th className="table-title">Last Login</th>
                            <th className="table-title">Confirmation</th>
                            <th className="table-title">Block Status</th>
                            <th className="table-title"></th>
                        </tr>
                        <tr className="table-item ">
                            <td>
                                <input name="id" className="id-input" value={this.state.add.id} onChange={hendelAdd} type="text" /></td>
                            <td><input name="username" type="text" value={this.state.add.username} onChange={hendelAdd} /></td>
                            <td><input name="email" type="email" value={this.state.add.email} onChange={hendelAdd}/></td>
                            <td><input name="ip" type="text" value={this.state.add.ip} onChange={hendelAdd}/></td>
                            <td><input name="time" type="datetime-local" value={this.state.add.time} onChange={hendelAdd} /></td>
                            <td><input name="login" type="datetime-local" value={this.state.add.login} onChange={hendelAdd} /></td>
                            <td><input name="confirmation" type="text" value={this.state.add.confirmation}  onChange={hendelAdd}/></td>
                            <td>
                                <select name="status" onChange={hendelAdd} id="">
                                    <option value='va'>ads</option>
                                    <option value="active">active</option>
                                    <option value="no active">no active</option>
                                </select>
                            </td>
                            <td><span className="save-btn" onClick={add}> Add</span></td>
                        </tr>
                        {this.state.data.map((item)=>(
                            <>
                                {this.state.edit.id === item.id ? (
                                            <tr className="table-item ">
                                            <td><input className="id-input" value={this.state.edit.Id} onChange={({target})=>this.setState({edit: { Id: target.value}})}  type="text" /></td>
                                            <td><input type="text" value={this.state.edit.username} onChange={({target})=>this.setState({edit: {...this.state.edit, username: target.value}})}/></td>
                                            <td><input type="email" value={this.state.edit.email} onChange={({target})=>this.setState({edit: {...this.state.edit, email: target.value}})}/></td>
                                            <td><input type="text" value={this.state.edit.ip} onChange={({target})=>this.setState({edit: {...this.state.edit, ip: target.value}})}/></td>
                                            <td><input type="text" value={this.state.edit.time} onChange={({target})=>this.setState({edit: {...this.state.edit, time: target.value}})}/></td>
                                            <td><input type="text" value={this.state.edit.login} onChange={({target})=>this.setState({edit: {...this.state.edit, login: target.value}})}/></td>
                                            <td><input type="text" value={this.state.edit.confirmation} onChange={({target})=>this.setState({edit: {...this.state.edit, confirmation: target.value}})}/></td>
                                            <td>
                                                <select name="" id="">
                                                    <option value={this.state.edit.status}>{this.state.edit.status}</option>
                                                    <option value="active">active</option>
                                                    <option value="no active">no active</option>
                                                </select>
                                            </td>
                                            <td className="icon-items">
                                                <span className="seve-btn" onClick={()=>Saqlash(item.id)}><i class="fa-solid fa-floppy-disk"></i></span>
                                                <span className="del-btn" onClick={()=>this.setState({edit:{id:""}})}><i class="fa-solid fa-xmark"></i></span>
                                            </td>
                                            </tr>
                                            ):(                               
                                            <tr className="table-lest-item table-item">
                                                <td className="table-title-lest">{item.Id}</td>
                                                {(this.state.edit.userid === item.user_id)?(<td><input value={this.state.edit.username} onChange={({target})=>this.setState({edit: {...this.state.edit, username: target.value}})}  type="text"/></td>):(<td className="table-title-lest">{item.username}</td>)}
                                                {(this.state.edit.emailid === item.email_id)?(<td><input value={this.state.edit.email} onChange={({target})=>this.setState({edit: {...this.state.edit, email: target.value}})} type="text"/></td>):(<td className="table-title-lest">{item.email}</td>)}
                                                <td className="table-title-lest">::{item.ip}</td>
                                                <td className="table-title-lest">{item.time}</td>
                                                <td className="table-title-lest">{item.login}</td>
                                                <td className="table-title-lest">{item.confirmation}</td>
                                                <td ><span className="save-btn"> {item.status}</span></td>
                                                {(this.state.edit.userid === item.user_id) || (this.state.edit.emailid === item.email_id)?(<td className="icon-items">
                                                <span className="seve-btn"><i class="fa-solid fa-floppy-disk"></i></span>
                                                <span className="del-btn" onClick={()=>this.setState({edit:{id:""}})}><i class="fa-solid fa-xmark"></i></span>
                                                </td>):(
                                                <td className="table-title-lest icons-item">
                                                    <span onClick={()=>userName(item.user_id , item.username)}><i class="fa-solid fa-user"></i></span>
                                                    <span onClick={()=>editEmail( item.email_id,item.email)}><i class="fa-solid fa-envelope"></i></span>
                                                    <span onClick={()=>Edit(item.id, item.Id,item.username, item.email, item.ip,item.time,item.login, item.confirmation,item.status)}><i class="fa-solid fa-pen"></i></span>
                                                    <span onClick={()=>enDelete(item.id)}><i class="fa-solid fa-trash-can"></i></span>
                                                </td>
                                                )}
                                            </tr>
                                    )}
                            </>
                            ))}
                    </table>
                </div>
            };
        </>
    );
    }
}
export default AdminElt;