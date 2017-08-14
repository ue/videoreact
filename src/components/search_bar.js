import React, { Component } from 'react';

class SearchBar extends React.Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        
        console.log(" degisti" + Math.random() + event.target.value);
    }
}

export default SearchBar;