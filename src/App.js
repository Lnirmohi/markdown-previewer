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
      <div className="flex flex-direction-row height-full" id="main">
      
        <div className="flex flex-direction-column" id="editor">
          <div className="sub-heading sub-heading-padding">EDITOR</div>
          <textarea className="textarea-font height-full" id="textarea"></textarea>
        </div>

        <Preview />  
      </div>
    );
  }
}

export default App;