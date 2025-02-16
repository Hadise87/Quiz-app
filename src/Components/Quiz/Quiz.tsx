/** @format */

import { useState, useRef } from "react"
import { Header } from "../Header/Header"
import { questions } from "../../data/questions"
import { Answer } from "../Answer/Answer"

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  // const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  // const [score, setScore] = useState(0)
  const scoreRef = useRef(0)

  const question = questions[currentQuestion]
  console.log(question)

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index)
    // setIsCorrect(question.answerOptions[index].isCorrect)
    // if (correct) {
    //   console.log("first")
    //   scoreRef.current++
    //   setScore((prev) => prev + 1)
    // }

    setTimeout(() => {
      // if (currentQuestion < currentQuestion + 1) {
      setSelectedAnswer(null)
      // setIsCorrect(null)
      setCurrentQuestion((prev) => prev + 1)
      // }
      //  else {
      //    console.log("Final Score:", score);
      // }
    }, 800)
    // console.log("Final Score:", score);
    if (question.answerOptions[index].isCorrect) {
      scoreRef.current++
      // setScore((prevScore) => prevScore + 1)
    }
  }

  console.log("final Score:", scoreRef.current)

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-8 flex flex-col justify-center bg-white border border-blue-900 shadow-lg">
        <Header />
        {currentQuestion === questions.length ? (
          <div className="text-center p-4">
            <p className="text-gray-600">Score</p>
            <p className="font-bold text-5xl text-green-600">{scoreRef.current}</p>
          </div>
        ) : (
          <>
            <div className="text-black m-2 p-2 ">
              <span className="font-bold">{currentQuestion + 1}.</span>
              {question.questionText}
            </div>
            <div className="flex flex-col gap-2">
              {question.answerOptions.map((option, index) => (
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
            <div className=" mt-8 flex flex-col justify-center items-center  ">
              {currentQuestion + 1} / {questions.length}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
