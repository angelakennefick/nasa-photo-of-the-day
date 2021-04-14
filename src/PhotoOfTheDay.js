import React from 'react';

const PhotoOfTheDay = ({photoTitle, date, explanation, image}) => {
    return(
        <div>
            <h3>{photoTitle}</h3>
            <h3>{date}</h3>
            <img src={image} alt=""/>
            <p>{explanation}</p>
        </div>
    );
}

export default PhotoOfTheDay;