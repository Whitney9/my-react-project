import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))).toFixed(2);
      setBmi(bmiValue);

      let bmiMessage = '';
      if (bmiValue < 18.5) {
        bmiMessage = '過輕';
      } else if (bmiValue >= 18.5 && bmiValue < 24) {
        bmiMessage = '正常';
      } else if (bmiValue >= 24 && bmiValue < 27) {
        bmiMessage = '過重';
      } else {
        bmiMessage = '肥胖';
      }
      setMessage(bmiMessage);
    } else {
      setMessage('請輸入正確的體重和身高');
    }
  };

  return (
    <div className="App">
      <h1>BMI 計算器</h1>
      <div className="input-container">
        <label>
          體重 (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          身高 (m):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateBMI}>計算</button>
      {bmi && (
        <div className="result">
          <p>BMI: {bmi}</p>
          <p>結果: {message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
