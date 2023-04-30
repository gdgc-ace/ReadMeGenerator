import React from 'react'
import { useState ,useEffect } from 'react'
export const BackendAsService = (prop) => {
    
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
        prop.getBackendData(CheckedList)
    })

    return (
        <div className="BAS-div mt-2 mb-4 px-1_5">
            <div className="subtitle-div text-gray-900 py-1">Backend as a Service</div>
            <div className='grid-pro-section'>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="firebase" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="appwrite" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg" alt="appwrite" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="amplify" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://docs.amplify.aws/assets/logo-dark.svg" alt="amplify" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="heroku" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" />
                </div>
            </div>
        </div>
    )
}
