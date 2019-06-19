import React from 'react';
import {Preview} from './Preview.js';
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div id="main">
      
        <div id="editor">
          <div className="sub-heading">EDITOR</div>
          <textarea></textarea>
        </div>

        <Preview />  
      </div>
    );
  }
}

export default App;