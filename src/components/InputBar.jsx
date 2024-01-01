import React,{useState} from 'react'
import {FaRegPlusSquare, FaTrashAlt} from 'react-icons/fa'


const InputBar = () => {
  const [textValue, setTextValue] = useState('')
  const [tasks, setTasks] = useState([])
  const handleTextValue = (e) => {
    setTextValue(e.target.value)
  }

  const handleClick = () => {
      if(textValue.trim() !== '') {
        setTasks([...tasks, textValue])
        setTextValue('')
      }
  }
  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index,1);
    setTasks(updatedTasks)
  }
 
  return (
    <>
    <section className='flex'>
    <input 
    type="text"
    value= {textValue}
    onChange={handleTextValue}
    className='border-black border-2 outline-none'
     />
    <FaRegPlusSquare
    role='button'
    onClick={handleClick}
    size={30}
    style={{
      color: 'blue'
    }}
    />
    </section>

    <ul>
     {
      tasks.map((task,index)=> {
        return (
        <section key={tasks.indexOf(task)} className='flex gap-5 mt-5 ml-28'>
          <input 
          type="checkbox" 
          className=' w-8 h-8'
           />
        <li>{task}</li>
        <FaTrashAlt
        role='button'
        style={{
          color: 'blue',
          fontSize: "30px"
        }}
        onClick={()=> {
          handleDelete(index)
        }}
         />
        </section>
        )
      })
     }
    </ul>

    </>
  )
}

export default InputBar