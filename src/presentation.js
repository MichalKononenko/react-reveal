'use strict';
import React from 'react'
import Reveal from 'reveal'

import 'reveal/index.css';
import 'reveal/theme/simple.css';

class Presentation extends React.Component{
    constructor(){
        super();
        this.get_title_slide.bind(this);
    }

    componentDidMount(){
        Reveal.initialize({
            margin: 0.01,

            controls: true,
            progress: true
        });

        Reveal.slide(0);
    }

    componentDidUpdate(){
        Reveal.initialize({
            margin: 0.01,

            controls: true,
            progress: true
        });

        Reveal.slide(0);
    }

    get_title_slide() {
        return(this.props.children[0])
    }

    render() {
        let classname = "reveal " + this.props.className;

        return(
            <div className={classname}>
                <div className="slides">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Presentation