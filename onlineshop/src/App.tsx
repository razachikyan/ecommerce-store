import React, { useEffect, CSSProperties } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux"
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
import { RootState } from './store/store';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const dispatch = useDispatch();
  const loading = !!useSelector<RootState, boolean | undefined>(store => store.products.loading);
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
          <Route path='/products' element={loading ?
            <ClipLoader
              color={"white"}
              loading={loading}
              cssOverride={override}
              size={170}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> :
            <ProductsContainer />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
