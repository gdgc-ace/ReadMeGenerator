import React from 'react'
import { useState , useEffect } from 'react'
export const Software = (prop) => {

    const [CheckedList , setCheckedList]=useState([])
    const handleCheck=(e)=>{
        const id = e.target.id;
        const checked = e.target.checked;

        if(checked){
            setCheckedList([
                ...CheckedList , id
            ])
        }
        else{
            setCheckedList(CheckedList.filter((e)=>(e!==id)))
        }
    }
    useEffect(()=>{
        prop.getSoftwareData(CheckedList)
    })
  return (
    <div className="Software-div mt-2 mb-4 px-1_5">
    <div className="subtitle-div text-gray-900 py-1">Software</div>
    <div className='grid-pro-section'>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="illustrator" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="photoshop" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="xd" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="xd" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="figma" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="blender" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="blender" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="sketch" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg" alt="sketch" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="invision" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg" alt="invision" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="framer" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="framer" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="matlab" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="postman" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" />
        </div>
    </div>
</div>
  )
}
