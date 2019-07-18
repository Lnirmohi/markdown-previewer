import React from 'react';
import {Preview} from './Preview.js';
import './App.css';

class App extends React.Component{
  
  constructor(props){
    
    super(props);

    this.state = {
      value: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    let editorValue = event.target.value.split('\n');

    this.setState({
      value: [...editorValue]
    });
  }

  render() {
    return (
      <div className="flex flex-direction-row height-full" id="main">
      
        <div className="flex flex-direction-column" id="editor">
          <div className="sub-heading sub-heading-padding">EDITOR</div>
          <textarea onChange={this.handleChange} className="textarea-font height-full" id="textarea"></textarea>
        </div>

        <Preview markup={this.state.value}/>  
      </div>
    );
  }
}

export default App;