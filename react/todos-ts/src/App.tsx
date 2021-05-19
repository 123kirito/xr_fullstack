import React,{useState,useEffect} from 'react'
// 实战用过哪些业务库 style-component moment格式化时间戳 loash数组去重 better-scroll axios
import classNames from 'classnames'
import TodoForm from './TodoForm'
import axios from './api/axios'

// ts+react 类型检测 1.内置 2.安装npm i @types/react 3.Prop State type interface 进行自定义类型  多了models文件  Todo Todos Promise<Todo[]>

type Todo={ // 声明一个类型  type 自定义类型关键字
  id:number;
  name:string;
  done:boolean;
}

// 元组 
type Todos=Todo[]


const App:React.FC=()=>{
  const [todos,setTodos]=useState<Todos>([])
  const onToggleTodo=(todo:Todo)=>{

  }
  const refreshTodos=()=>{
    axios<Todos>('/api/todos').then(setTodos)
  }
  useEffect(()=>{
    refreshTodos()
  },[])
  return(
    <div className="App">
      <header className="App-header">
        <TodoForm refreshTodos={refreshTodos} />
        <ul>
          {
            todos.map((todo,index)=>(
              <li key={index} className={classNames({done:todo.done})} onClick={()=>onToggleTodo(todo)} >
                {todo.name}
              </li>
            ))
          }
        </ul>
      </header>
    </div>
    )
 }

export default App