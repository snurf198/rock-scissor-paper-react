import { useCallback, useState, useEffect } from "react";

function App() {
  const results = ["바위", "가위", "보"];

  const [result, setResult] = useState(results[0]);

  window.onkeydown = (e) => {
    const key = e.key;
    if(key === 'q') {
      alert("바위!");
    } else if(key === 'w') {
      alert("가위!");
    } else if(key === 'e') {
      alert("보!");
    } else {
      alert("잘못된 입력입니다...");
    }
  }

  useEffect(() => {
    setInterval(() => {
      setResult(results[Math.floor(Math.random() * results.length)]);
    }, 10);

  }, []);

  return (
    <div>
      {result}
    </div>
  );
}

export default App;
