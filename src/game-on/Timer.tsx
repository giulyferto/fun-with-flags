import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(60); // Initial time in seconds 
  const id = useRef(0);

  const clear = () => {
    window.clearInterval(id.current);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      clear();
    }
  }, [timer]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return (
      <div>
        <div className="timer">
          <div id="hour">{String(h).padStart(2, "0")}</div>
          <span>:</span>
          <div id="minute">{String(m).padStart(2, "0")}</div>
          <span>:</span>
          <div id="seconds">{String(s).padStart(2, "0")}</div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontSize: "30px", fontWeight: "600" }}>
      {formatTime(timer)}
    </div>
  );
};

export default Timer;
