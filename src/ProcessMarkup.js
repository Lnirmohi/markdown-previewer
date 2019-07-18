import React from 'react';

export const processMarkup = (data = '') => {
    let tag = '';

    if(data.startsWith('#')) {
        
        tag = handleHeading(data);
    }

    let element = React.createElement(
        tag,
        {key:genereateId()},
        data
    );

    return element;
};

const handleHeading = (data = "") => {
    
    let hashCount = 0;

    for (let i = 0; i < data.length; i++) {
        
        if(data.charAt(i) !== '#') break;

        hashCount++;
    }

    let headingLevel = '';

    switch (hashCount) {
        case 1:
            headingLevel = 'h1';
            break;

        case 2:
            headingLevel = 'h2';
            break;

        case 3:
            headingLevel = 'h3';
            break;

        case 4:
            headingLevel = 'h4';
            break;
        
        case 5: 
            headingLevel = 'h5';
            break;

        case 6:
            headingLevel = 'h6';
            break;

        default:
            console.log("Invalid heading number");
            break;
    }

    return headingLevel;
}


/* //handles emphasis strong strikethrough markup
const handleTextFormating = (data = "") => {
    

}

const addTagToData = (data = "", tag = "") => {
    
}

const addMarkupTOData(data ='', tag = '') {
    
} */

const genereateId = () => {
    
    return Math.floor(Math.random() * 1000);
}