import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"
import './App.css';
import { Header } from './shared/Header/Header';
import { Main } from './shared/Main/Main';
import { Footer } from './shared/Footer/Footer';
import { fetchProducts } from './store/products/actions';
import { AnyAction } from 'redux';
import { BrowserRouter, Routes, Route, redirect, Navigate } from "react-router-dom";
import { setCategoriesAsync } from './store/header/categories/actions';
import { HomePage } from './shared/HomePage/HomePage';
import { ProductsContainer } from './shared/ProductsContainer/ProductsContainer';

function App() {
  const dispatch = useDispatch();
  redirect("/products");
  useEffect(() => {
    dispatch(fetchProducts() as unknown as AnyAction);
    dispatch(setCategoriesAsync() as unknown as AnyAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Navigate to="/products" />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/products' element={<ProductsContainer />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
