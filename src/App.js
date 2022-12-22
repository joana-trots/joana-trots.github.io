import './App.sass'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/layout/index'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio/index'
import items from './components/Portfolio/Cards/CardsList/cardsList'

function App() {  
  return (
   <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='my-work' element={<Portfolio />}></Route>
    </Route>
   </Routes>
  );
}

export default App;
