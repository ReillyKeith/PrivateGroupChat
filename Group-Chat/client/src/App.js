import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import Lobby from './components/Lobby/Lobby'


const App = () => (
    <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/Join" component={Join}/>
        <Route path="/Chat" component={Chat}/>
        <Route path="/Lobby" component={Lobby}/>
    </Router>
);

export default App;