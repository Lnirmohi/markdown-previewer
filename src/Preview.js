import React from 'react';
import './Preview.css';

export class Preview extends React.Component{

    render() {

        return (
            <div id="preview">
              <ul>
                <li className="sub-heading">PREVIEWER</li>
                <li id="project-name">MARKDOWN PREVIEWER</li>
              </ul>
              <div id="result">
              </div>
            </div>
        );
    }
}
