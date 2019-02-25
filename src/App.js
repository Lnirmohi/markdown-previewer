import React from 'react';
import './App.css';

const App = () => {
  return (
    <div id="main">
        
      <Editor />  
      <Preview />
    
    </div>
  );
}

const Editor = () => {
    return (
      <div id="editor">
        <div class="sub-heading">EDITOR</div>
        <textarea></textarea>
      </div>
    );
};

const Preview = () => {
  return (
      <div id="preview">
        <ul>
          <li class="sub-heading">PREVIEWER</li>
          <li id="project-name">MARKDOWN PREVIEWER</li>
        </ul>
        <div>
        </div>
      </div>
    );
};

export default App;
