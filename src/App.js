import React, {useEffect, useState} from "react";
import "./App.css";

function App() {
  // const API_ID = "";
  const API_KEY = "qaK0zo9ddCy0RVChjIh0GIJ37ZpF4FNLluLnZxxe";

  const[nasaData, setNasaData] = useState(null);

  useEffect(() => {
    getNasaData();
    console.log("Effect getNasaData has run");
  }, [/*Empty array = api request only runs at page load*/]);
    
  const getNasaData = async () => {
    const nasaData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data = await nasaData.json(); console.log(data);
    // setNasaData(data.)
  }
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
