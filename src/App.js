import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import React, {Component} from 'react';
import axios from 'axios';
import {CLUE_BOT_CURRENT, CLUE_BOT_SOLVED, CLUE_BOT_STATS} from "./constants";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Stats from "./components/pages/Stats";

class App extends Component {
    state = {
        solved: null,
        current: null,
        stats: null,
    };

    componentDidMount() {
        axios.get(CLUE_BOT_SOLVED)
            .then(res => this.setState({solved: res.data}));
        axios.get(CLUE_BOT_CURRENT)
            .then(res => this.setState({current: res.data}));
        axios.get(CLUE_BOT_STATS)
            .then(res => this.setState({stats: res.data}));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/stats" component={Stats}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
