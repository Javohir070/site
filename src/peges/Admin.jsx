import React, {useState} from "react";
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