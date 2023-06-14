import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/actorPage" element={<ActorPage/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/search" element={<Search/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
