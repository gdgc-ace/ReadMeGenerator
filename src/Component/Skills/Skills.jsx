import React, { useState ,useEffect } from 'react'
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

export const Skills = (prop) => {


    const [ProgramL ,setProgramL]=useState([])
    const [FrontData ,setFrontData]=useState([])
    const [AppData ,setAppData]=useState([])
    const [DBdata ,setDBdata]=useState([])
    const [BackData ,setBackdata]=useState([])
    const [FrameData ,setFrameData]=useState([])
    const [DVdata ,setDVdata]=useState([])
    const [Testingdata ,setTestingdata]=useState([])
    const [SoftwareData ,setSoftwareData]=useState([])
    const [GameEData ,setGameEData]=useState([])
    const [OthersData ,setOthersData]=useState([])
    const handleProgramL=(pL)=>{
        setProgramL(pL)
    }
    const handleFront=(FE)=>{
        setFrontData(FE)
    }
    const handleAppdata=(ApD)=>{
        setAppData(ApD)
    }
    const handleDBdata=(DB)=>{
        setDBdata(DB)
    }
    const handlebackendData=(Backdata)=>{
        setBackdata(Backdata)
    }
    const handleFrameData =(FW)=>{
        setFrameData(FW)
    }
    const handleDVData =(DV)=>{
        setDVdata(DV)
    }
    const handleTestingData =(TD)=>{
        setTestingdata(TD)
    }
    const handleSoftwareData=(SD)=>{
        setSoftwareData(SD)
    }
    const handleGameEdata=(ED)=>{
        setGameEData(ED)
    }
    const handleOthersData=(OD)=>{
        setOthersData(OD)
    }
    useEffect(()=>{
        prop.getSkills(ProgramL,FrontData,AppData,DBdata,BackData,FrameData,DVdata,Testingdata,SoftwareData,GameEData,OthersData)
    })

    return (
        <>
            <div className="Skiils mb-10">
                <div className="title mt-2 mb-4 px-1_5">
                    <div className="grid-search">
                        <div className='Title_label'>Skills</div>
                        <input type="text" className="leading:none text-xs my-0 py-1 px-2 pr-8 sm:text-xl border-2 border-gray-900 focus:border-blue-700 placeholder-gray-700" placeholder="Search Skills" />
                    </div>
                </div>
                <ProgrammingLanguages getPLData={handleProgramL}/>
                <FrontEnd getFrontData={handleFront}/>
                <AppDev getAppData={handleAppdata}/>
                <Database getDatabaseData={handleDBdata}/>
                <BackendAsService getBackendData={handlebackendData}/>
                <FrameWorks getFrameWorkdata={handleFrameData}/>
                <DataVisualiaztion getDataVdata={handleDVData}/>
                <Testing getTestingData={handleTestingData}/>
                <Software getSoftwareData={handleSoftwareData}/>
                <GameEngine getGameEdata={handleGameEdata}/>
                <Others getOthersData={handleOthersData}/>
            </div>
        </>
    )
}
