import './App.css';
import React, {useState} from "react";
import Buttons from "./components/Buttons";
import TimeTable from "./components/TimeTable";

let clicks = 0;

function App() {
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [interva , setInterva] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterva(setInterval(run, 10));
    };

    const stop = () => {
        clearInterval(interva);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interva);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})
    };

    const resume = () => {
        run();
        setInterva(setInterval(run, 10));
        setStatus(1);
    };

    let updateMs = time.ms;
    let updateSec = time.s;
    let updateMin = time.m;
    let updateHour = time.h;

    const run = () => {
        if (updateMin === 60) {
            updateHour++;
            updateMin = 0;
        }

        if (updateSec === 60) {
            updateMin ++;
            updateSec = 0;
        }

        if (updateMs === 100) {
            updateSec ++;
            updateMs = 0;
        }

        updateMs ++

        return setTime({ms:updateMs, s:updateSec, m:updateMin, h:updateHour});
    };

    const hold = () => {
        if (clicks > 2) {
            clicks = 0 ;
        } else {
            clicks = clicks + 1;
        }

        console.log(clicks)

        const timerInstance = setTimeout(function () {
            if (clicks === 2) {
                console.log(2);
                clearInterval(interva)
                setStatus(2);
                clicks = 0;
            } else {
                clicks = 0;
            }
            clearTimeout(timerInstance);
        }, 300);
    }

  return (
    <>
        <TimeTable time ={time}/>
        <Buttons start = {start} status = {status} stop = {stop} reset ={reset} resume={resume} wait={hold}/>
    </>
  )
}

export default App;
