import React from 'react'
import { useState,useEffect } from 'react'
export const FrontEnd = (prop) => {


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
        prop.getFrontData(CheckedList)
    })

    return (
        <div className="FrontEnd-div mt-2 mb-4 px-1_5">
            <div className="subtitle-div text-gray-900 py-1">Frontend Development</div>
            <div className='grid-pro-section'>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="vuejs" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="react" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="angular" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="css3" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="bootstrap" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="html5" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="sass" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="redux" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="tailwind" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="materialize" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" alt="materialize" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="svelte" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="svelte" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="pug" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://cdn.worldvectorlogo.com/logos/pug.svg" alt="pug" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="gulp" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg" alt="gulp" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="vuetify" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://bestofjs.org/logos/vuetify.svg" alt="vuetify" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="ember" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg" alt="ember" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="bulma" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg" alt="bulma" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="babel" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" />
                </div>
            </div>
        </div>
    )
}
