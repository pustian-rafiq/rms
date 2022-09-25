import React from 'react'
import MainContent from './components/user/MainContent'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./assets/style/main.scss"
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainContent/> } />
      </Routes>
    </Router>
      {/* <MainContent/> */}
    </>
  )
}

export default App