import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        value={this.state.term}
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

  onInputChange(event) {
      
    console.log(" degisti" + Math.random() + event.target.value);
  }
}

export default SearchBar;