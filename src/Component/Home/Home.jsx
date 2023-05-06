import { About } from '../About/About'
import { Skills } from '../Skills/Skills'
import { Social } from '../Social/Social'
import { GenerateButton } from '../GenerateButton/GenerateButton'
import { useEffect } from 'react'

export const Home = () => {

  const data = {
    title:'',
    name:'',
    subtitle:'',
    ProgramL:[],
    FrontEnd:[],
    App:[],
    Database:[],
    BackEnd:[],
    FrameW:[],
    DataVisulalization:[],
    Testing:[],
    Software:[],
    GameENgine:[],
    Others:[]

  }
  const getAboutData=(Name,subtitle_input1,title_input1)=>{
    data.name=Name;
    data.subtitle=subtitle_input1;
    data.title=title_input1;
  }

  const getSkillsData=(progrmLArray,FrontEndArray,AppDevArray,DBArray,BackEndArray,FrameArray,DVArray,TestingArray,SoftwareArray,GameENgineArray,OthersArray)=>{
    data.ProgramL=progrmLArray
    data.FrontEnd=FrontEndArray
    data.App=AppDevArray
    data.Database=DBArray
    data.BackEnd=BackEndArray
    data.FrameW=FrameArray
    data.DataVisulalization=DVArray
    data.Testing=TestingArray
    data.Software=SoftwareArray
    data.GameENgine=GameENgineArray
    data.Others=OthersArray
  }
  const handleClick=()=>{
    console.log(data.title ,data.name,"\n",data.subtitle,"\n",data.ProgramL)
    console.log(data.FrontEnd)
    console.log(data.App)
    console.log(data.Database)
    console.log(data.BackEnd)
    console.log(data.FrameW)
    console.log(data.DataVisulalization)
    console.log(data.Testing)
    console.log(data.Software)
    console.log(data.GameENgine)
    console.log(data.Others)
    localStorage.setItem('Data' , JSON.stringify(data))
  }  


    



  return (
    <>
    <About getNameandSubtile={getAboutData}/>
    <Skills getSkills={getSkillsData}/>
    <Social />
    <GenerateButton click={handleClick} data={data}/>
    </>
  )
}
