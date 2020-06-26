import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className='pa2'>
                <input
                    onChange={this.props.searchChange}
                    className='pa3 ba b--green bg-lightest-blue'
                    type='input'
                    placeholder='search robots' />
            </div>
        );
    }
}

export default SearchBox;