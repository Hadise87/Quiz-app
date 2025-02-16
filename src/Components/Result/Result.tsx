import { FC } from "react"

type ResultProps={
    result:number
}
export const Result:FC<ResultProps> = ({result}) => {
  return (
    <div className="text-center p-4">
      <p className="text-gray-600">Score</p>
      <p className="font-bold text-5xl text-green-600">{result}</p>
    </div>
  )
}
