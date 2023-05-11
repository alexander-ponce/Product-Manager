import './App.css';
import React, { useState } from 'react';
// import axios from 'axios';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';

//commended out import below, because we will now be using Main
// import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
          <Route element={<Detail />} path="/products/:id"  />
          <Route element={<Update/>} path="/products/edit/:id"/>
          <Route element={<Navigate to ="/home" />} path="/"/>
          {/* <Route element={<Detail/>} path="/products/delete/:id"/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
