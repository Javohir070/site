import React ,{useEffect, useState} from 'react';
const Json = () => {

const [count, setCount] = useState([]);
    const MAIN_URL='https://jsonplaceholder.typicode.com';
    useEffect(()=>{
    fetch(`${MAIN_URL}/posts`)
        .then( (red) => {
            return red.json();
        })
        .then((red)=> {
            setCount(red);
        });
    },[]);
    return (
        <div>
            <>
                {count.map((i)=>(
                  <div> salom javohir{i.title}</div>
                )}
            </>
        </div>
    );
};

export default Json;