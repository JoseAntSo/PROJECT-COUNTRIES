import { useState } from 'react'
import Home from './Component/Home/Home'
import LandingPage from './Component/LandingPage/LandingPage.jsx'
import NavBar from './Component/NavBar/NavBar'
import { Routes, Route, useLocation } from 'react-router-dom'
import FormVal from './Component/Form/FormVal'
import Detail from './Component/Detail/Detail.jsx'
import Appstyle from './Appstyles.module.css'
import { CardsActivities } from './Component/Activities/CardsActivities/CardsActivities'
function App() {
  
  const {pathname} = useLocation();

  return (
    <div className={Appstyle.start}>
      <div>
        {pathname !== '/'&&<NavBar/>}
      </div>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Detail/:id' element ={<Detail/>}></Route>
        <Route path='/Form' element={<FormVal/>}></Route>
        <Route path='/Activities' element={<CardsActivities/>}></Route>
      </Routes>
    </div>
  )
}

export default App
