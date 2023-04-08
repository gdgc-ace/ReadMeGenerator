import React from 'react'
import { Work } from './Work'
import { useState } from 'react'
import './About.css'
export const About = () => {
  let [Name,setName] = useState('')
  const [title_input1,settitle_input1]=useState("Hi 👋, I'm")
  const [subtitle_input1,setSubtitle_input1]=useState("A passionate frontend developer from India")


  return (
    <>
    <div className="About">
      <div id='form mb-10'>
        <div className="title mb-2 px-1_5">
            <div className='Title_label'>Title</div>
            <div className='grid_input'>
            <input className='border-l-0 border-r-0 border-t-0 outline_line m-r font_size px-2 py-1 font_family' type="text" name="" value={title_input1} id=""  />
            <input className='border-l-0 border-r-0 border-t-0 outline_line font_size name_input px-2 py-1 font_family' type="text" value={Name} name="" placeholder='name' id=""  onChange={(e) => setName(e.target.value)}/>
            </div>
        </div>
        <div className="subtitle mb-2 px-1_5">
            <div className='Subtitle_label'>Subtitle</div>
            <input className='border-l-0 border-r-0 border-t-0 outline_line font_size subtitle_input px-2 py-1 font_family' type="text" value={subtitle_input1} name="" id="" />
        </div>
        <Work/>
      </div>
    </div>
    </>
  )
}