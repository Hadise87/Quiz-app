import { useState, useRef } from "react"
import { Header } from "../Header/Header"
import { Option } from "../Option/Option"
import { Question } from "../Question/Question"
import { Result } from "../Result/Result"
import { questionsDataBase } from "../../data/data"

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const scoreRef = useRef(0)

  const question = questionsDataBase[currentQuestion]

  const handleOptionClick = (index: number) => {
    setSelectedOption(index)
    setTimeout(() => {
      setSelectedOption(null)
      setCurrentQuestion((prev) => prev + 1)
    }, 1000)
    if (question.options[index].isCorrect) {
      scoreRef.current++
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-8 flex flex-col justify-center bg-white border border-blue-900 shadow-lg">
        <Header />
        {currentQuestion === questionsDataBase.length ? (
          <Result result={scoreRef.current} />
        ) : (
          <Question
            question={question.question}
            questionNumber={currentQuestion}
            totalQuestions={questionsDataBase.length}
          >
            {question.options.map((optionObj, index) => (
              <Option
                key={index}
                optionObj={optionObj}
                handleOptionClick={handleOptionClick}
                index={index}
                selectedOption={selectedOption}
              />
            ))}
          </Question>
        )}
      </div>
    </div>
  )
}
