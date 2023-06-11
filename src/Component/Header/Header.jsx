import React from "react"
import './Header.css'

export const Header = () => {
    return (
        <>
            <div className='header-container text-center '>

                <h1 className='text-3xl m-5 flex flex-col font-bold'>Welcome To Profile Readme Generator</h1>
                <h2 className='text-xl mb-6'>
                    <span>🚀</span> The best profile readme generator you will find
                    <span>⚡</span>
                </h2>
                
                <div className="grid_box  " style={{ textAlign: 'center' }}>
                    <button class="bg-blue-500  hover:bg-blue-700   text-white font-bold py-5 px-2 rounded-full mb-7 ">
                        <img className='Star_img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAfdJREFUWEfdl9FNAzEQRCeVAJ1AJ1BJSCWBSkInQCVEI91Gw7L27tn3ccI/J50u9vPs7Ng5YEfjsCMW/DuYRwAXAF8AHmaU3kKZTwD3C8QLgLdRoFmYZwBnWXxKnVkYlodl0vEE4GNEnRkY84pflyAEWj1mYFQVAqhCQ+qMwtCwNK4NdtERAD3EMaTOKAxNawuze9hFCkgj890q74zAeFW0JFo6gyx7x8NwIdsxJ7mTDPFdE5UjMjVV4vDP7+XdLZc8TNSqvZ1FRl07xy0oPYymaQvCdvgO4DX4iOrSU3xaMvc21ITxfuAkZkSDKHtAPjQoqqaAv7ouMrAHIgTLMQtDtdR3fwze6qYtgaxsCnKKStxrbU6iso4o1Cp7eLJnORMBVcMsavPuMZHB0IMeKJQ4cLWmdCmRKzBcR+8t1WTVvCltoAqju6ze5rRMpYOzCqNhyBPat7llh773B2d6P67C/Ign9DfatgTxqaylSu84FZiWX3gU8A7jh0aAfpN6rQLj/cL6+zSNgKgSv6U6dmp3S1WBUb9wd3rFsEVYAr73SlElPYumc0b94hXwLRtFv/6m2+KZMv5/kU2cHQ0tP3VbPIOJJi0F2FIe763un7wMRpXJ1Gjdc/yGmmtmMPQAk5TP6FZXvWjZPCxT816UwVQX2+S7XcFcAeUOgyQcYj5YAAAAAElFTkSuQmCC" width={30} height={30} />
                        <a className='font_size_s font_family text-lg' href="https://github.com/gdscace/ReadMeGenerator">Star this Repo</a>
                    </button>
                    <button className="Fork_repo  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-7">
                        <img className='Fork_img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAihJREFUWEfVl91RAzEMhJVKgEqASoBKgEoIlUAn0AnMx0QZRacfny8PwS/J3NnyerWS93ZyQWN3QVjkX4F5EZFbEbkTkW8R+RSR18P/EVIfReTBrCcG64mzGBkz1yLyISL8+kHApyygmcx6DhENAHHQk5GBqQIRAEA3BTVs9NxQd+8PFIGB2jcTSE/BKXmubIWnO6z7MvP2ByZZB0DiM0gVgI6jA6OBdIEFughm4v4kewAIoCG7ERhLcQXGv9P9YZA0Z+nMgIal7YNBJRrhVKRJRZmBsacHEGJnLsMyu9BdxIyvJC1pzbUysBCgSQ2g7XxiMGx1WpB/L7NqsuxYjen/RSA3qWoNTA31VnVgnxbVAFWktEdA9RnrYceWOAy9Rz2mYsZuYntOlZoMmC1zepOmbDF/5G4aLecIjE93ud8IGF8dVbOzgLxusuo7rhkBw2Tf3vXCi7STaUVbRKqzUTARIBW0FWR2Jw1pbQ0YBYQl8Lc5qYueU8K0gVS0lqa1YLRxqU+JLIYyNmIzTlI2A6brI6tBaMAtYJQle191nblqkps9sC/f0bIPQW1hJqscxNqWcYRmFkxnKztbelZmrEGifOk1pMyWd9txPaIZZrxHtjG23GNTAraXn/clpcctS6kwV51PyUx15Z87LFPMRLYUzVw5q7m658xohhN2trT6jDnLre2DqKX099MUkFHb2elHP10ARTkP3dDnbHqtGGcmzGpmZq92zS+n2YMklnQgMAAAAABJRU5ErkJggg==" width={30} height={30} />
                        <a className='font_size_s font_family text-lg' href='https://github.com/gdscace/ReadMeGenerator'>Fork on GitHub </a>
                    </button>

                </div>
            </div>
            <hr></hr>
        </>
    )
}
