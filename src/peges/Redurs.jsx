import React, {useReducer} from "react";
import "./edit.css";
import {admin} from "../untilits/Users"
function Redurs() {
    let reduce = (state, action)=>{
        switch(action.type){
            case `all${action.id}`:
                return {...state, count:`all${action.id}`}; 
            case 'user':
                return {...state, count:'user'};
            case 'email':
                return {...state, count:'email'}; 
            case 'censel':
                return {...state, count:false}; 
            case 'delete':
                return {...state, user: state.user.filter((i)=>i.id !== action.id)}; 
            case 'setAdd':
                return {...state  ,add:{...state.add , [action.payoad.name]:action.payoad.value} }; 
            case 'add':
                return {user:[...state.user, state.add]}; 
            default:
                return state;
        }
    };
let [state, pispotch] = useReducer(reduce,{user:admin, count:false, add:{}});
console.log(state.count);
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
                            <input className="id-input" name="id" onChange={({target})=>pispotch({type:'setAdd',payoad:target })} type="text" /></td>
                            <td><input type="text" name="username" onChange={({target})=>pispotch({type:'setAdd',payoad:target })} /></td>
                            <td><input type="email" name="email"  onChange={({target})=>pispotch({type:'setAdd',payoad:target })}/></td>
                            <td><input type="text" name="ip" onChange={({target})=>pispotch({type:'setAdd',payoad:target })}/></td>
                            <td><input type="text" name="time" onChange={({target})=>pispotch({type:'setAdd',payoad:target })}/></td>
                            <td><input type="text" name="login" onChange={({target})=>pispotch({type:'setAdd',payoad:target })}/></td>
                            <td><input type="text" name="confirmation" onChange={({target})=>pispotch({type:'setAdd',payoad:target })}/></td>
                            <td>
                                <select name="status" id="" onChange={({target})=>pispotch({type:'setAdd',payoad:target })}>
                                    <option></option>
                                    <option value="active">active</option>
                                    <option value="no active">no active</option>
                                </select>
                            </td>
                <td><span className="save-btn" onClick={()=>pispotch({type:'add'})}> Add</span></td>
            </tr>
            {state.user.map((item)=>(
            <>
                
                    {state.count === `all${item.id}` ? (
                        <tr className="table-item ">
                            <td><input className="id-input" name="Id" onChange={({target})=>pispotch({type:'setAdd',payoad:target })} type="text" /></td>

                            <td><input type="text" name="username" onChange={({target})=>pispotch({type:'setAdd',payoad:target })} /></td>
                            <td><input type="email" name="email"  onChange={({target})=>pispotch({type:'setAdd',payoad:target })}/></td>
                            <td><input type="text" name="ip" onChange={({target})=>pispotch({type:'setAdd',payoad:target })}/></td>
                            <td><input type="text" name="time" onChange={({target})=>pispotch({type:'setAdd',payoad:target })}/></td>
                            <td><input type="text" name="login" onChange={({target})=>pispotch({type:'setAdd',payoad:target })}/></td>
                            <td><input type="text" name="confirmation" onChange={({target})=>pispotch({type:'setAdd',payoad:target })}/></td>
                            <td>
                                <select name="status" id="" onChange={({target})=>pispotch({type:'setAdd',payoad:target })}>
                                    <option></option>
                                    <option value="active">active</option>
                                    <option value="no active">no active</option>
                                </select>
                            </td>
                            <td className="icon-items">
                                <span className="seve-btn"><i class="fa-solid fa-floppy-disk"></i></span>
                                <span onClick={()=>pispotch({type:'censel', id:item.id})} className="del-btn"><i class="fa-solid fa-xmark"></i></span>
                            </td>
                        </tr>
                    ):(
                       <tr className="table-lest-item table-item">
                            <td className="table-title-lest">{item.Id}</td>
                            <td className="table-title-lest">{item.username}</td>
                            <td className="table-title-lest">{item.email}</td>
                            <td className="table-title-lest">{item.ip}</td>
                            <td className="table-title-lest">{item.time}</td>
                            <td className="table-title-lest">{item.login}</td>
                            <td className="table-title-lest">{item.confirmation}</td>
                            <td><span className="save-btn">{item.status} </span></td>
                            {state.count === 'user' ||  state.count === 'email'?(
                                <td className="icon-items">
                                <span className="seve-btn"><i class="fa-solid fa-floppy-disk"></i></span>
                                <span onClick={()=>pispotch({type:'censel', id:item.id})} className="del-btn"><i class="fa-solid fa-xmark"></i></span>
                            </td>
                            ):(
                                <td className="table-title-lest icons-item">
                                <span onClick={()=>pispotch({type:'user', id:item.id})}><i class="fa-solid fa-user"></i></span>
                                <span onClick={()=>pispotch({type:'email', id:item.id})}><i class="fa-solid fa-envelope"></i></span>
                                <span onClick={()=>pispotch({type:`all${item.id}`, id:item.id})}><i class="fa-solid fa-pen"></i></span>
                                <span onClick={()=>pispotch({type:'delete', id:item.id})}><i class="fa-solid fa-trash-can"></i></span>
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

export default Redurs;