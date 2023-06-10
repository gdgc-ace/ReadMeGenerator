import { About } from '../About/About'
import { Skills } from '../Skills/Skills'
import { Social } from '../Social/Social'
import { GenerateButton } from '../GenerateButton/GenerateButton'
import { createContext } from 'react'

export const GlobalProjectName = createContext()

export const Home = () => {

  const data = {
    title: '',
    name: '',
    subtitle: '',
    PrefixArray:[],
    ProjectNameArray:[],
    ProjectLinksArray:[],
    ProgramL: [],
    FrontEnd: [],
    App: [],
    Database: [],
    BackEnd: [],
    FrameW: [],
    DataVisulalization: [],
    Testing: [],
    Software: [],
    GameENgine: [],
    Others: [],
    UserNames:[]

  }
  const getAboutData = (Name, subtitle_input1, title_input1) => {
    data.name = Name;
    data.subtitle = subtitle_input1;
    data.title = title_input1;
  }

  const getSkillsData = (progrmLArray, FrontEndArray, AppDevArray, DBArray, BackEndArray, FrameArray, DVArray, TestingArray, SoftwareArray, GameENgineArray, OthersArray) => {
    data.ProgramL = progrmLArray
    data.FrontEnd = FrontEndArray
    data.App = AppDevArray
    data.Database = DBArray
    data.BackEnd = BackEndArray
    data.FrameW = FrameArray
    data.DataVisulalization = DVArray
    data.Testing = TestingArray
    data.Software = SoftwareArray
    data.GameENgine = GameENgineArray
    data.Others = OthersArray
  }
  const handleClick = () => {
    localStorage.setItem('Data', JSON.stringify(data))
  }

  const getProjectNames=(ProjectNames)=>{
   data.ProjectNameArray=ProjectNames
  }

  const getProjectLinks=(ProjectLinks)=>{
   data.ProjectLinksArray=ProjectLinks
  }

  const getProjectPrefix=(Prefixes)=>{
   data.PrefixArray=Prefixes
  }

  const getUserNames=(UserNames)=>{
   data.UserNames=UserNames
  }




  return (
    <>
      <GlobalProjectName.Provider value={{getProjectNames,getProjectLinks,getProjectPrefix , getUserNames}}>
        <About getNameandSubtile={getAboutData} />
        <Skills getSkills={getSkillsData} />
        <Social />
        <GenerateButton click={handleClick} data={data} />
      </GlobalProjectName.Provider>
    </>
  )
}
