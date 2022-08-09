import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FruitProvider from './context/fruitProvider';
import FruitList from './pages/allFruits';
import Menu from './component/Menu';
import Cart from './pages/cart';
import Fruit from './pages/fruit';
import NotFound from './pages/NotFound';


function App() {
  return (
    <FruitProvider>
      <BrowserRouter>
      <Menu />      
      <Routes>
      <Route path="/fruit/:id" element={ <Fruit />} />
      <Route path="/fruits" element={ <FruitList /> } />
      <Route path="/carrinho" element={ <Cart /> } />
      <Route exact path='*' element={<NotFound />} />
    </Routes>
      </BrowserRouter>      
     </FruitProvider>
  );
}

export default App;
