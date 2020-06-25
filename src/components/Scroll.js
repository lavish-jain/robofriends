import React from 'react';
import './Scroll.css';

class Scroll extends React.Component {
    render() {
        return (
            <div id='scroll'>
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;