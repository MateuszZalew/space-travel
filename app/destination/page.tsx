"use client";

import Image from "next/image";
import { useState } from "react";
import data from "../data.json";
import Nav from "../components/nav";

export default function DestinationPage() {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const destination = data.destinations[destinationIndex];

  return (
    <>
      <Nav />
      <main className="grid-container grid-container--destination flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>
        <Image
          src={destination.images.png}
          alt="of destination target"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={150}
          height={150}
        />
        <div className="tab-list underline-indicators flex">
          <button
            aria-selected={destinationIndex === 0}
            className="uppercase ff-sans-cond text-light bg-transparent letter-spacing-2"
            onClick={() => setDestinationIndex(0)}
          >
            Moon
          </button>
          <button
            aria-selected={destinationIndex === 1}
            className="uppercase ff-sans-cond text-light bg-transparent letter-spacing-2"
            onClick={() => setDestinationIndex(1)}
          >
            Mars
          </button>
          <button
            aria-selected={destinationIndex === 2}
            className="uppercase ff-sans-cond text-light bg-transparent letter-spacing-2"
            onClick={() => setDestinationIndex(2)}
          >
            Europa
          </button>
          <button
            aria-selected={destinationIndex === 3}
            className="uppercase ff-sans-cond text-light bg-transparent letter-spacing-2"
            onClick={() => setDestinationIndex(3)}
          >
            Titan
          </button>
        </div>

        <article className="destination-info">
          <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>

          <p>{destination.description}</p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-light fs-200 uppercase">Avg. Distance</h3>
              <p className="fs-500 ff-serif uppercase">
                {destination.distance}
              </p>
            </div>
            <div>
              <h3 className="text-light fs-200 uppercase">Est. Travel Time</h3>
              <p className="fs-500 ff-serif uppercase">{destination.travel}</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
