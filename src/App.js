import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
            const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return (
            <div className ='tc'>
                <h1 className = "f1">IPZ...</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {filterRobots}/> 
            </div>
        );
    }
}
export default App;