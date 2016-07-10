/**
 * Created by mkononen on 09/07/16.
 */
import React from 'react';


class PresentationDeck extends React.Component {
    constructor(props){
        super(props);
        this.state = {active_presentation: 0, maximum_index: (this.props.children.length - 1)};

        this.slide_left = this.slide_left.bind(this);
        this.slide_right = this.slide_right.bind(this);
    };

    slide_left(){
        if(this.state.active_presentation === 0){
            this.setState({active_presentation: this.state.maximum_index});
        } else {
            this.setState({active_presentation: (this.state.active_presentation - 1)});
        }
    }

    slide_right(){
        if(this.state.active_presentation === this.state.maximum_index){
            this.setState({active_presentation: 0})
        } else {
            this.setState({active_presentation: this.state.active_presentation + 1})
        }
    }

    render(){
        let menu_bar =
            <div className="reveal-menu-bar">
                <button className="btn btn-primary switch-to-previous"
                        onClick={this.slide_left}
                >{'<<'}</button>
                <span className="menu-display">Current Presentation: {this.state.active_presentation + 1}</span>
                 <button className="btn btn-primary switch-to-next"
                        onClick={this.slide_right}
            >{'>>'}</button>
        </div>;

        let slide_deck =
            <div className="reveal-slide-deck">
                {this.props.children[this.state.active_presentation]}
            </div>;

        if (this.props.ShouldMakeMenu){
            return(
                <div className="reveal-slide-deck">
                    {slide_deck}
                    {menu_bar}
                </div>
            )
        } else {
            return(
                <div className="reveal-slide-deck">
                    {slide_deck}
                </div>
            )
        }
    }
}

export default PresentationDeck;