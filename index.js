'use strict';

import React from 'react';
import React_DOM from 'react-dom';
import Presentation from './src/presentation';


import './index.html';

React_DOM.render(
    <Presentation>
        <section>Slide 1</section>
        <section>Slide 2</section>
    </Presentation>,
    document.getElementById('app-container')
);
