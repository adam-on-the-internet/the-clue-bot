import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import React, {Component} from 'react';
import axios from 'axios';
import {CLUE_BOT_CURRENT, CLUE_BOT_SOLVED, CLUE_BOT_STATS} from "./constants";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Stats from "./components/pages/Stats";
import Solved from "./components/pages/Solved";
import Mystery from "./components/pages/Mystery";

class App extends Component {
    state = {
        solvedMysteries: null,
        currentMystery: null,
        stats: null,
    };

    componentDidMount() {
        axios.get(CLUE_BOT_SOLVED)
            .then(res => this.setState({solvedMysteries: res.data}));
        axios.get(CLUE_BOT_CURRENT)
            .then(res => this.setState({currentMystery: res.data}));
        axios.get(CLUE_BOT_STATS)
            .then(res => this.setState({stats: res.data}));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <Home currentMystery={this.state.currentMystery}/>
                            </React.Fragment>
                        )}/>
                        <Route exact path="/stats" render={props => (
                            <React.Fragment>
                                <h1>Stats</h1>
                                <hr/>
                                <Stats stats={this.state.stats}/>
                            </React.Fragment>
                        )}/>
                        <Route exact path="/solved" render={props => (
                            <React.Fragment>
                                <h1>Solved Mysteries</h1>
                                <hr/>
                                <Solved solvedMysteries={this.state.solvedMysteries}/>
                            </React.Fragment>
                        )}/>
                        <Route exact path="/mystery/:id" render={props => (
                            <React.Fragment>
                                <h1>Mystery Details</h1>
                                <hr/>
                                <Mystery solvedMysteries={this.state.solvedMysteries} id={props.match.params.id}/>
                            </React.Fragment>
                        )}/>
                        <Route path="/about" exact component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
