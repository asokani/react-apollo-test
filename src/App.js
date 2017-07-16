import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo'

import ScreenWelcome from './components/ScreenWelcome';
import Screen from './components/Screen';

import './App.css';

const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj55anir06bvw0148cq18m16y'
})

const client = new ApolloClient({networkInterface})

class App extends Component {
    render() {
        let arr = [
            {id: "cj55f472bnbwj0184z06dmffu", path: "/screen1"},
            {id: "cj55rrus4o6dd0184rk9ugrjy", path: "/screen2"},
            {id: "cj56dcmhap43a0184ic2f5zbz", path: "/screen3"},
            {id: "cj56dcphnp43d0184l4jsao7f", path: "/screen4"},
        ];
        let screens = arr.map((value) => {
            return (
                <Route path={value.path} key={value.id} render={({match}) => (
                    <Screen screenId={value.id}  />
                )} />
            )
        });

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
                                        <li><Link to="/screen1">Screen 1</Link></li>
                                        <li><Link to="/screen2">Screen 2</Link></li>
                                        <li><Link to="/screen3">Screen 3</Link></li>
                                        <li><Link to="/screen4">Screen 4</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="container">
                            <div>
                                <Route exact path='/' component={ScreenWelcome} />
                                {screens}
                            </div>
                        </div>
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
