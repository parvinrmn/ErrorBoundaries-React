import React, { Component } from 'react'
import Error from "../../public/Error.jpg"

export default class ErrorBoundaries extends Component {
    // state = {
    //     hasError: false
    // }

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
         //getDerivedStateFromError
    static getDerivedStateFromError() {
        return { hasError : true };
    }

    render() {
        return (
            <div>
                {
                    this.state.hasError === true ?
                    <div style={{backgroundImage:"url:../../public/Error.jpg"}}></div>
                    // <img src={Error} style={{width:"100%",height:"100vh"}}/> :
                    :this.props.children
                }
            </div>
        )
    }
}