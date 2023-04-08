import React from 'react'
import './Skills.css'
import { ProgrammingLanguages } from './ProgrammingLanguages'
import { FrontEnd } from './FrontEnd'
import { AppDev } from './AppDev'
import { Database } from './Database'
import { BackendAsService } from './BackendAsService'
import { FrameWorks } from './FrameWorks'
import { DataVisualiaztion } from './DataVisualiaztion'
import { Testing } from './Testing'
import { Software } from './Software'
import { GameEngine } from './GameEngine'
import { Others } from './Others'
export const Skills = () => {
    return (
        <>
            <div className="Skiils mb-10">
                <div className="title mt-2 mb-4 px-1_5">
                    <div className="grid-search">
                        <div className='Title_label'>Skills</div>
                        <input type="text" className="leading:none text-xs my-0 py-1 px-2 pr-8 sm:text-xl border-2 border-gray-900 focus:border-blue-700 placeholder-gray-700" placeholder="Search Skills" />
                    </div>
                </div>
                <ProgrammingLanguages/>
                <FrontEnd/>
                <AppDev/>
                <Database/>
                <BackendAsService/>
                <FrameWorks/>
                <DataVisualiaztion/>
                <Testing/>
                <Software/>
                <GameEngine/>
                <Others/>
            </div>
        </>
    )
}
