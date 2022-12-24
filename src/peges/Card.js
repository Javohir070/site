import React from "react";
import Cards from "../conponents/Cards/Cards.jsx";
import rasm from "../assets/images/rasm.jpg";
import del from "../assets/images/delet.png";
let data = [
    {img:rasm, del:del,taxt:{title:"Italy Pizza",item:"Extra cheese and toping"},narx:887},
    {img:rasm, del:del,taxt:{title:"Combo Plate",item:"Extra cheese and toping"},narx:681},
    {img:rasm, del:del,taxt:{title:"Spanish Rice",item:"Extra garllic"},narx:727},
];

class Card extends React.Component{
    render(){
       return (
       <div>
            {data.map(item=>(
                <Cards img={item.img} text={item.taxt} narx={item.narx} del={item.del} />
             ))}
        </div>);
       
           
        }
}
export default Card;