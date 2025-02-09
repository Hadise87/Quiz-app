/** @format */

import React, { useState } from "react";
import { Header } from "../Header/Header";
import { questions } from "../../data/questions";
import { Answer } from "../Answer/Answer";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = questions[currentQuestion];
  console.log(question);

  const handleAnswerClick = (index: Number, correct: Boolean) => {
    setSelectedAnswer(index);
    // way of writing the setiscorrect property
    setIsCorrect(question.answerOptions[index].isCorrect);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-8 flex flex-col justify-center bg-white border border-blue-900 shadow-lg">
        <Header />
        <div className="text-black m-2 p-2">{question.questionText}</div>
        {/* The order of option and index is a matter? */}
        <div className="flex flex-col gap-2">
          {question.answerOptions.map((option, index) => (
            // How to define and understand what to have as property here?
            <Answer
              key={index}
              answerText={option.answerText}
              handleAnswerClick={handleAnswerClick}
              index={index}
              selectedAnswer={selectedAnswer}
              isCorrect={option.isCorrect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
