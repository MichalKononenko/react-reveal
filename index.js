'use strict';

import React from 'react';
import React_DOM from 'react-dom';


import './index.html';

React_DOM.render(
    <div className="react-text">
        Here is some text
    </div>, 
    document.getElementById('app-container')
);
