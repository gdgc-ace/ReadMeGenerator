import React from 'react'
import { useState , useEffect } from 'react'
export const Others = (prop) => {


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
        prop.getOthersData(CheckedList)
    })

  return (
    <div className="Other-div mt-2 mb-4 px-1_5">
    <div className="subtitle-div text-gray-900 py-1">Other</div>
    <div className='grid-pro-section'>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="linux" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="git" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="arduino" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" />
        </div>
    </div>
</div>
  )
}
