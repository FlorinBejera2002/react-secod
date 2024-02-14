import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CustomButton from "./components/CustomButoom/CustomButton";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> React</h1>
      <CustomButton
        increment={() => setCount((count) => count + 1)}
        count={count}
      />
    </>
  );
}

export default App;
