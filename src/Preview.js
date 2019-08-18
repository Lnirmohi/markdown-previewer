import React from 'react';
import './Preview.css';
import { processMarkup } from './ProcessMarkup';

export class Preview extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      
      rawMarkup: [],
      convertedHTMLElement: []
    };
  }

  componentWillReceiveProps(nextProps = []) {

    let newMarkup = [...nextProps.markup];
    
    let currentMarkup = [...this.state.rawMarkup];

    /* 
    *
    */
    if(newMarkup[newMarkup.length - 1] === '' || newMarkup === currentMarkup) return;

    outerloop:
    for (let i = 0; i < newMarkup.length; i++) {
      
      for (let j = 0; j < currentMarkup.length; j++) {

        if(newMarkup[i] !== currentMarkup[j]) {

          let createdElement = processMarkup(newMarkup[i])

          currentMarkup.splice(j, 1, createdElement);
          
          break outerloop;
        } 
      }
    }
    
    this.setState({
      convertedHTMLElement: [...currentMarkup]
    });
  }

  render() {

    return (
        <div className="preview-padding" id="preview">
          <ul className="flex flex-direction-row">
            <li className="sub-heading sub-heading-padding">PREVIEWER</li>
            <li className="project-font sub-heading-padding">MARKDOWN PREVIEWER</li>
          </ul>
          <div id="result">
            {this.state.convertedHTMLElement}
          </div>
        </div>
    );
  }
}