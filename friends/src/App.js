import React, {Component} from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Friends from './components/Friend/Friends'
class App extends Component {

  render(){
    return (
      <Router>
      <Route path='/' component={Friends}/>
    </Router>
  );
  }
  
}

export default App;
