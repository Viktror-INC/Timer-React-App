import React from 'react';
import '../App.css';

function TimeTable({time}) {
    return (
        <>
            <h1 className="time-table">
                <span>{ (time.h >= 10) ? time.h : "0" + time.h }</span>
                <span>:{ (time.m >= 10) ? time.m : "0" + time.m}</span>
                <span>:{ (time.s >= 10) ? time.s : "0" + time.s }</span>
                <span>:{ (time.ms >= 10) ? time.ms : "0" + time.ms }</span>
            </h1>
        </>
    );
}

export default TimeTable;