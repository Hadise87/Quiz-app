import { useRef, useState } from "react";

const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const scoreRef = useRef(0);

  const question = questions[currentQuestion];
  console.log(question);

  const handleAnswerClick = (index: Number, correct: Boolean) => {
    setSelectedAnswer(index);
    setIsCorrect(question.answerOptions[index].isCorrect);
    if (correct) {
      if (scoreRef.current !== null) {
        scoreRef.current++; 
      }

      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < currentQuestion + 1) {
        setSelectedAnswer(null);
        setIsCorrect(null);
        setCurrentQuestion((prev) => prev + 1);
      } else {
        console.log("Final Score:", score);
      }
    }, 600);
    console.log("Final Score:", score);
    if (question.answerOptions[index].isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };
  console.log("final Score:", score, scoreRef.current);
