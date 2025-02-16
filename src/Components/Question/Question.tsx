import { FC, ReactNode } from "react"

type QuestionType = {
  questionNumber: number
  question: string
  totalQuestions: number
  children: ReactNode
}
export const Question: FC<QuestionType> = ({
  questionNumber,
  question,
  totalQuestions,
  children,
}) => {
  return (
    <>
      <div className="text-black font-medium text-lg py-3">
        <span className="font-bold me-1">{questionNumber}.</span>
        <span>{question}</span>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
      <div className=" mt-8 flex flex-col justify-center items-center  ">
        {questionNumber} / {totalQuestions}
      </div>
    </>
  )
}
