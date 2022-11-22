import './App.css';
import React, { Component} from 'react';
import { MemoryRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ThemeButton from './components/ThemeButton.js';
import Latest from './components/Latest.js';
import Starred from './components/Starred.js';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <div className='header'>
          <div className='header-left'>
                <Icon icon="fa6-brands:y-combinator" color="#f56f36" />
                <h1>Hacker News</h1>
                <Link to="/">latest</Link>
                <span> | </span>
                <Link to="/starred">starred</Link>
            </div>
            <div className='header-right'>
                <ThemeButton />
            </div>
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Latest />} />
            <Route path='/starred' element={<Starred />} />
          </Routes>
        </div>
        <div className='footer'>
          <p>Hacker News</p>
            <div>
                <Link to="/">latest</Link>
                <span> | </span>
                <Link to="/starred">starred</Link>
            </div>
        </div>
        </Router>
    </div>
  );
  }
};

export default App;
