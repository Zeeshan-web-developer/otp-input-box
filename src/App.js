import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [otp, setOtp] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });

  const handleOtp = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };

  const onKeyUp = (event) => {
    const key = event.keyCode || event.charCode || event.code;
    const inputIndex = Object.keys(otp).findIndex(
      (k) => k === event.target.name
    );

    if (inputIndex !== -1) {
      const nextInputKey = Object.keys(otp)[inputIndex + 1];
      if (
        otp &&
        otp[event.target.name] &&
        otp[event.target.name].length &&
        nextInputKey
      ) {
        let element = document.getElementById(nextInputKey);
        element.focus();
      }
    }

    if (key === 8 || key === 46 || key === "Backspace") {
      const previousInputKey = Object.keys(otp)[inputIndex - 1];
      if (previousInputKey) {
        let element = document.getElementById(previousInputKey);
        console.log({ ele: element.value });
        element.focus();
        element?.value?.length === 1 && element.select();
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      let element = document.getElementById(Object.keys(otp)[0]);
      element.focus();
    }, 0);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div tabIndex={0}>
          {Object.keys(otp).map((key) => {
            return (
              <input
                key={key}
                type="text"
                id={key}
                onKeyUp={onKeyUp}
                onChange={handleOtp}
                value={otp[key]}
                name={key}
                maxLength={1}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
