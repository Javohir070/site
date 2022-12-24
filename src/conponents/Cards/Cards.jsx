import React from "react";
import './Cards.css';
class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state={cout: 0};
    }
    render(){
        {
         let add = ()=>{
            this.setState({cout: this.state.cout + 1});
         };
         let min = ()=>{
            this.setState({cout: this.state.cout - 1});
         };
            return (
                <div className="card-item">
                <img src={this.props.img} alt="" />
                <div className="text">
                    <h3 className="text-title">{this.props.text.title}</h3>
                    <p className="text-body">{this.props.text.item}</p>
                </div>
                <span className="add-btn" onClick={add}>+</span>
                <div className="count">{this.state.cout}</div>
                <span className="min-btn" onClick={min}>-</span>
                <div className="narx">${this.props.narx}</div>
                <img src={this.props.del} alt="" />
              </div>
            );
        };
    }
}
export default Cards;