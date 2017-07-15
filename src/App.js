import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
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
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="/">Home</a></li>
                                <li><a href="/screen1">Screen1</a></li>
                                <li><a href="/screen2">Screen2</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <ApolloProvider client={client}>
                        <Router>
                            <div>
                                <Route exact path='/' component={ScreenWelcome} />
                                <Route path='/screen1' component={Screen1} />
                                <Route path='/screen2' component={Screen2} />
                            </div>
                        </Router>
                    </ApolloProvider>
                </div>
            </div>
        );
    }
}

export default App;
