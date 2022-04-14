import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        this.setState({robots: robots})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
            const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase()) || robots.username.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        
        return (
            <div className ='tc'>
                <div className ='boxmodel'> KittyFriends </div>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {filterRobots}/> 
                
            </div>
        );
    }
}
export default App;