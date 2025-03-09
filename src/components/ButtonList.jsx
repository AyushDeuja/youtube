import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Gaming", "Songs", "Live", "Cricket", "Football", "News", "Cooking", "tmkoc", "Football", "News", "Cooking", "tmkoc"]
  return (
    <div className='flex'>
      {list.map((li,index) => <Button key={index} name={li}/>)}
    </div>
  )
}

export default ButtonList
