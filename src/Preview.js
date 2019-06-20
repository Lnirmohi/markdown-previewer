import React from 'react';
import './Preview.css';

export class Preview extends React.Component{

    render() {

        return (
            <div className="preview-padding" id="preview">
              <ul className="flex flex-direction-row">
                <li className="sub-heading sub-heading-padding">PREVIEWER</li>
                <li className="project-font sub-heading-padding">MARKDOWN PREVIEWER</li>
              </ul>
              <div id="result">
              </div>
            </div>
        );
    }
}
