import React from 'react';
import './style.css'


interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField = ({todo, setTodo}: Props) => {
  return (
   <form className="input">
       <input type="input" 
       value={todo}
       onChange={
           (e)=>setTodo(e.target.value)
       }
       className='input_box' placeholder='Enter a task here' />
       <button className='input_submit' type='submit'>Go</button>
   </form>
  )
}

export default InputField