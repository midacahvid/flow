import ButtonUi from '../components/btnui'
import Datatableui from '../components/datatableui'
import DragdropUi from '../components/dragdropui'
import Header from '../components/header'
import Selectui from '../components/selectui'

export default function Evaluation() {
  return (
    <>
      <Header />
      <div className="p-12">
        <div className="flex justify-between flex-wrap">
          <div className=" basis-full lg:basis-1/3">
            <Selectui
              labeltxt="Jugde LLM"
              inputtxt="chose a llm"
              options={{ option1: '1', option2: '2' }}
            />
            <div className="pt-3 pb-3">
              <DragdropUi fileTypetxt="Data file" />
            </div>
          </div>
          <div className="basis-full lg:basis-1/3">
            <Selectui
              labeltxt="Evaluate"
              inputtxt="select worklow"
              options={{ option1: 'LLM', option2: 'Workflow' }}
            />
            <div className="py-4">
              <DragdropUi fileTypetxt="Workflow" />
            </div>
            <ButtonUi text="Set Input Actor" bg="bg-headercolors text-white" />
          </div>
          <div className="self-center mt-3">
            <ButtonUi text="Run Evaluation" bg="bg-headercolors text-white" />
          </div>
        </div>
        <hr className=" text-headercolors mt-4" />

        <div className="my-4">
          <Datatableui />
        </div>
      </div>
    </>
  )
}
