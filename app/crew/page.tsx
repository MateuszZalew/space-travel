"use client";

import Image from "next/image";
import { useState } from "react";
import data from "../data.json";
import Nav from "../components/nav";

export default function CrewPage() {
  const [crewIndex, setCrewIndex] = useState(0);
  const crew = data.crew[crewIndex];

  return (
    <div className="crew">
      <Nav />
      <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>

        <article className="crew-details flow">
          <header className="flow flow-space--small">
            <h2 className="fs-600 ff-serif uppercase">{crew.role}</h2>
            <p className="fs-700 uppercase ff-serif">{crew.name}</p>
          </header>
          <p className="bio">{crew.bio}</p>
        </article>

        <div className="tab-list dot-indicators flex">
          <button
            aria-selected={crewIndex === 0}
            onClick={() => setCrewIndex(0)}
          >
            <span className="sr-only">{crew.role}</span>
          </button>
          <button
            aria-selected={crewIndex === 1}
            onClick={() => setCrewIndex(1)}
          >
            <span className="sr-only">{crew.role}</span>
          </button>
          <button
            aria-selected={crewIndex === 2}
            onClick={() => setCrewIndex(2)}
          >
            <span className="sr-only">{crew.role}</span>
          </button>
          <button
            aria-selected={crewIndex === 3}
            onClick={() => setCrewIndex(3)}
          >
            <span className="sr-only">{crew.role}</span>
          </button>
        </div>

        <Image
          src={crew.images.png}
          alt={crew.name}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={271}
          height={340}
        />
      </main>
    </div>
  );
}
