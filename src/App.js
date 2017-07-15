import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo'

import ScreenWelcome from './components/ScreenWelcome';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

import './App.css';

const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj55anir06bvw0148cq18m16y'
})

const client = new ApolloClient({networkInterface})

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div>
                        <nav className="navbar navbar-inverse navbar-fixed-top">
                            <div className="container">
                                <div className="navbar-header">
                                </div>
                                <div id="navbar" className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/screen1">Screen1</Link></li>
                                        <li><Link to="/screen2">Screen2</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="container">
                            <div>
                                <Route exact path='/' component={ScreenWelcome} />
                                <Route path='/screen1' component={Screen1} />
                                <Route path='/screen2' component={Screen2} />
                            </div>
                        </div>
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
