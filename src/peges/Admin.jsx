import React, {useState, createContext} from "react";
export let UserContext = createContext([]);

export default function Admin() {
    let data = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
    ];
    let [open, setOpen] = useState(false);
    let [nima, setNima] = useState('');
    let hendelAaa = (type, id)=>{
        switch (type) {
            case `All${id}`:
                setOpen(`All${id}`);
                setNima(type);
                break;
            case `user${id}`:
                setOpen(false);
                setNima(type);
                break;
            case `email${id}`:
                setOpen(false);
                setNima(type);
                break;
        
            default:
                break;
        }
    }
    console.log(nima, open);
  return (
    <div>
   {data.map(item=>(
     <>
        <div>
            <div>{open === `All${item.id}` || nima === `user${item.id}` ?  (<input type="text" />):(<span>admin</span>)}</div>
            <div>{open === `All${item.id}` || nima === `email${item.id}` ?  (<input type="text" />):(<span>userEmail</span>)}</div>
            <div>{open === `All${item.id}` ? (<input type="text" />):(<span>user</span>)}</div>
            <div>{open === `All${item.id}` ? (<input type="text" />):(<span>user</span>)}</div>
            <div>{open === `All${item.id}` ? (<input type="text" />):(<span>user</span>)}</div>
            <div>{open === `All${item.id}` ? (<input type="text" />):(<span>user</span>)}</div>
            <div>
                <br/>
                <div onClick={()=>hendelAaa(`user${item.id}`, item.id)}>User</div><br/>
                <div onClick={()=>hendelAaa(`email${item.id}`, item.id)}>Email</div><br/>
                <div onClick={()=>hendelAaa(`All${item.id}`, item.id)}>All</div><br/>
            </div>
        </div>
     </>

  ))}
</div>
    
  );
};
<tr className="table-item ">
                    <td><input className="id-input" type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="email" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td>
                        <select name="" id="">
                            <option></option>
                            <option value="active">active</option>
                            <option value="no active">no active</option>
                        </select>
                    </td>
                    <td className="icon-items">
                        <span className="seve-btn"><i class="fa-solid fa-floppy-disk"></i></span>
                        <span className="del-btn"><i class="fa-solid fa-xmark"></i></span>
                    </td>
                </tr>

<td><span className="save-btn"> </span></td>
<td className="icon-items">
    <span className="seve-btn"><i class="fa-solid fa-floppy-disk"></i></span>
    <span className="del-btn"><i class="fa-solid fa-xmark"></i></span>
</td>
 <td className="icon-items">
 <span className="seve-btn"><i class="fa-solid fa-floppy-disk"></i></span>
 <span className="del-btn"><i class="fa-solid fa-xmark"></i></span>
</td>

<tr className="table-lest-item table-item">
<td className="table-title-lest"></td>
<td><input type="text" /></td>
<td className="table-title-lest"></td>
<td><input type="text" /></td>
<td className="table-title-lest"></td>
<td className="table-title-lest"></td>
<td className="table-title-lest"></td>
<td className="table-title-lest"></td>
<td className="table-title-lest"></td>
<td><span className="save-btn"> </span></td>
<td className="icon-items">
 <span className="seve-btn"><i class="fa-solid fa-floppy-disk"></i></span>
 <span className="del-btn"><i class="fa-solid fa-xmark"></i></span>
</td>
<td className="table-title-lest icons-item">
 <span><i class="fa-solid fa-user"></i></span>
 <span><i class="fa-solid fa-envelope"></i></span>
 <span><i class="fa-solid fa-pen"></i></span>
 <span><i class="fa-solid fa-trash-can"></i></span>
</td>

</tr>
