/** @format */

import { useState, useRef } from "react"
import { Header } from "../Header/Header"
import { questionDataBase } from "../../data/data"
import { Option } from "../Option/Option"

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const scoreRef = useRef(0)

  const question = questionDataBase[currentQuestion]

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index)
    setTimeout(() => {
      setSelectedAnswer(null)
      setCurrentQuestion((prev) => prev + 1)
    }, 800)
    if (question.options[index].isCorrect) {
      scoreRef.current++
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-8 flex flex-col justify-center bg-white border border-blue-900 shadow-lg">
        <Header />
        {currentQuestion === questionDataBase.length ? (
          <div className="text-center p-4">
            <p className="text-gray-600">Score</p>
            <p className="font-bold text-5xl text-green-600">
              {scoreRef.current}
            </p>
          </div>
        ) : (
          <>
            <div className="text-black m-2 p-2 ">
              <span className="font-bold">{currentQuestion + 1}.</span>
              {question.question}
            </div>
            <div className="flex flex-col gap-2">
              {question.options.map((option, index) => (
                <Option
                  key={index}
                  option={option.option}
                  handleAnswerClick={handleAnswerClick}
                  index={index}
                  selectedAnswer={selectedAnswer}
                  isCorrect={option.isCorrect}
                />
              ))}
            </div>
            <div className=" mt-8 flex flex-col justify-center items-center  ">
              {currentQuestion + 1} / {questionDataBase.length}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
