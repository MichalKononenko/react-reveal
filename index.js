'use strict';

import React from 'react';
import React_DOM from 'react-dom';
import PresentationDeck from './src/presentation_deck';
import Presentation from './src/presentation';
import {Slide, Nested} from './src/slide';
import MarkdownSlide from './src/markdown_slide';
import Fragment from './src/fragment';

import './index.html';
import './node_modules/reveal/index.css';
import './node_modules/reveal/theme/simple.css';
import './static/presentation.css';

React_DOM.render(
    <PresentationDeck ShouldMakeMenu={true}>
        <Presentation className="custom_class">
            <section>Slide 1</section>
            <section>Slide 2</section>
            <Slide>Data entered with a slide</Slide>
            <Nested>
                <Slide>Here is a nested slide</Slide>
                <Slide>How about another?</Slide>
            </Nested>
            <MarkdownSlide>
                {
                    'This is a [link](https://git.io/vKGkC) in' +
                    '[Markdown](https://daringfireball.net/projects/markdown/)'
                }
            </MarkdownSlide>
            <Slide>
                Step through <Fragment>a</Fragment> <Fragment>fragmented</Fragment>
                <Fragment>slide</Fragment>
            </Slide>
        </Presentation>
        <Presentation>
            <Slide>Slide 1 on presentation 2</Slide>
        </Presentation>
    </PresentationDeck>,
    document.getElementById('app-container')
);

