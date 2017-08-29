import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

  onInputChange(event) {
      
    console.log(" degisti" + Math.random() + event.target.value);
  }
}

export default SearchBar;