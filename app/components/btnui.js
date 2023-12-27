export default function ButtonUi({ text, bg }) {
  const btnbg =
    ' hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ' +
    bg
  return (
    <>
      <button href="#" className={btnbg}>
        {text}
      </button>
    </>
  )
}
