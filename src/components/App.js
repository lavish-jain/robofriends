import React from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Loading from './Loading';
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        };
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({ robots: response.data })

        })
    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        if (!robots.length) {
            return (
                <Loading />
            );
        }
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
    onSearchChange = event => {
        this.setState({ searchField: event.target.value })
    }
}

export default App;