import React from 'react';
import './App.css';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LoginComponents from './components/LoginComponent';
import HomeComponents from './components/homeComponent';
import AddKaryawanComponent from './components/addKaryawanComponent';
import EditKaryawanComponent from './components/editKaryawanComponent';
import UserComponent from './components/userComponent';
import ProfilComponent from './components/profilComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
        <Route exact path="/"><LoginComponents /></Route>
        <Route  path="/login"><LoginComponents /></Route>
        <Route  path="/home"><HomeComponents /></Route>
        <Route  path="/user"><UserComponent /></Route>
        <Route  path="/add-karyawan"><AddKaryawanComponent /></Route>
        <Route  path="/edit-karyawan/:id"><EditKaryawanComponent /></Route>
        <Route  path="/detail-karyawan/:id"><UserComponent /></Route>
        <Route  path="/home-user/:id"><ProfilComponent /></Route>
      </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
