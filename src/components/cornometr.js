import React from "react";

class Cornometr extends React.Component{

    constructor(){
        super();
        this.state = {
            miliSecond: '1000',
            second: '60',
            minute: '01'
        };
        
        this.discountMinute=this.discountMinute.bind(this)

    }
    
    
    discountMinute(){
        this.setState({minute:0});

        setInterval(() => {
            this.setState({second: this.state.second - 1})
        }, 1000);

        setInterval(() => {
            if(this.state.miliSecond <= 0){
                this.setState({miliSecond:1000})
            }else{
                this.setState({miliSecond: this.state.miliSecond - 1})}
        }, 1);
        
    }
    render(){
        return(
            <div>
                <button style={{padding:'10px'}} onClick={this.discountMinute}>{this.state.minute}</button>
                <span style={{padding:'10px'}} >{this.state.second}</span>
                <span style={{padding:'10px'}} >{this.state.miliSecond}</span>
            </div>
        )
    }
}

export default Cornometr;