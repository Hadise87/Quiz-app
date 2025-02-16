type Question = {
  readonly question: string
  readonly options: ReadonlyArray<string>
  readonly correct: string
}

type QuestionsDataBase = ReadonlyArray<Question>

export const questionsDataBase: QuestionsDataBase = [
  {
    question: `What's the capital of France?`,
    options: ["Tokyo", "London", "Berlin", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: `What's the capital of Japan?`,
    options: ["London", "Paris", "Rome", "Berlin", "Tokyo"],
    correct: "Tokyo",
  },
  {
    question: `What's the capital of UK?`,
    options: ["Rome", "Tokyo", "London", "Paris", "Berlin"],
    correct: "London",
  },
  {
    question: `What's the capital of Germany?`,
    options: ["London", "Paris", "Berlin", "Rome", "Tokyo"],
    correct: "Berlin",
  },
  {
    question: `What's the capital of Italy?`,
    options: ["Paris", "Tokyo", "Rome", "Berlin", "London"],
    correct: "Rome",
  },
] as const
