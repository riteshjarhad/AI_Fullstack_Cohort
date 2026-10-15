
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <img src="IT.avif" alt="Event Speaker" />

        <h1>Tech Summit 2026</h1>

        <p className="subtitle">
          Innovation In Modern Web Development
        </p>

        <div className="event-date">
          <b>Event date and Time</b>
          <br />
          <b>13 October 2026, 12:00 PM</b>
        </div>

        <p className="live">
          Live Now: {time.toLocaleDateString("en-GB")}{" "}
          {time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })}
        </p>
      </div>
    </div>
  );
}

export default App;
