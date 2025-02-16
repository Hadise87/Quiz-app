/** @format */

import React from "react"
type OptionProps = {
  option: string
  index: number
  handleAnswerClick: (index: number) => void
  selectedAnswer: number | null
  isCorrect: boolean
}

export const Option: React.FC<OptionProps> = ({
  option,
  index,
  handleAnswerClick,
  selectedAnswer,
  isCorrect,
}) => {
  const isSelected = selectedAnswer === index
  const shouldShowGreen = isCorrect && selectedAnswer !== null
  const colorOption =
    selectedAnswer !== null
      ? isSelected
        ? isCorrect
          ? "bg-green-400"
          : "bg-red-500"
        : shouldShowGreen
        ? "bg-green-400"
        : "bg-gray-200"
      : "bg-gray-200 hover:bg-gray-300"

  return (
    <button
      onClick={() => handleAnswerClick(index)}
      disabled={selectedAnswer != null}
      className={`border p-2 flex bg-gray-100 flex-col justify-center items-center rounded-sm ${colorOption}`}
    >
      {option}
    </button>
  )
}
