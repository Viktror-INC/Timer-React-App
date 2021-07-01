import React from "react";
import "../App.css"

function Buttons({start ,status, stop, reset, resume, wait}) {

    return (
        <div className="timer-buttons">
            {(status === 0) ?
                <button className="button-item button-start" onClick={start}>Start</button> : ''
            }
            {(status === 1) ?
                <>
                    <button className="button-item button-stop" onClick={stop}>Stop</button>
                    <button className="button-item button-reset" onClick={reset}>Reset</button>
                    <button className="button-item button-wait" onClick={wait}>Wait</button>
                </>: ''
            }

            {(status === 2) ?
                <>
                    <button className="button-item button-reset" onClick={reset}>Reset</button>
                    <button className="button-item button-resume" onClick={resume}>Resume</button>
                </>: ''
            }
        </div>
    );
}

export default Buttons;