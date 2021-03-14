import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TestItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    
shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content!==this.props.content){
        return true
    }else{
       return false 
    }
}

    render() { 
        return ( 
            <div onClick={this.handleClick}>{this.props.name}为你服务-{this.props.content}</div>
         );
    }
    handleClick(){
        
        this.props.deleteItem(this.props.index)
    }
}
 TestItem.propTypes={
     name:PropTypes.string.isRequired,
     content:PropTypes.string,
     index:PropTypes.number,
     deleteItem:PropTypes.func
 }
 TestItem.defaultProps={
     name:'结城明日奈'
 }
export default TestItem;