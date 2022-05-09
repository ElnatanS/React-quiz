import React, { useState } from 'react';
import './App.css';

function App() {

  const [increment, setIncrement] = useState(0);
  
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState("not-visible");
  const [display, setDisplay] = useState("question-list");
  const [display2, setDisplay2] = useState('answers-list');
  
  const questions = [
    {
      key: 1,
      question: "Where does the sun set in?",
      answer: [
        {answertext: "East", isCorrect: "false"},
        {answertext: "West", isCorrect: "true"},
        {answertext: "South", isCorrect: "false"},
        {answertext: "North", isCorrect: "false"}
      ]
    },
    {
      key: 2,
      question: "What is the boiling point of water?",
      answer: [
        {answertext: "0", isCorrect: "false"},
        {answertext: "50", isCorrect: "false"},
        {answertext: "100", isCorrect: "true"},
        {answertext: "-50", isCorrect: "false"}
      ]
    }, 
    {
      key: 3,
      question: "What is the capital of Burundi?",
      answer: [
        {answertext: "Kinshasa", isCorrect: "false"},
        {answertext: "Bujumbura", isCorrect: "true"},
        {answertext: "Kigali", isCorrect: "false"},
        {answertext: "Kampala", isCorrect: "false"}
      ]
    },
    {
      key: 4,
      question: "Who is the CEO of tesla?",
      answer: [
        {answertext: "Mark Zuckurberg", isCorrect: "false"},
        {answertext: "Jeff Bezos", isCorrect: "false"},
        {answertext: "Elon Musk", isCorrect: "true"},
        {answertext: "Kanye West", isCorrect: "false"}
      ]
    }
  ];

  const handleIncrement = e => {
  if (e.isCorrect === "true"){
    const newCount = count + 1;
    setCount(newCount);
  }
    
    
    const newIncrement = increment + 1;
    if (newIncrement < questions.length){
    setIncrement(newIncrement);
    }else {
      setDisplay("not-visible");
      setVisible("visible");
      setDisplay2("not-visible");
    }

  };

  
  
  return (
    <main>
      
      <div className='all-content'>
        
        <div className={visible}><p>You scored {count} out of 4</p></div>
        <div className={display}>
        <div className='question-increment'>
          <div><p>Question {increment + 1} / {questions.length}</p></div>
        </div>
        <div className='question-increment'>
         <div>{questions[increment].question}</div>
        </div>
        </div>
      <div className={display2}>
        {questions[increment].answer.map(e => {
            return <button className='button-style' onClick={() => handleIncrement(e)}>{e.answertext}</button>
        })}
      </div>
      
      </div>
      
    </main>
  );
}

export default App;