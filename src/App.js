import './App.css';
import { useState } from "react";


function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [errorMes, setErrorMes] = useState(false);



  const hourDataChecking = e => {
    const value = e.target.value;
    if (value <= 24 && value >= 0) {
      setHours(+value);
      setErrorMes(false);
    } else {
      setHours(0);
      setErrorMes(true);
    }
  }

  const minutesDataChecking = e => {
    const value = e.target.value;
    if (value <= 60 && value >= 0) {
      setMinutes(+value);
      setErrorMes(false);
    } else {
      setMinutes(0);
      setErrorMes(true);
    }
  }

  const secondsDataChecking = e => {
    const value = e.target.value;
    if (value <= 60 && value >= 0) {
      setSeconds(+value);
      setErrorMes(false);
    } else {
      setSeconds(0);
      setErrorMes(true);

    }
  }

  const clear = (e) => {
    e.preventDefault();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setErrorMes(false);
  }

  return (
    <div className="App">
      <form  onSubmit = "clear">
        <input
          onChange={hourDataChecking}
          type="number"
          min="0"
          max="24"
          placeholder="Hours"
          name="hours"
        />
        <input type="number"
          onChange={minutesDataChecking}
          name="minutes"
          min="0"
          max="60"
          placeholder="Minutes"
          name="minutes"
        />
        <input type="number"
          onChange={secondsDataChecking}
          name="seconds"
          min="0"
          max="60"
          placeholder="Seconds"
          name="seconds"
        />
        <button > Clear </button>
      </form>
      {errorMes && <span className="errorMes">Please, enter a valid number</span>}
      <div className="clock">
        <div className="hours"
          style={{
            transform: `rotateZ(${hours * 30}deg)`,
            transitionDuration: "3s",
          }}>
        </div>
        <div className="minutes"
          style={{
            transform: `rotateZ(${minutes * 6}deg)`,
            transitionDuration: "3s",
          }} >
        </div>
        <div className="seconds"
          style={{
            transform: `rotateZ(${seconds * 6}deg)`,
            transitionDuration: "3s",
          }}
        ></div>
        <div className="circle">
        </div>
      </div>
    </div>
  )
}



export default App;
