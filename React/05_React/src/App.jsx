import React, { useEffect, useState } from "react";

function formatTime(milliSeconds) {
  let totalSeconds = Math.floor(milliSeconds / 1000);
  let centSeconds = Math.floor(milliSeconds / 10);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  let hh = String(hours).padStart(2, "0");
  let mm = String(minutes).padStart(2, "0");
  let ss = String(seconds).padStart(2, "0");
  let cs = String(centSeconds).padStart(3, "0");

  return `${hh}:${mm}:${ss}:${cs}`;
}
let startTime = null;
let intervalID = null;

function App() {
  const [timer, setTimer] = useState("00:00:00:000");

  function start() {
    startTime = Date.now();
    intervalID = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setTimer(() => formatTime(elapsed));
    }, 10);
  }

  function stop() {
    clearInterval(intervalID);
  }

  function reset() {
    clearInterval(intervalID);
    setTimer("00:00:00:000");
  }
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="text-center p-8">
        <div className="flex justify-center items-center">
          <span className="text-6xl font-mono font-extrabold text-gray-900 mb-6 p-4 border-b-2 border-gray-300">
            {timer}
          </span>
        </div>
      </div>
      <div className="flex space-x-4 p-4">
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
          onClick={start}
        >
          Start
        </button>

        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          onClick={stop}
        >
          Stop
        </button>

        <button
          className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
