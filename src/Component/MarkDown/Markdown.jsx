import React from 'react'
import './Markdown.css'
import { icons } from './skills'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Markdown = () => {

  const FinalData = JSON.parse(localStorage.getItem('Data'))
  let skilllist;
  if (localStorage.length != 0) {
    skilllist = FinalData.ProgramL.concat(FinalData.App, FinalData.BackEnd, FinalData.DataVisulalization,
      FinalData.Database, FinalData.FrameW, FinalData.FrontEnd, FinalData.GameENgine, FinalData.Testing, FinalData.Others
      , FinalData.Software)
  }
  let skilllist2 = ['flutter', 'reactnative', 'firebase']



  const handleCopy = () => {
    const htmlcontent = document.getElementById('Markdown-section').innerText
    navigator.clipboard.writeText(htmlcontent).then(() => {
      console.log("copied")
      toast.success('Copied', {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }).catch((error) => {
      console.error(`Error copying to clipboard: ${error}`);
      toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }

  return (
    <>
      <div className="main_container m-4">
        <div className="markdown-section">
          <div className="grid_btns">
            <Link style={{ textDecoration: 'none' }} to='/'> <button type="button" className="text-base  w_btn border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center p-1 extra"><svg aria-hidden="true" role="img" className="octicon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ display: ' inline-block', userSelect: 'none', verticalAlign: 'text-bottom' }} ><path fillRule="evenodd" d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"></path></svg><span className="hidden sm:block">back to edit</span></button></Link>
            <button type="button" className="text-base  w_btn border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center p-1"><svg aria-hidden="true" role="img" className="octicon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ display: ' inline-block', userSelect: 'none', verticalAlign: 'text-bottom' }} onClick={handleCopy}><path onClick={handleCopy} fillRule="evenodd" d="M4.75 3A1.75 1.75 0 003 4.75v9.5c0 .966.784 1.75 1.75 1.75h1.5a.75.75 0 000-1.5h-1.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.25-.25h9.5a.25.25 0 01.25.25v1.5a.75.75 0 001.5 0v-1.5A1.75 1.75 0 0014.25 3h-9.5zm5 5A1.75 1.75 0 008 9.75v9.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0021 19.25v-9.5A1.75 1.75 0 0019.25 8h-9.5zM9.5 9.75a.25.25 0 01.25-.25h9.5a.25.25 0 01.25.25v9.5a.25.25 0 01-.25.25h-9.5a.25.25 0 01-.25-.25v-9.5z"></path></svg><span onClick={handleCopy} className="hidden sm:block">copy-markdown</span></button>
            <button type="button" className="text-base  w_btn border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center p-1"><svg aria-hidden="true" role="img" className="octicon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ display: ' inline-block', userSelect: 'none', verticalAlign: 'text-bottom' }}><path d="M4.97 11.03a.75.75 0 111.06-1.06L11 14.94V2.75a.75.75 0 011.5 0v12.19l4.97-4.97a.75.75 0 111.06 1.06l-6.25 6.25a.75.75 0 01-1.06 0l-6.25-6.25zm-.22 9.47a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H4.75z"></path></svg><span className="hidden sm:block">download</span></button>
            <button type="button" className="text-base  w_btn border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center p-1"><svg aria-hidden="true" role="img" className="octicon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{ display: ' inline-block', userSelect: 'none', verticalAlign: 'text-bottom' }}><path fillRule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg><span className="hidden sm:block">preview</span></button>
          </div>
          <div className="w-full w-set text-sm text-gray-900 shadow-xl mt-2 p-4 bg-gray-100 border-2 border-solid border-gray-800" id="markdown-box">
            <div className="Markdown-section" id='Markdown-section' style={{ margin: '20px' }}>
              {
                FinalData.name == '' && FinalData.App == 0 && FinalData.BackEnd == 0 && FinalData.DataVisulalization == 0 &&
                  FinalData.Database == 0 && FinalData.FrameW == 0 && FinalData.FrontEnd == 0 && FinalData.GameENgine == 0 && FinalData.Testing == 0 && FinalData.Others == 0
                  && FinalData.Software == 0 ?
                  <>
                    <Title name='Dev' title="Hi 👋, I'm" />
                    <SubTitle subtitle="A passionate frontend developer from India" />
                    <DisplaySkills skills={skilllist2} icons={icons} />
                  </>
                  :
                  <>
                    <Title name={FinalData.name} title={FinalData.title} />
                    <SubTitle subtitle={FinalData.subtitle} />
                    <DisplaySkills skills={skilllist} icons={icons} />
                    <DisplayAllWorks prefixArray={FinalData.PrefixArray} projectName={FinalData.ProjectNameArray} projectLinks={FinalData.ProjectLinksArray} />
                  </>
              }
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </>
  )
}


const Title = (props) => {
  const { title, name } = props;
  if (name) {
    return (
      <>
        {`<h1 align="center">${`${title}  ${name}`}</h1>`}
        <br />
      </>
    );
  }
  return '';
};

const SubTitle = (props) => {
  const { subtitle } = props;
  if (subtitle) {
    return (
      <>
        {`<h3 align="center">${subtitle}</h3>`}
        <br />
        <br />
      </>
    );
  }
  return '';
};

const DisplayWork = (prop) => {

  const { project, link , prefix } = prop

  if (prefix && project) {
    if (link) {
      return (
        <>
          {`- ${prefix} [${project}](${link})`}
          <br />
          <br />
        </>
      );
    }
    return (
      <>
        {`- ${prefix} **${project}**`}
        <br />
        <br />
      </>
    );
  }
  if (prefix && link) {
    return (
      <>
        {`- ${prefix} [${link}](${link})`}
        <br />
        <br />
      </>
    );
  }
  return '';
}

const DisplayAllWorks = (prop) => {

  const { projectName, projectLinks , prefixArray } = prop;
  return (
    <>
      <DisplayWork prefix={prefixArray[0]} project={projectName[0]} link={projectLinks[0]} />
      <DisplayWork prefix={prefixArray[1]} project={projectName[1]} link={projectLinks[1]} />
      <DisplayWork prefix={prefixArray[2]} project={projectName[2]} link={projectLinks[2]} />
      <DisplayWork prefix={prefixArray[3]} project={projectName[3]} />
      <DisplayWork prefix={prefixArray[4]} project={projectName[4]} />
      <DisplayWork prefix={prefixArray[5]} project={projectName[5]} />
      <DisplayWork prefix={prefixArray[6]} project={projectName[6]} />
      <DisplayWork prefix={prefixArray[7]} project={projectName[7]} />
      <DisplayWork prefix={prefixArray[8]} project={projectName[8]} />
      <DisplayWork prefix={prefixArray[9]} project={projectName[9]} />
    </>
  )
}

const DisplaySkills = (props) => {
  const { skills } = props;
  const listChosenSkills = [];
  skills.map((skill) => {
    if (skill) {
      listChosenSkills.push(
        `
        <a href="" target="_blank" rel="noreferrer">
          <img src="${icons[skill]}" alt="${skill}" width="40" height="40"/>
        </a>
        `,
      );
    }
  });
  return listChosenSkills.length > 0 ? (
    <>
      {`<p align="left">${listChosenSkills.join(' ')}</p>`}
      <br />
      <br />
    </>
  ) : (
    ''
  );
};

