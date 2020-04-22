
import {   BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

import  './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <Router>
        <a 
            href={props.link}
            exact={props.exact}
            >{props.children}</a>
            </Router>
    </li>
);

export default navigationItem;