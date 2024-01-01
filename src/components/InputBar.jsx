import React, {useState} from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import Task from "./task";



const InputBar = () => {
  const [role, setRole] = useState('go shopping');

  const handleClick = () => {
    console.log('helo')
  }
  const handleForm = (e) => {
    setRole(e.target.value)
    
  }
  return (
    <>
      <section
      className="border-2 border-black bg-red-200 flex" 
      >
        <input 
        type="text" 
        className="border-2
         border-black p- "
         value = {role} 
         onChange={handleForm}
        />
        <FaRegPlusSquare 
        role = 'button'
        size={40}
        style = {{
          color: 'blue',
        }}
        onClick = {handleClick}
         />
      </section>
      {
        role.length > 0 ?
         <Task text = {role} /> : ''

      }
   
      
    </>
  );
};

export default InputBar;
