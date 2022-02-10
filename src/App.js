import { useCallback, useState, useEffect } from "react";

function App() {
  const choices = ["바위", "가위", "보"];

  const [resultIdx, setResultIdx] = useState(choices[0]);
  const [eventFunction, setEventFunction] = useState(null);
  const [myChoiceIdx, setMyChoiceIdx] = useState(null);
  const [result, setResult] = useState("");

  window.onkeydown = (e) => {
    clearInterval(eventFunction)

    // const delayFunction = setInterval(() => {
    //   setResultIdx(Math.floor(Math.random() * choices.length));
    //   console.log(resultIdx);
    // }, 100);
    
    setTimeout(() => {
      // clearInterval(delayFunction)
      let choiceIdx;

      const key = e.key;
      if(key === 'q') {
        choiceIdx = 0;
        setMyChoiceIdx(choiceIdx);
      } else if(key === 'w') {
        choiceIdx = 1;
        setMyChoiceIdx(choiceIdx);
      } else if(key === 'e') {
        choiceIdx = 2;
        setMyChoiceIdx(choiceIdx);
      } else {
        throw "잘못된 입력입니다...";
      }

      const comparison = ((choiceIdx - resultIdx) % 3 + 3) % 3;

      if(comparison === 2) {
        setResult("win");
      } else if(comparison === 1) {
        setResult("lose");
      } else {
        setResult("tie");
      }
    }, 1000);

  }

  useEffect(() => {
    setEventFunction(setInterval(() => {
      setResultIdx(Math.floor(Math.random() * choices.length));
    }, 10));

  }, []);

  return (
    <div>
      {choices[resultIdx]}
      <div>
        {myChoiceIdx !== null ? `당신의 선택은 : ${choices[myChoiceIdx]}` : null}
      </div>
      <div>
        {result}  
      </div>
    </div>
  );
}

export default App;
