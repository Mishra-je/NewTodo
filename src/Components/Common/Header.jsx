import React from 'react'
import { setLocalStorage } from '../../utils/Localstorage'

const Header = (props) => {
  // console.log("header data is ",data)
  console.log("Props data is",props.changeUser)
  const handleLogout = () => {
    localStorage.setItem("LoggedInUser","")
    // window.location.reload();
    props.changeUser('')
  }

  return (
    <div className='flex justify-between items-end  text-white'>
    <h1 className='text-2xl font-medium'>Hello👋 <br/> <span className='text-3xl font-semibold'>username</span> </h1>
    <button onClick={handleLogout} className='bg-red-500 text-white px-3 py-2 rounded-md text-lg font-medium' >Log Out</button>
    </div>
  )
}

export default Header