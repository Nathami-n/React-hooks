import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Task = ({text}) => {
    const [tick, setTick] = useState(false)
    const handleChange = () => {
        setTick(!tick)

}
  return (
    <>
    <section
    className='flex  gap-6 items-center'
    >
        <input 
        type="checkbox" 
        className='h-8 w-8'
        onChange={handleChange}
        checked={tick}
        />
        <h1
        className={`flex-[0.3] text-3xl`} 

        >{text}</h1>
        <FaTrashAlt
        size={30}
        role='button'
        className='text-[#32e]' 
        />

        </section>
    </>
  )
}

export default Task