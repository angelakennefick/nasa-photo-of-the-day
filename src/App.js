import React, {useEffect, useState} from "react";
import PhotoOfTheDay from './PhotoOfTheDay.js';
import "./App.css";

import styled, { keyframes } from 'styled-components'



  const rocket2 = keyframes`
  from {
    transform: translate3d(0);
    }

    to {
      transform: translate3d(1000px, -100px, 1000px);
    }
  `
  
const RocketStyle = styled.div`
   
    
    animation: ${rocket2} 2s ease-in;

    
`;
// class MyReactNativeComponent extends React.Component {
//   render() {
//     return(
//       <RocketStyle><span role="img" aria-label='go!'>🚀</span></RocketStyle>
//     )
//   }
// }

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
    
  );  
}

export default App;
