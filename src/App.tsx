import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes ,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import Navbars from './Components/Navbars';
import { ShoppingCartProvider } from './Context/Shoppingcart';

export const App: React.FunctionComponent = () => {
  return (
    <>
    <ShoppingCartProvider>
     <Navbars/>
    <Container className='mb-4'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/store" element={<Store/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </Container>
    </ShoppingCartProvider>
    </>
  );
  }
