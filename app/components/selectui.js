export default function Selectui(props) {
  const labelText = props.labeltxt
  const inputText = props.inputtxt
  const { option1, option2 } = props.options
  return (
    <>
      <label
        for="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelText}
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-lightgrey text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>{inputText}</option>
        <option value="#">{option1}</option>
        <option value="#">{option2}</option>
      </select>
    </>
  )
}
