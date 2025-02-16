import { useState, useRef } from "react"
import { Header } from "../Header/Header"
import { Option } from "../Option/Option"
import { Question } from "../Question/Question"
import { Result } from "../Result/Result"
import { questionsDataBase } from "../../data/data"

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const scoreRef = useRef(0)

  const question = questionsDataBase[currentQuestion]

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null) return // Prevent multiple clicks
    setSelectedOption(option)
    setTimeout(() => {
      setSelectedOption(null)
      setCurrentQuestion((prev) => prev + 1)
    }, 2000)
    if (question.correct === option) {
      scoreRef.current++
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-8 flex flex-col justify-center bg-white border border-blue-900 shadow-lg">
        <Header />
        {/* Is question end ? */}
        {currentQuestion === questionsDataBase.length ? (
          <Result result={scoreRef.current} />
        ) : (
          <Question
            question={question.question}
            questionNumber={currentQuestion + 1}
            totalQuestions={questionsDataBase.length}
          >
            {question.options.map((option, index) => (
              <Option
                key={index}
                option={option}
                handleOptionClick={handleOptionClick}
                isCorrect={option === question.correct}
                selectedOption={selectedOption}
              />
            ))}
          </Question>
        )}
      </div>
    </div>
  )
}
