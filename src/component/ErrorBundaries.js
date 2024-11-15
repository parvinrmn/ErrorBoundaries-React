import React, { Component } from 'react'

export default class ErrorBundaries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {

    

    return (
      <div>
        {
          this.state.hasError === true ?
            <div style={{width:"400px",height:"200px",border:"3px solid black",background:"#ffaa",margin:"200px auto"}}>
                <h2>Sorry there is a problem!</h2>
                <h3>pleas try again later.</h3>
                <button style={{width:"100px",background:"black",color:"white"}}>close</button>
            </div>
            : this.props.children
        }
      </div>
    )
  }
}

