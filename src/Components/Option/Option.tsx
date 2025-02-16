type OptionProps = {
  optionObj: { option: string; isCorrect: boolean }
  index: number
  handleOptionClick: (index: number) => void
  selectedOption: number | null
}

export const Option: React.FC<OptionProps> = ({
  optionObj,
  index,
  handleOptionClick,
  selectedOption,
}) => {
  const getColorOption = () => {
    if (selectedOption === null) return "bg-gray-200 hover:bg-gray-300"
    if (selectedOption === index)
      return optionObj.isCorrect ? "bg-green-400" : "bg-red-400"
    return optionObj.isCorrect ? "bg-green-400" : "bg-gray-200"
  }

  const colorOption = getColorOption()

  return (
    <button
      onClick={() => handleOptionClick(index)}
      disabled={selectedOption != null}
      className={`border p-2 flex flex-col justify-center items-center rounded-sm ${colorOption}`}
    >
      {optionObj.option}
    </button>
  )
}
