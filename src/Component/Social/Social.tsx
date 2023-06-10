import React , {useEffect, useState} from 'react'
import { useContext } from 'react'
import { GlobalProjectName } from '../Home/Home'
import './Social.css'
export const Social = () => {

    const [UserNames, setUserNames] = useState(['', '', '','','','', '', '','','','', '', '','','','', '', '','','','','','',''])
    
    const { getUserNames } = useContext(GlobalProjectName)

    const handleUserNames = (index, value) => {
        setUserNames(prevState => {
          const newValues = [...prevState];
          newValues[index] = value;
          getUserNames(newValues)
          return newValues;
        });
      }

    useEffect(()=>{
        getUserNames(UserNames)
    })
    
    return (
        <div className="Social mb-10">
            <div className="title mt-2 mb-4 px-1_5">
                <div className='Title_label'>Social</div>
            </div>
            <div className="social-container">
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" className="w-h-img2" alt="github" />
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family'placeholder='github username' type="text" name="" id="" value={UserNames[0]} onChange={(e) => handleUserNames(0, e.target.value)} />
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" className="w-h-img2" alt="twitter"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family'placeholder='twitter username' type="text" name="" id="" value={UserNames[1]} onChange={(e) => handleUserNames(1, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" className="w-h-img2" alt="dev.to"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family'placeholder='dev.to username' type="text" name="" id="" value={UserNames[2]} onChange={(e) => handleUserNames(2, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg" className="w-h-img2" alt="codepen"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family'placeholder='codepen username' type="text" name="" id="" value={UserNames[3]} onChange={(e) => handleUserNames(3, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg" className="w-h-img2" alt="codesandbox"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='codesandbox username' type="text" name="" id="" value={UserNames[4]} onChange={(e) => handleUserNames(4, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg" className="w-h-img2" alt="stackoverflow"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='stackoverflow user ID' type="text" name="" id="" value={UserNames[5]} onChange={(e) => handleUserNames(5, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" className="w-h-img2" alt="linkedin"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='linkedin username' type="text" name="" id="" value={UserNames[6]} onChange={(e) => handleUserNames(6, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/kaggle.svg" className="w-h-img2" alt="kaggle"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='kaggle username' type="text" name="" id="" value={UserNames[7]} onChange={(e) => handleUserNames(7, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" className="w-h-img2" alt="facebook"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='facebook username' type="text" name="" id="" value={UserNames[8]} onChange={(e) => handleUserNames(8, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" className="w-h-img2" alt="instagram"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='instagram username' type="text" name="" id="" value={UserNames[9]} onChange={(e) => handleUserNames(9, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/dribbble.svg" className="w-h-img2" alt="dribbble"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='dribbble username' type="text" name="" id="" value={UserNames[10]} onChange={(e) => handleUserNames(10, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/behance.svg" className="w-h-img2" alt="behance"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='behance username' type="text" name="" id="" value={UserNames[11]} onChange={(e) => handleUserNames(11, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hashnode.svg" className="w-h-img2" alt="hashnode"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='hashnode username (with @)' type="text" name="" id="" value={UserNames[12]} onChange={(e) => handleUserNames(12, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/medium.svg" className="w-h-img2" alt="medium"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='medium username (with @)' type="text" name="" id="" value={UserNames[13]} onChange={(e) => handleUserNames(13, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/youtube.svg" className="w-h-img2" alt="youtube"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='youtube channel name' type="text" name="" id="" value={UserNames[14]} onChange={(e) => handleUserNames(14, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg" className="w-h-img2" alt="codechef"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='codechef username' type="text" name="" id="" value={UserNames[15]} onChange={(e) => handleUserNames(15, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/hackerrank.svg" className="w-h-img2" alt="hackerrank"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='hackerrank username' type="text" name="" id="" value={UserNames[16]} onChange={(e) => handleUserNames(16, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codeforces.svg" className="w-h-img2" alt="codeforces"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='codeforces username' type="text" name="" id="" value={UserNames[17]} onChange={(e) => handleUserNames(17, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/leetcode.svg" className="w-h-img2" alt="leetcode"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='leetcode username' type="text" name="" id="" value={UserNames[18]} onChange={(e) => handleUserNames(18, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/topcoder.svg" className="w-h-img2" alt="topcoder"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='topcoder username' type="text" name="" id="" value={UserNames[19]} onChange={(e) => handleUserNames(19, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/hackerearth.svg" className="w-h-img2" alt="hackerearth"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='hackerearth user (with @)' type="text" name="" id="" value={UserNames[20]} onChange={(e) => handleUserNames(20, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/geeksforgeeks.svg" className="w-h-img2" alt="geeksforgeeks"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='GFG (<username>/profile)' type="text" name="" id="" value={UserNames[21]} onChange={(e) => handleUserNames(21, e.target.value)}/>
                    </div>
                </div>
                <div className="grid_inputs3 mb-10">
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/discord.svg" className="w-h-img2" alt="discord"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='discord invite (only code)' type="text" name="" id="" value={UserNames[22]} onChange={(e) => handleUserNames(22, e.target.value)}/>
                    </div>
                    <div className="grid_img_inp">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/rss.svg" className="w-h-img2" alt="rssfeed"/>
                        <input className='border-l-0 border-r-0 border-t-0 outline_line font_size  px-2 py-1 font_family' placeholder='RSS feed URL' type="text" name="" id="" value={UserNames[23]} onChange={(e) => handleUserNames(23, e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
