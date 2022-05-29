import { Popover } from "@headlessui/react";
import { Link } from "@remix-run/react";
import { IoPersonOutline } from "react-icons/io5";
import { SiObsstudio } from "react-icons/si";
import { VscSettingsGear } from "react-icons/vsc";
import { MdLogout } from "react-icons/md";
export default function Profile() {
  return (
    <Popover className={"relative"}>
      <Popover.Button>
        <p className="w-7 h-7 rounded-full bg-orange-600 text-white font-medium text-lg grid place-items-center">
          H
        </p>
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />

      <Popover.Panel className="absolute right-0 top-10 w-52 bg-white rounded-md">
        <Link to="/" className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 rounded-t-md">
          <p className="w-7 h-7 rounded-full bg-orange-600 text-white font-medium text-lg grid place-items-center">
            H
          </p>

          <p className="font-medium">Harsh mangalam</p>
        </Link>

        <hr />

        <ul className="flex flex-col py-2">
          {menus.map((menu) => (
            <li>
              <Link
                to="/"
                className="flex space-x-3 items-center py-2 px-2 hover:bg-gray-100"
              >
                <div>{menu.icon}</div>
                <p>{menu.title}</p>
              </Link>
            </li>
          ))}
        </ul>

        <hr />
        <button className="flex w-full space-x-3 items-center py-2 px-2 hover:bg-red-500 hover:text-white rounded-b-md">
          <div>
            <MdLogout className="text-lg" />
          </div>
          <p>Logout</p>
        </button>
      </Popover.Panel>
    </Popover>
  );
}

const menus = [
  {
    title: "Your Channels",
    icon: <IoPersonOutline className="text-lg" />,
  },
  {
    title: "RemixTube Studio",
    icon: <SiObsstudio className="text-lg" />,
  },
  {
    title: "Settings",
    icon: <VscSettingsGear className="text-lg" />,
  },
];
