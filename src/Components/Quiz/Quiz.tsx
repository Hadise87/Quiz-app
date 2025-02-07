/** @format */

import React, { useState } from "react";
import { Header } from "../Header/Header";
import { questions } from "../../data/questions";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = questions[currentQuestion];
  console.log(question);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-white border border-gray-200 p-8 rounded-sm shadow-lg w-full max-w-md flex flex-col justify-center gap-3">
        <Header />
        <div className=" text-gray-800 p-2">{question.questionText} </div>
        <div className="border p-2 flex justify-center items-center">
          ANSWER1
        </div>
        <div className="border p-2 flex justify-center items-center">
          ANSWER2
        </div>
        <div className="border p-2 flex justify-center items-center">
          ANSWER3
        </div>
        <div className="border p-2 flex justify-center items-center">
          ANSWER4
        </div>
        <div className="border p-2 flex justify-center items-center">
          ANSWER5
        </div>
        <div> question counter</div>
      </div>
    </div>
  );
};
