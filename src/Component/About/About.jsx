import React from 'react'
import { Work } from './Work'
import { useState } from 'react'
import "./About.css"

export const About = (prop) => {
  let [Name,setName] = useState('')
  const [title_input1,settitle_input1]=useState("Hi 👋, I'm")
  const [subtitle_input1,setSubtitle_input1]=useState("")
 
  prop.getNameandSubtile(Name,subtitle_input1,title_input1)
  

  return (
    <>
    <div className="About">
      <div id='form mb-10'>
        <div className="title mb-2 px-1_5">
            <div className='Title_label'>Title</div>
            <div className='grid_input'>
            <p className='outline_line m-r font_size px-2 py-1 font_family'>"Hi 👋, I'm"</p>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" value={Name} name="" placeholder='Name' id=""  onChange={(e) => setName(e.target.value)}/>
            </div>
        </div>
        
        <div className="subtitle mb-2 px-1_5">
            <div className='Subtitle_label'>Subtitle</div>
            <p className='outline_line m-r font_size px-2 py-1 font_family'>A passionate frontend developer from India</p>
        </div>
        <Work/>
      </div>
    </div>
    </>
  )
}