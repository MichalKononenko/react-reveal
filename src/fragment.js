/**
 * Created by mkononen on 09/07/16.
 */
import React from 'react';

class Fragment extends React.Component {

    render() {
        return(
            <p className="fragment">{this.props.children}</p>
        )
    }
}

export default Fragment