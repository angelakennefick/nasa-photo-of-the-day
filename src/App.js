import React, {useEffect, useState} from "react";
import PhotoOfTheDay from './PhotoOfTheDay.js';
import "./App.css";

import styled, { keyframes } from 'styled-components'

const KFC = keyframes`
    100% {
        opacity: 1;
    }
    `
  const rocket1 = keyframes`
  from {
    transform: translate3d(0);
   }
 
   to {
    transform: translate3d(-2.7rem, 0, 1rem);
   }
 `
 const rocket2 = keyframes`
  from {
    transform: translate3d(-2.7rem, 0, 1rem);
   }
 
   to {
    transform: translate3d(5ch, 0.4in, 5em);
   }
 `
  const rocket3 = keyframes`
  from {
    transform: translate3d(5ch, 0.4in, 5em);
    }

    to {
      transform: translate3d(-2rem, 0, 1rem);
    }
  `
  const rocket4 = keyframes`
  from {
    transform: translate3d(-2rem, 0, 1rem);
    }

    to {
      transform: translate3d(4ch, 0.5in, 4em);
    }
  `
  const rocket5 = keyframes`
  from {
    transform: translate3d(4ch, 0.5in, 4em);
    }

    to {
      transform: translate3d(0);
    }
  `
  const rocket6 = keyframes`
  from {
    transform: translate3d(0);
    }

    to {
      transform: translate3d(1000px, -100px, 1000px);
    }
  `
  
const StyledStuff = styled.div`

`

function App() {
  // const API_ID = "";
  const API_KEY = "qaK0zo9ddCy0RVChjIh0GIJ37ZpF4FNLluLnZxxe";

  const[nasaData, setNasaData] = useState([]);

  useEffect(() => {
    getNasaData();
    console.log("Effect getNasaData has run");
  }, [/*Empty array = api request only runs at page load*/]);
    
  const getNasaData = async () => {
    const nasaData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data = await nasaData.json(); 
    console.log(data);
    setNasaData(data);
  }
  return (
    <StyledStuff>
      <div className="App">
        <div className="header">
          <h1>
            NASA Photo of the Day <span role="img" aria-label='go!'>🚀</span>
          </h1>
          {<PhotoOfTheDay 
          // key= {nasaData.title}
          photoTitle= {nasaData.title} 
          date= {nasaData.date} 
          />}
        </div>
      <div className="image">
          {<PhotoOfTheDay
          image= {nasaData.hdurl}
          />}
      </div>
      <div className= "explanation">
        {<PhotoOfTheDay
        explanation= {nasaData.explanation}
        />}
      </div>
      </div>
    </StyledStuff>
  );  
}

export default App;
