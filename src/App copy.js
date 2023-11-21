import { useState } from 'react';
import './App.css'
import { vData } from './data.js'
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.scss"

import NavBar from './components/NavBar.jsx';
import Visual from './components/home/Visual.jsx';
import GalleryList from './components/home/GalleryList.jsx';
import Content from './components/home/Content.jsx';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Visual />
      <GalleryList />
      <Content />
    </div>
  )
}


export default App;