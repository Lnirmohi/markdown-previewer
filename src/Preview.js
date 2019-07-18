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

    if(newMarkup[newMarkup.length - 1] === '' || newMarkup === currentMarkup) return;

    this.createObjOfAbsentElements(newMarkup, currentMarkup);     
  }

  createObjOfAbsentElements(newMarkup = [], currentMarkup = []) {
    
    let absentInRawMarkup = {
      elements: [],
      indexOfElements: []
    };
    
    newMarkup.forEach((element, index) => {
      
      if(currentMarkup.includes(element) === false) {
        absentInRawMarkup.elements.push(element);
        absentInRawMarkup.indexOfElements.push(index);
      }
    });

    this.processAbsentElement(absentInRawMarkup);
  }

  processAbsentElement(absentInRawMarkup = {}) {

    let processedElements = {
      
      elements: absentInRawMarkup.elements.map(element => 
      
        processMarkup(element)
      ),
      indexes:[...absentInRawMarkup.indexOfElements]
    };

    this.addChangedElementsToCurrentMarkup(processedElements);
  }

  addChangedElementsToCurrentMarkup(processedElements) {

    let currentMarkup = [...this.state.rawMarkup];

    outerloop:
    for (let i = 0; i < processedElements.elements.length; i++) {
      
      for (let j = 0; j < processedElements.indexes.length; j++) {

        if( i === j) {

          currentMarkup.splice(
            processedElements.indexes[j],
            1,
            processedElements.elements[i]
          );

          continue outerloop;
        }
      }
    }

    this.addCurrentMarkupToState(currentMarkup);
  }

  addCurrentMarkupToState(currentMarkup) {

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