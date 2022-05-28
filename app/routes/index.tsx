import { Link } from "@remix-run/react";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Index() {
  return (
    <>
      {/* tags  */}
      <ul className="flex items-center space-x-4 bg-white border-b  px-4 py-3 sticky top-14">
        {[...new Array(10)].map((tag) => (
          <li>
            <Link
              to={"/"}
              className="px-4 py-1 rounded-full bg-gray-100 border border-gray-300"
            >
              Tag {tag}
            </Link>
          </li>
        ))}
      </ul>

      {/* videos  */}

      <ul className="px-4 py-4 grid grid-cols-4 gap-4">
        {[...new Array(16)].map((video) => (
          <li className="group">
            <div>
              <img
                src="https://i.ytimg.com/vi/oQMc7Sq36mI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8iqtbWHLt1PKGHZcBVB4keniVgQ"
                alt="thumnail"
                className="w-full h-full"
              />
            </div>

            <div className="flex mt-3 space-x-3">
              <img
                src="https://yt3.ggpht.com/_xmrueXlQyPmO379bSt2BjirLWXxNOUoQn1jV0DpOlxxeCGlx9Z2L9HxfoWMgdsdIyGFh17W1A=s68-c-k-c0x00ffffff-no-rj"
                alt="Profile avatar"
                className="rounded-full w-8 h-8 flex-none"
              />

              <div className="flex-grow">
                <h6 className="font-medium text-sm">
                  Mastering react course for beginners
                </h6>
                <p className="mt-2 text-xs text-gray-500">Harsh Mangalam</p>
                <p className="mt-0 text-xs text-gray-500">
                  {48}k views &bull; {4} months ago
                </p>
              </div>
              <div className="hidden group-hover:block">
                <button>
                  <BsThreeDotsVertical className="text-xl" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
