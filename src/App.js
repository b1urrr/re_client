import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'

import { Header, Kitchen, Delivery, Gallery, About, Contacts, Footer } from './containers';
import { Navbar, Menu, Form } from './components';

import { galleryImages } from './containers/Gallery/imports';
import { getMenu } from './actions/menu';



import './App.css';
const App = () => {

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
      dispatch(getMenu())
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route 
        path='/' 
        element={<>
          <Header />
          <Kitchen />
          <Delivery />
          <Gallery galleryImages={galleryImages}/>
          <About />
          <Contacts />
        </>} />
        <Route 
        path='/menu'
        element={<>
          <Menu setCurrentId={setCurrentId} />
        </>} />
        <Route 
        path='/editmenu'
          element={<>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
          <Menu setCurrentId={setCurrentId} />
          </>}
        />
      </Routes>  
      <Footer />
    </div>
  );
}

export default App;
