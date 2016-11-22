import * as react from 'react';
import {Provider} from 'react-redux'
import * as ReactDOM from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

ReactDOM.render((
    <Router history={hashHistory}>
                    <Route path="/" component={Login} />
                    <Route path="Dashboard" component={Dashboard} />
                </Router>
), document.getElementById('content'));