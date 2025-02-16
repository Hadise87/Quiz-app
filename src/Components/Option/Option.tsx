type OptionProps = {
  option: string
  isCorrect: boolean
  handleOptionClick: (option: string) => void
  selectedOption: string | null
}

export const Option: React.FC<OptionProps> = ({
  option,
  isCorrect,
  handleOptionClick,
  selectedOption,
}) => {
  const getColorOption = () => {
    if (selectedOption === null) return "bg-gray-200 hover:bg-gray-300"
    if (selectedOption === option)
      return isCorrect ? "bg-green-400" : "bg-red-400"
    return isCorrect ? "bg-green-400" : "bg-gray-200"
  }

  const colorOption = getColorOption()

  return (
    <button
      onClick={() => handleOptionClick(option)}
      disabled={selectedOption != null}
      className={`border p-2 flex flex-col justify-center items-center rounded-sm ${colorOption}`}
    >
      {option}
    </button>
  )
}
