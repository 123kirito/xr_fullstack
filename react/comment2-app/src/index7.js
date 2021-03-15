import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
//组件里类，添加一个静态属性propTypes 类型检测
class Card extends Component{
    // es6 class 属性新特性
    static propTypes={ //检测props
        content:PropTypes.object
    }
    render(){
        return(
            <div className="card">
                <div className="card-content"></div>
                {/* {this.props.content} */}
                {this.props.children}
            </div>
        )
    }
}
// 类的属性
Card.propTypes={
    content: PropTypes.object
}
// props 校验 ts  

ReactDOM.render(

//   <Card content={
//       <div>
//           <h2>React.js 小书</h2>
//           <div>开源，免费，专业，简单</div>
//           订阅：<input />
//       </div>
//   }/>,
  <Card>
      <div>
          <h2>React.js 小书</h2>
          <div>开源，免费，专业，简单</div>
          订阅：<input />
      </div>
  </Card>,
  document.getElementById('root')//挂载点
);