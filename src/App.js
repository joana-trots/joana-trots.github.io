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
    <Route path="/" element={<Layout />} >
      <Route index path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='my-work' element={<Portfolio />}></Route>
    </Route>
   </Routes>
  );
}

export default App;
