import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Input from './components/Input/input'
import Error from './components/Error'
import ContactPage from './components/Contact/ContactPage'
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Form' element={<About/>}/>
        <Route path='/input' element={<Input/>}/>
        <Route path='/Chatbot' element={<Chatbot/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/ContactPage' element={<ContactPage/>}/>
        <Route path='/*' element={<Error/>}/>
       </Routes>
   </BrowserRouter>
    </>
  )
}

export default App