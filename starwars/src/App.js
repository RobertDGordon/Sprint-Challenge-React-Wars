import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import People from './components/People'

const SearchBar = styled.div`
    margin: 0 auto;
    width: 600px;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px darkgray;
    input{
      margin: 0 5px;
      border-left: 1px solid black;
    }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [srch, setSrch] = useState({name:" "});

  const handleChange = event => {
    setSrch({ ...srch, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log (srch.name);
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SearchBar>
        <form onSubmit={event => handleSubmit(event)}>
          <label>
            This is the person you're searching for:
            <input type="text" name="name" onChange={event => handleChange(event)} />
          </label>
          <button>Use The Force</button>
        </form>
      </SearchBar>
      <People name={srch.name}/>
    </div>
  );
}

export default App;
