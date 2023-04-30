import React from 'react'
import { useState } from 'react'
import './Work.css'
export const Work = () => {
  const [currWorkP, setcurrWorkP] = useState('🔭 I’m currently working on')
  const [collaborate, setcollaborate] = useState('👯 I’m looking to collaborate on')
  const [lookingHelp, setlookingHelp] = useState('🤝 I’m looking for help with')
  const [currlearn,setcurrlearn] = useState('🌱 I’m currently learning')
  const [askme,setaskme] = useState('💬 Ask me about')
  const [reachme,setreachme] =useState('📫 How to reach me')
  const [portfoilo,setportfoilo] = useState('👨‍💻 All of my projects are available at')
  const [blog,setblog] = useState('📝 I regularly write articles on')
  const [expinp , setexpinp] = useState('📄 Know about my experiences')
  const [factinp , setfactinp] =useState('⚡ Fun fact')
  const [projectName ,setprojectName]=useState(['','','','',''])

  const handleInputChange = (index, value) => {
    setprojectName(prevState => {
      const newValues = [...prevState];
      newValues[index] = value;
      return newValues;
    });
  }
  return (
    <div className='Work_container px-1_5'>
      <div className='Work_label'>Work</div>
      <div className="grid_inputs mb-10 ">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={currWorkP} type="text" name="" id="" onChange={(e)=> setcurrWorkP(e.target.value)} />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project name' value={projectName[0]} onChange={(e)=> handleInputChange(0,e.target.value)} type="text" name="" id="" />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project link' type="text" name="" id="" />
      </div>
      <div className="grid_inputs mb-10 ">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={collaborate} type="text" name="" id="" onChange={(e)=> setcollaborate(e.target.value)} />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project name' type="text" name="" id="" value={projectName[1]} onChange={(e)=> handleInputChange(1,e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project link' type="text" name="" id="" />
      </div>
      <div className="grid_inputs mb-10 ">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={lookingHelp} type="text" name="" id="" onChange={(e)=> setlookingHelp(e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project name' type="text" name="" id="" />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project link' type="text" name="" id="" />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={currlearn} type="text" name="" id="" onChange={(e)=> setcurrlearn(e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='Frameworks, courses etc.' type="text" name="" id="" />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={askme} type="text" name="" id="" onChange={(e)=> setaskme(e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='react, vue and gsap' type="text" name="" id="" />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={reachme} type="text" name="" id="" onChange={(e)=> setreachme(e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='example@gmail.com' type="text" name="" id="" />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={portfoilo} type="text" name="" id="" onChange={(e)=> setportfoilo(e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='portfolio link' type="text" name="" id="" />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={blog} type="text" name="" id="" onChange={(e)=> setblog(e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='blog link' type="text" name="" id="" />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={expinp} type="text" name="" id="" onChange={(e)=> setexpinp(e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='resume link' type="text" name="" id="" />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={factinp} type="text" name="" id="" onChange={(e)=> setfactinp(e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='I think I am funny' type="text" name="" id="" />
      </div>
    </div>
  )
}
