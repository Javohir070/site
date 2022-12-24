import React from "react";

class Item extends React.Component{
constructor(props){
    super(props);
    this.state = {name: "", item: "", data: new Date(),};
}
componentDidMount(){
    setInterval(()=>{
        this.text();
    }, 1000);
}
text(){
    this.setState({data:new Date()});
}
    render(){
        {
            let add = ({target})=>{
                this.setState({item: target.value});
            };
            let qushish = ()=>{
                this.setState({name:this.state.item});
                this.setState({item: ""});
            }
            return (
                <div>
                    <div>Data Tayim: {this.state.data.toLocaleTimeString()}</div>
                    <div>Men Ismin: {this.state.name} </div>
                    <input onChange={add} value={this.state.item} type="text" />
                    <span onClick={qushish}>add</span>
                </div>
                );
        };
    }
}
export default Item;