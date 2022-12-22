import './App.sass'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {  
  return (
   <Routes>
    <Route path="/portfolio" element={<Layout />} >
      <Route index path='/portfolio' element={<Home />}></Route>
      <Route path='/portfolio/about' element={<About />}></Route>
      <Route path='/portfolio/contact' element={<Contact />}></Route>
      <Route path='/portfolio/my-work' element={<Portfolio />}></Route>
    </Route>
   </Routes>
  );
}

export default App;
