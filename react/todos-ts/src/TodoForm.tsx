import React from 'react'
import axios from './api/axios'
// 1.props refreshTodos 2.React.FC 3.change React.Change<HTMLInputElement>
interface Props{ // 接口
    refreshTodos:()=>void
}

const TodoForm:React.FC<Props>=({refreshTodos})=>{
    const [name,setName]=React.useState('')
    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newTodo={
            id:Math.random(),
            name,
            done:false
        }
        if(name.trim()){ // 
            axios('/api/add',newTodo)
            refreshTodos()
            setName('')
        }
    }

    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }
    return(
        <>
        <form className="todo-form" onSubmit={onSubmit}>
            <input className="todo-input" value={name} onChange={onChange} placeholder="请输入"/>
        </form>

        </>
    )
}

export default TodoForm