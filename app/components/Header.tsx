import { CiLogout } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiHome } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineTablet } from "react-icons/md";
import { GrUndo } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";


export default function Header() {
  return (
    <header className="bg-white fixed top-0 z-50 w-full border-b border-gray-100">
      <nav className="w-full flex justify-between items-center px-3 py-1.5">
        {/* left side */}
        <div className="flex items-center rounded-lg bg-gray-100 px-3 gap-1.5 py-1 cursor-pointer">
          <CiLogout />
          <span>Exit</span>
        </div>

        {/* middle side */}
        <div className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md cursor-pointer">
          <FiHome />
          Home page
          <span className="pt-[4px]">
            <TiArrowSortedDown />
          </span>
        </div>

        {/* right side */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* device screen changer */}
          <div className="flex items-center gap-2 bg-gray-100 px-2.5 py-1.5 rounded-sm">
            <HiOutlineComputerDesktop />
            <CiMobile1 />
            <MdOutlineTablet />
          </div>

          {/* undo & redo */}
          <div className="flex items-center gap-2">
            <GrUndo />
            <GrRedo />
          </div>

          {/* save btn*/}
          <button className="bg-black text-white px-5 py-1 rounded-lg">Save</button>
        </div>
      </nav>
    </header>
  );
}
