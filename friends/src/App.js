import React, {Component} from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import Friends from './components/Friend/Friends'
import NewFriend from './components/Friend/NewFriend'
import FriendUpdate from './components/Friend/FriendUpdate'
class App extends Component {

  render(){
    return (
      <Router>
        <ul>
          <Link to='/'>Firends</Link>
          <Link to='/new'>New Firend</Link>
        </ul>
        <Switch>
      <Route path='/' exact component={Friends}/>
      <Route path='/new' component={NewFriend}/>
      <Route path='/:id' component={FriendUpdate}/>
      </Switch>
    </Router>
  );
  }
  
}

export default App;
