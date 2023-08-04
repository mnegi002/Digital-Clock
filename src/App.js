import { useState } from "react";
import "./styles.css";

const App = () => {
  let Time = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(Time);
  const updateTime = () => {
    Time = new Date().toLocaleTimeString();
    setTime(Time);
  };
  setInterval(updateTime, 1000);
  return <h1>{cTime}</h1>;
};

export default App;
