import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import New from './components/New'
import Response from './components/Response';
import Sip from './components/Sip';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About  />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/new' element={<New/>}  />
          <Route path='/response' element={<Response/>}/>
          <Route path='/sip' element={<Sip/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;