import type { Video } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";
import { db } from "~/utils/db.server";

type LoaderData = {
  videoListItems: Array<{
    id: string;
    duration: string;
    createdAt: Date;
    title: string;
    thumbnail: string;
  }>;
};
export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    videoListItems: await db.video.findMany({
      take: 4,
      select: {
        id: true,
        duration: true,
        createdAt: true,
        title: true,
        thumbnail: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
  };

  return json(data);
};
export default function IndexRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <>
      <Header />
      <Sidebar />
      <main className="md:ml-60">
        {/* tags  */}
        <ul className="flex items-center space-x-4 bg-white border-b  px-4 py-3 sticky top-14 overflow-x-auto z-10">
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

        <ul className="px-4 py-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 ">
          {data.videoListItems.map((video) => (
            <li className="group">
              <div>
                <img
                  src={video.thumbnail}
                  alt={video.id}
                  className="w-full h-full"
                />
              </div>

              <div className="relative flex mt-3 space-x-3">
                <img
                  src="https://yt3.ggpht.com/_xmrueXlQyPmO379bSt2BjirLWXxNOUoQn1jV0DpOlxxeCGlx9Z2L9HxfoWMgdsdIyGFh17W1A=s68-c-k-c0x00ffffff-no-rj"
                  alt="Profile avatar"
                  className="rounded-full w-8 h-8 flex-none"
                />

                <div className="flex-grow">
                  <h6 className="font-medium text-sm">{video.title}</h6>
                  <p className="mt-2 text-xs text-gray-500">Harsh Mangalam</p>
                  <p className="mt-0 text-xs text-gray-500">
                    {48}k views &bull; {4} months ago
                  </p>
                </div>
                <div className="absolute top-0 right-0 hidden group-hover:block">
                  <button>
                    <BsThreeDotsVertical className="text-xl" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
