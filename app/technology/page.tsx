"use client";

import Image from "next/image";
import { useState } from "react";
import data from "../data.json";
import Nav from "../components/nav";

export default function TechnologyPage() {
  const [technologyIndex, setTechnologyIndex] = useState(0);
  const technology = data.technology[technologyIndex];

  return (
    <div className="technology">
      <Nav />
      <main
        id="main"
        className="grid-container grid-container--technology flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Space launch 101
        </h1>

        <Image
          src={technology.images.portrait}
          alt={technology.name}
          sizes="100vw"
          style={{
            width: "100%",
          }}
          width={327}
          height={280}
        />

        <div className="content">
          <div className="tab-list number-indicators flex">
            <button
              aria-selected={technologyIndex === 0}
              onClick={() => setTechnologyIndex(0)}
            >
              <span>1</span>
            </button>
            <button
              aria-selected={technologyIndex === 1}
              onClick={() => setTechnologyIndex(1)}
            >
              <span>2</span>
            </button>
            <button
              aria-selected={technologyIndex === 2}
              onClick={() => setTechnologyIndex(2)}
            >
              <span>3</span>
            </button>
          </div>

          <article className="technology-info flow">
            <header className="flow flow-space--small">
              <h2 className="fs-600 ff-serif uppercase">The terminology...</h2>
              <p className="fs-700 uppercase ff-serif">{technology.name}</p>
            </header>
            <p className="text-light">{technology.description}</p>
          </article>
        </div>
      </main>
    </div>
  );
}
