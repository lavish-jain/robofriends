import React from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Loading from './Loading';
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, getRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.getRobots.robots,
        isPending: state.getRobots.isPending,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onGetRobots: () => dispatch(getRobots()),
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.onGetRobots();
    }
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        if (isPending) {
            return (
                <div className='tc'>
                    <Loading />
                </div>
            );
        }
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);