import React from 'react'

export const GameEngine = () => {
  return (
    <div className="GameEngine-div mt-2 mb-4 px-1_5">
    <div className="subtitle-div text-gray-900 py-1">Game Engine</div>
    <div className='grid-pro-section'>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="unity" className="checkbox-label__input" /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity"/>
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="unreal" className="checkbox-label__input" /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg" alt="unreal" />
        </div>
    </div>
</div>
  )
}
