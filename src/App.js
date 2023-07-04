import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsItem from './Components/NewsItem';
import News from './Components/News';

export default class hello extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5} country="in" category="sports"/>
      </div>
    )
  }
}