import React from 'react'
import './App.css'
import Upper from './Upper'
import Footer from './Footer'
const App = () => {
  return (
    <div className='h-full w-screen min-h-screen bg-black text-white max-w-full p-1 flex flex-col gap-4 '>
      <Upper/>
      <Footer/>
      
    </div>
  )
}
export default App
