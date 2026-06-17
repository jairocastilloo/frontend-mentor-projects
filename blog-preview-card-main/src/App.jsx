import { useState } from 'react'
import './App.css'
import illustrationArticle from './assets/images/illustration-article.svg'
import imageAvatar from './assets/images/image-avatar.webp'
function App() {


  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-yellow">
        <div className="min-w-[327px] max-w-[327px] sm:min-w-sm sm:max-w-sm bg-white border border-gray-950 p-6 rounded-[20px] flex flex-col gap-y-6 shadow-[8px_8px_0px_0px_#000000]">
          <img src={illustrationArticle} alt="Illustration Article" className="w-full h-auto rounded-[10px]"></img>

          <div className="flex flex-col gap-y-[12px]">
            <span className="w-fit bg-yellow py-1 px-3 figfont text-[12px] sm:text-[14px] font-extrabold rounded text-gray-950">Learning</span>
            <time className="figfont text-[12px] sm:text-[14px] font-medium text-gray-950">Published 21 Dec 2023</time>
            <h1 className="figfont text-[20px] sm:text-[24px] font-extrabold text-gray-950">HTML & CSS foundations</h1>
            <p className="figfont text-[14px] sm:text-[16px] font-medium text-gray-500">These languages are the backbone of every website, defining structure, content, and presentation.</p>

          </div>
          
          <div className="flex items-center gap-x-[12px]">
            <img src={imageAvatar} alt="Image Avatar" className="w-[32px] h-[32px]"/>
            <p className="figfont text-[14px] font-extrabold text-gray-950">Greg Hooper</p>
          </div>

            

         
        </div>
          
        

      </div>
    </>
  )
}

export default App
