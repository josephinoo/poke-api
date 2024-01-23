import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <>
      <Head>
        <title>Condorsoft</title>
        <meta name="description" content="Condorsoft technical test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center ">
        <div className="container flex flex-col items-center justify-center gap-12 px-4  ">
          <div className="txt-white">Pokedex</div>
        </div>
      </main>
    </>
  );
}
