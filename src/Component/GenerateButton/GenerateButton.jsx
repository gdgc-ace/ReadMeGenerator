import React from 'react'
import './GenerateBtn.css'
import { Link } from 'react-router-dom'
export const GenerateButton = (prop) => {

    const handleclick = () => {
        prop.click()
    }
    return (
        <>
            <Link to='/Markdown' style={{ textDecoration: 'none' }}>
                <div className='flex flex-col items-center justify-center'>
                    <button className="section-btn flex  bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-2 rounded-full mb-7 " onClick={handleclick}>
                        <div className=" font_size_s font_family text-lg flex items-center justify-center py-1 sm:py-2 px-2 sm:px-4 generate" role="button" >Generate README</div>
                    </button>
                </div>


            </Link>
        </>
    )
}
