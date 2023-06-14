import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ActorPage from './pages/ActorPage/ActorPage'
import Details from './pages/Details/Details'
import Search from './pages/Search/Search'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/actorPage/:name" element={<ActorPage/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/search" element={<Search/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
