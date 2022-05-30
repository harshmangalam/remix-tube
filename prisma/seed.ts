import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getVideos().map((video) => {
      return db.video.create({
        data: video,
      });
    })
  );
}

seed();

function getVideos() {
  return [
    {
      title: "Comparing Rust (Yew) vs TypeScript (React) NodeJS | SSR times",
      thumbnail:
        "https://i.ytimg.com/an_webp/ydkQlJhodio/mqdefault_6s.webp?du=3000&sqp=COi50ZQG&rs=AOn4CLDfD8n6Fi8s3PrxOvqiaOJDpaR1ZA",
      duration: "6:36",
    },
    {
      title: "WebAssembly Landscpe 2022",
      thumbnail:
        "https://i.ytimg.com/vi/Ndu9qU_vY9c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqxcTCqYXfbdPCxaNv2FGBrul1Tw",
      duration: "25:36",
    },
    {
      title: "Animation in react - Framer Motion",
      thumbnail:
        "https://i.ytimg.com/vi/GOuwOI-WSkE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFrH3HggTM1KoGYPWZpkJabUqV6A",
      duration: "24:34",
    },
    {
      title: "The Nuxt big thing in web development",
      thumbnail:
        "https://i.ytimg.com/vi/noq-ZHTD2Cg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByxUxdwzRC5d8XmgNMR9aOg6gueQ",
      duration: "4:55",
    },
  ];
}
