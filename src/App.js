import React from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Loading from './Loading';
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
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
        if (this.state.robots.length === 0) {
            return (
                <Loading />
            );
        }
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        )
    }
    onSearchChange = event => {
        this.setState({ searchField: event.target.value })
    }
}

export default App;