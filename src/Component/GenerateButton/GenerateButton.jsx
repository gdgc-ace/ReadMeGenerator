import React from 'react'
import './GenerateBtn.css'
import { Link  } from 'react-router-dom'
export const GenerateButton = (prop) => {

    const handleclick=()=>{
        prop.click()
    }
    return (
        <>
        <Link to='/Markdown' style={{textDecoration:'none'}}>
        <div className="section-btn  flex items-center justify-center" onClick={handleclick}>
            <div className="font-medium border-2 border-solid  flex items-center justify-center py-1 sm:py-2 px-2 sm:px-4 generate"  role="button" >Generate README</div>
        </div>
        </Link>
        </>
    )
}
