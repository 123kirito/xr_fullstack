import React, { Component } from 'react';
class Example3 extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    render() { 
        return ( 
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>Click me</button>
            </div>
         );
    }
    componentDidMount(){
        console.log(`componentDidMount=>You clicked ${this.state.count}times`)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate=>You clicked ${this.state.count}times`)
    }
    addCount(){
        this.setState({count:this.state.count+1})
    }
}
 
export default Example3;