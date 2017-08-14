import React from 'react';
import ReactDOM from 'react-dom';
// import func or comp name from file name  
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAFP3xIn2wErDV4OMwwHZk2IHYlNmRpmLI';

const App = () => {
  return ( 
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
