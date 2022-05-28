import { AiOutlineMenu, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsFillMicFill, BsSearch } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";

export default function Header() {
  return (
    <nav className="flex items-center justify-between h-14 px-4 border-b sticky top-0 bg-white z-40">
      {/* left section  */}
      <div className="flex items-center space-x-4">
        <button>
          <AiOutlineMenu className="text-xl" />
        </button>

        <div className="flex items-center space-x-2">
          <div>
            <SiYoutube className="text-red-600 text-2xl" />
          </div>
          <h6 className="text-xl font-medium">RemixTube</h6>
        </div>
      </div>

      {/* middle section  */}

      <div className="lg:flex items-center space-x-2 hidden">
        <div className="flex items-center space-x-1">
          <input type="text" placeholder="Search RemixTube" className="py-1" />
          <button className="bg-gray-100 p-2 border border-black">
            <BsSearch className="text-md" />
          </button>
        </div>

        <button>
          <BsFillMicFill className="text-xl" />
        </button>
      </div>

      {/* right section  */}

      <div className="flex items-center space-x-4">
        <button>
          <AiOutlineVideoCameraAdd className="text-2xl" />
        </button>
        <button>
          <IoNotificationsOutline className="text-2xl" />
        </button>

        <button>
          <p className="w-7 h-7 rounded-full bg-orange-600 text-white font-medium text-lg grid place-items-center">
            H
          </p>
        </button>
      </div>
    </nav>
  );
}
