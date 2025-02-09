/** @format */

import React from "react";

export const Answer = ({
  answerText,
  index,
  handleAnswerClick,
  selectedAnswer,
  // isSelected, ??
  isCorrect,
}) => {
  const isSelected = selectedAnswer === index;
  const shouldShowGreen = isCorrect && selectedAnswer !== null;

  return (
    <button
      onClick={() => handleAnswerClick(index)}
      disabled={selectedAnswer != null}
      className={`border p-2 flex bg-gray-100 flex-col justify-center items-center rounded-sm ${
        selectedAnswer !== null
          ? isSelected
            ? isCorrect
              ? "bg-green-400"
              : "bg-red-500"
            : shouldShowGreen
            ? "bg-green-400"
            : "bg-gray-200"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {answerText}
    </button>
  );
};
