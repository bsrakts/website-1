import React from 'react'
import Title from '../Title/Title';
import style from './Event.module.css';
const Event = () => {
  return (
    <div>
      <div className='flex flex-col justify-start items-center'>
       <Title level= {6}> Yaklaşan Etkinlikler</Title>
       </div>
    </div>
  )
}

export default Event;
