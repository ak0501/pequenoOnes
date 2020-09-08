import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../Navbar/Navigation.js';

const App = () => (
    <Router>
        <Navigation />
    </Router>
);

export default App;