import ButtonUi from '../components/btnui'
import Header from '../components/header'
import SideBar from '../components/sidebar'

export default function WorkFlow() {
  return (
    <>
      <Header />
      <div className="flex justify-start">
        <SideBar />
        <div className=" basis-full">
          <div className="h-3/4">{/* place the graph heree */}</div>
          <hr />
          <div className=" flex justify-between">
            <p className=" p-2">
              Look out for the final response from workflow here
            </p>
            <div className="bg-headercolors h-40 w-0.5 -ml-10"></div>
            <div className=" mt-5 mr-4  pr-8">
              <ButtonUi text="execute" bg="bg-btncolor text-headercolors" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
