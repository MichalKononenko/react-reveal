'use strict';
import React from 'react'
import Reveal from 'reveal'

import 'reveal/index.css';
import 'reveal/theme/simple.css';

class Presentation extends React.Component{
    componentDidMount(){
        Reveal.initialize({
            history: true,
            margin: 0.01,

            controls: true,
            progress: true
        });
    }

    render() {
        return(
            <div className="reveal">
                <div className="slides">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Presentation