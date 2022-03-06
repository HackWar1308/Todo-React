import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  const [input , setInput] = useState(props.edit ? props.edit.value:'')

  const inputRef = useRef(null)

  useEffect(() =>{
    inputRef.current.focus()
  })

  const handleChange = e =>{
    setInput(e.target.value)
  }

  const handSubmit = e=>{
    e.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random()*1000),
      text: input 
    });
    setInput('');
  };


  return (
    <form className='todo-form' onSubmit={handSubmit}>
      {props.edit?(
      <>
      <div><input 
      type="text"
      placeholder='Update Todo'
      value={input}
      name='text'
      className='todo-input'
      onChange={handleChange}
      ref={inputRef} />
      <button className='todo-button edit'>Update</button></div></>):
      (<>
      <div><input 
        type="text"
        placeholder='Add new Todo'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef} />
        <button className='todo-button'>Add new</button></div></>)
      }
    </form>
  )
}

export default TodoForm