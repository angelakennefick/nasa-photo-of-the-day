import React, {useEffect, useState} from "react";
import PhotoOfTheDay from './PhotoOfTheDay.js';
// import "./App.css";

import styled, { keyframes } from 'styled-components'



  const rocketGo = keyframes`
  from {
    transform: translate3d(0);
    }
  33% {
    transform: translate3d(-3rem, 1rem, 1rem);
  }

    to {
      transform: translate3d(1000px, -200px, 1000px);
    }
  `
  
const RocketStyle = styled.div`
    animation: ${rocketGo} 3s ease-in;

`;

const FancyStyle = styled.div`
.App {
  text-align: center;
  background-image: linear-gradient(to top, hsl(224, 49%, 37%) 80%, #330867 100%);
}


.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.header, .explanation {
  color:lightgrey;
 
} 

.explanation {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 150%);
}


img{
  max-width: 100%;
  height: auto;
  
}


`;
 
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
    <FancyStyle>
      <div className="App">
        <div className="header">
          <h1>
            NASA Photo of the Day 
            {<RocketStyle><span role="img" aria-label='go!'>🚀</span>
            </RocketStyle>}
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
    </FancyStyle>
  );  
}

export default App;
