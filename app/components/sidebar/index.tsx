import { Link } from "@remix-run/react";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineWatchLater,
  MdOutlineThumbUpOffAlt,
  MdPlayCircleOutline
} from "react-icons/md";
export default function Sidebar() {
  return (
    <aside className="fixed left-0 bottom-0 top-14 hidden md:block  md:w-60 bg-white">
      <ul className="grid gris-cols-1 gap-4 pl-4 py-4">
        {links.map((link) => (
          <li>
            <Link to={"/"} className="flex items-center space-x-4">
              <div>{link.icon}</div>
              <p>{link.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <ul className="grid gris-cols-1 gap-4 pl-4 py-4">
        {userMenus.map((link) => (
          <li>
            <Link to={"/"} className="flex items-center space-x-4">
              <div>{link.icon}</div>
              <p>{link.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

const links = [
  {
    title: "Home",
    icon: <AiOutlineHome className="text-2xl" />,
  },
  {
    title: "Explore",
    icon: <MdOutlineExplore className="text-2xl" />,
  },
  {
    title: "Subscription",
    icon: <MdOutlineSubscriptions className="text-2xl" />,
  },
];

const userMenus = [
  {
    title: "Library",
    icon: <MdOutlineVideoLibrary className="text-2xl" />,
  },
  {
    title: "History",
    icon: <MdOutlineHistory className="text-2xl" />,
  },
  {
    title: "Your videos",
    icon: <MdPlayCircleOutline className="text-2xl" />,
  },
  {
    title: "Watch later",
    icon: <MdOutlineWatchLater className="text-2xl" />,
  },
  {
    title: "Liked videos",
    icon: <MdOutlineThumbUpOffAlt className="text-2xl" />,
  },
];
