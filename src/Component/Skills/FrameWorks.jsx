import React from 'react'
import { useState , useEffect } from 'react'
export const FrameWorks = (prop) => {

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
        prop.getFrameWorkdata(CheckedList)
    })
  return (
    <div className="FrameWork-div mt-2 mb-4 px-1_5">
            <div className="subtitle-div text-gray-900 py-1">Framework</div>
            <div className='grid-pro-section'>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="django" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="dotnet" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="electron" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg" alt="electron" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="codeigniter" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://cdn.worldvectorlogo.com/logos/codeigniter.svg" alt="codeigniter" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="flask" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="quasar" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" alt="quasar" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="symfony" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://symfony.com/logos/symfony_black_03.svg" alt="symfony" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="rails" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" alt="rails" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="laravel" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" />
                </div>
            </div>
        </div>
  )
}
