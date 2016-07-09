/**
 * Created by mkononen on 09/07/16.
 */
import React from 'react';

class Slide extends React.Component {

    render() {
        let className = 'slide ' + this.props.className;


        return(
            <section className={className}>
                { this.props.children }
            </section>
        )
    }
}

class Nested extends Slide {}

export default Slide;
export {Slide, Nested}