import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsItem from './Components/NewsItem';
import About from './Components/About';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default class hello extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/business" element={<News key="business"pageSize={5} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News key ="general" pageSize={5} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News key ="health" pageSize={5} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News key ="science" pageSize={5} country="in" category="science"/>}/>
          <Route exact path="/technology" element={<News key="technology"pageSize={5} country="in" category="technology"/>}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}