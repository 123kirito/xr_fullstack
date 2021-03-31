import React,{useRef,useState} from 'react';

function Example8() {
    const inputEl=useRef(null)
    const onButtonClick=()=>{
        inputEl.current.value="Hello World!"
        console.log(inputEl)
    }

    const [text,setText]=useState('jspang')
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        </>
    )
}
export default Example8