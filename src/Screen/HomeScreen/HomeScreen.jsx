import React from 'react'
import './HomeScreen.css'
import HomeBanner from './HomeBanner/HomeBanner'
import Homedetails from './Homedetails/Homedetails'
import HomeBanner1 from './HomeBanner/HomeBanner1'
import HomeDetails1 from './Homedetails/HomeDetails1'
import Footer from '../../Component/Footer/Footer'
import FooterSign from '../footersign/FooterSign'

const HomeScreen = () => {
  return (
      <div className="homeScreen">
        <HomeBanner/>
        <HomeDetails1/>
        <HomeBanner1/>
        <Homedetails/>
      </div>
  )
}

export default HomeScreen
