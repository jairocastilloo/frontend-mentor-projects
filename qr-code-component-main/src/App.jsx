import { useState } from 'react'

import './App.css';

import qrImage from './assets/images/image-qr-code.png';

function App() {


  return (
    <>
     <div className="min-h-screen bg-slate-100 flex items-center justify-center">
       
          <div className="bg-white rounded-2xl p-4 max-w-sm shadow-md">
            <img src={qrImage} alt="QR Image" className="w-full h-auto rounded-2xl"></img>
            <div className="text-center p-4 my-4">
              <h1 className="font-bold text-2xl mb-3">Improve your front-end skills by building projects</h1>
              <p className="text-lg text-gray-400 font-medium">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
            
            
          </div>
      


     </div>
    </>
  )
}

export default App
