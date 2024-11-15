import React, { Component } from 'react'
import ErrorBundaries from './ErrorBundaries';

export default class Parent extends Component {
    render() {
        return (
            <div>
                <ErrorBundaries>
                    <Child/>
                </ErrorBundaries>
            </div>
        )
    }
}



class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }


    render() {
        if(this.state.counter=== 6){
            throw new Error("App crashed")
        }

        return (
            <div>
                Child:{this.state.counter}
                <button onClick={()=>this.setState({counter: ++this.state.counter})}>+</button>
            </div>
        )
    }
}

