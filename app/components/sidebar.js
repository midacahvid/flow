export default function SideBar() {
  return (
    <div className=" bg-sidebarcolor basis-64 h-screen">
      <div>
        <ul className="inline-flex p-4 text-lightgrey gap-8">
          <li className=" hover:bg-btncolor  hover:text-white px-3 py-2 rounded-md">
            load
          </li>
          <li className=" hover:bg-btncolor  hover:text-white px-3 py-2 rounded-md">
            Save
          </li>
          <li className=" hover:bg-btncolor  hover:text-white px-3 py-2 rounded-md">
            clean
          </li>
        </ul>
        <hr className=" text-white" />
      </div>
    </div>
  )
}
