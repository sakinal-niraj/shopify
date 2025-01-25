import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function ContentPage() {
  return (
    <main
      id="logo-sidebar"
      className="p-0 m-0 flex fixed top-0 left-[310px] z-40 h-[91vh] w-[76.5vw] my-14 mx-10 rounded-xl transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <nav className="w-full rounded-lg">
        <div className="flex items-center justify-between py-3 px-10 bg-gray-100">
          {/* left side */}
          <div className="flex items-center">
            {/* logo */}
            <h1 className="mr-3 text-gray-700 text-xl hover:text-black">
              My store
            </h1>

            {/* links */}
            <ul className="flex ml-7 gap-6 text-sm">
              <li className="relative group cursor-pointer">
                Home
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
              <li className="relative group cursor-pointer">
                Catalog
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
              <li className="relative group cursor-pointer">
                Contac
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
            </ul>
          </div>

          {/* right side */}
          <div className="flex items-center gap-5">
            <span className="hover:scale-125 duration-300 cursor-pointer">
              <FiSearch />
            </span>
            <span className="hover:scale-125 duration-300 cursor-pointer">
              <FaRegUser />
            </span>
            <span className="hover:scale-125 duration-300 cursor-pointer">
              <LiaShoppingBagSolid size={19} />
            </span>
          </div>
        </div>
      </nav>
    </main>
  );
}
