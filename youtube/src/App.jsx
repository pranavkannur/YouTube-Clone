import React from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Body from './component/Body'

function App() {
 

  return (
    <div>
      <Navbar />
      <div className='flex'>
      <Sidebar />
      <Body />
      </div >
    </div>
  )
}

export default App
