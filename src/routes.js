import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ HomePage } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        <Route path="/portfolio" component={ Portfolio } />
    </Route>
)