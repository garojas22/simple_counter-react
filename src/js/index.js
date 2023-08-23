//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


ReactDOM.render(<Home counter="00:00:00"/>, document.querySelector("#app"));


const stopwatch = document.getElementById('stopwatch');

let stopwatchInterval;
let runningTime = 0;


const pause = () => {
    clearInterval(stopwatchInterval);
}

const start = () => {
    let startTime = Date.now() - runningTime;
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = (total_minutes % 60).toString().padStart(2, "0");
    const display_hours = total_hours.toString().padStart(2, "0");


    return `  ${display_hours}:${display_minutes}:${display_seconds}`
}


document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", pause);


