import React, { Component } from 'react';
import { render } from 'react-dom';
class App extends Component{
    render(){
        return(
            <ul className="my-list">
                <li>{false?'Xr.com':'错了'}</li>
                <li>I love react</li>
            </ul>
        )

    }
}
 export default App