type Question = {
  readonly question: string;
  readonly options: ReadonlyArray<{
    readonly option: string;
    readonly isCorrect: boolean;
  }>;
};

type QuestionsDataBase = ReadonlyArray<Question>;

export const questionsDataBase:QuestionsDataBase = [
  {
    question: `What's the capital of France?`,
    options: [
      { option: "Tokyo", isCorrect: false },
      { option: "London", isCorrect: false },
      { option: "Berlin", isCorrect: false },
      { option: "Paris", isCorrect: true },
      { option: "Rome", isCorrect: false },
    ],
  },
  {
    question: `What's the capital of Japan?`,
    options: [
      { option: "London", isCorrect: false },
      { option: "Paris", isCorrect: false },
      { option: "Rome", isCorrect: false },
      { option: "Berlin", isCorrect: false },
      { option: "Tokyo", isCorrect: true },
    ],
  },
  {
    question: `What's the capital of UK?`,
    options: [
      { option: "Rome", isCorrect: false },
      { option: "Tokyo", isCorrect: false },
      { option: "London", isCorrect: true },
      { option: "Paris", isCorrect: false },
      { option: "Berlin", isCorrect: false },
    ],
  },
  {
    question: `What's the capital of Germany?`,
    options: [
      { option: "London", isCorrect: false },
      { option: "Paris", isCorrect: false },
      { option: "Berlin", isCorrect: true },
      { option: "Rome", isCorrect: false },
      { option: "Tokyo", isCorrect: false },
    ],
  },
  {
    question: `What's the capital of Italy?`,
    options: [
      { option: "Paris", isCorrect: false },
      { option: "Tokyo", isCorrect: false },
      { option: "Rome", isCorrect: true },
      { option: "Berlin", isCorrect: false },
      { option: "London", isCorrect: false },
    ],
  },
];
