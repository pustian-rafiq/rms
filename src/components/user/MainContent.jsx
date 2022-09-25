import React from 'react'
import Category from './categories/Category'
import FeaturedJobs from './featuredJobs/FeaturedJobs'
import Footer from './footer/Footer'
import Header from './header/Header'
import Jobs from './jobs/Jobs'

const MainContent = () => {
  return (
    <>

        <Header/>
        <Category/>
        <FeaturedJobs/>
        <Jobs/>
        <Footer/>
    </>
  )
}

export default MainContent