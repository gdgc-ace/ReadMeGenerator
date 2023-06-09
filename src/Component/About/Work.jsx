import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalProjectName } from '../Home/Home'
import './Work.css'


export const Work = () => {
  const [currWorkP, setcurrWorkP] = useState('🔭 I’m currently working on')
  const [collaborate, setcollaborate] = useState('👯 I’m looking to collaborate on')
  const [lookingHelp, setlookingHelp] = useState('🤝 I’m looking for help with')
  const [currlearn, setcurrlearn] = useState('🌱 I’m currently learning')
  const [askme, setaskme] = useState('💬 Ask me about')
  const [reachme, setreachme] = useState('📫 How to reach me')
  const [portfoilo, setportfoilo] = useState('👨‍💻 All of my projects are available at')
  const [blog, setblog] = useState('📝 I regularly write articles on')
  const [expinp, setexpinp] = useState('📄 Know about my experiences')
  const [factinp, setfactinp] = useState('⚡ Fun fact')

  const [prefix, setprefix] = useState(
    ['🔭 I’m currently working on',
    '👯 I’m looking to collaborate on',
    '🤝 I’m looking for help with',
    '🌱 I’m currently learning',
    '💬 Ask me about',
    '📫 How to reach me',
    '👨‍💻 All of my projects are available at',
    '📝 I regularly write articles on', 
    '📄 Know about my experiences', 
    '⚡ Fun fact'
    ])

  
  const [projectName, setprojectName] = useState(['', '', ''])
  const [projectLinks, setprojectLinks] = useState(['', '', ''])

  const { getProjectNames, getProjectLinks ,getProjectPrefix} = useContext(GlobalProjectName)

  const handleInputChange = (index, value) => {
    setprojectName(prevState => {
      const newValues = [...prevState];
      newValues[index] = value;
      getProjectNames(newValues)
      return newValues;
    });
  }
  const handleInputChangeLinks = (index, value) => {
    setprojectLinks(prevState => {
      const newValues = [...prevState];
      newValues[index] = value;
      getProjectLinks(newValues)
      return newValues;
    });
  }
  const handleInputChangePrefix = (index, value) => {
    setprefix(prevState => {
      const newValues = [...prevState];
      newValues[index] = value;
      getProjectPrefix(newValues)
      return newValues;
    });
  }

  useEffect(() => {
    getProjectPrefix(prefix); 
    getProjectLinks(projectName)
    getProjectLinks(projectLinks)
  }, []);
  return (
    <div className='Work_container px-1_5'>
      <div className='Work_label'>Work</div>
      <div className="grid_inputs mb-10 ">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={prefix[0]} type="text" name="" id="" onChange={(e) => handleInputChangePrefix(0, e.target.value)} />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project name' value={projectName[0]} onChange={(e) => handleInputChange(0, e.target.value)} type="text" name="" id="" />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project link' type="text" name="" id="" value={projectLinks[0]} onChange={(e) => handleInputChangeLinks(0, e.target.value)} />
      </div>
      <div className="grid_inputs mb-10 ">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={prefix[1]} type="text" name="" id="" onChange={(e) => handleInputChangePrefix(1, e.target.value)} />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project name' type="text" name="" id="" value={projectName[1]} onChange={(e) => handleInputChange(1, e.target.value)} />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project link' type="text" name="" id="" value={projectLinks[1]} onChange={(e) => handleInputChangeLinks(1, e.target.value)} />
      </div>
      <div className="grid_inputs mb-10 ">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={prefix[2]} type="text" name="" id="" onChange={(e) => handleInputChangePrefix(2, e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project name' type="text" name="" id="" value={projectName[2]} onChange={(e) => handleInputChange(2, e.target.value)} />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='project link' type="text" name="" id="" value={projectLinks[2]} onChange={(e) => handleInputChangeLinks(2, e.target.value)} />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={prefix[3]} type="text" name="" id="" onChange={(e) => handleInputChangePrefix(3, e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='Frameworks, courses etc.' type="text" name="" id="" value={projectName[3]} onChange={(e) => handleInputChange(3, e.target.value)} />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={prefix[4]} type="text" name="" id="" onChange={(e) => handleInputChangePrefix(4, e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='react, vue and gsap' type="text" name="" id="" value={projectName[4]} onChange={(e) => handleInputChange(4, e.target.value)} />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={prefix[5]} type="text" name="" id="" onChange={(e) => handleInputChangePrefix(5, e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='example@gmail.com' type="text" name="" id="" value={projectName[5]} onChange={(e) => handleInputChange(5, e.target.value)} />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={prefix[6]} type="text" name="" id="" onChange={(e) => handleInputChangePrefix(6, e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='portfolio link' type="text" name="" id="" value={projectName[6]} onChange={(e) => handleInputChange(6, e.target.value)} />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family'value={prefix[7]} type="text" name="" id="" onChange={(e) => handleInputChangePrefix(7, e.target.value)} />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='blog link' type="text" name="" id="" value={projectName[7]} onChange={(e) => handleInputChange(7, e.target.value)} />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={prefix[8]} type="text" name="" id="" onChange={(e) => handleInputChangePrefix(8, e.target.value)}/>
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='resume link' type="text" name="" id="" value={projectName[8]} onChange={(e) => handleInputChange(8, e.target.value)} />
      </div>
      <div className="grid_inputs2 mb-10">
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' value={prefix[9]} type="text" name="" id="" onChange={(e) => handleInputChangePrefix(9, e.target.value)} />
        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='I think I am funny' type="text" name="" id="" value={projectName[9]} onChange={(e) => handleInputChange(9, e.target.value)} />
      </div>
    </div>
  )
}
