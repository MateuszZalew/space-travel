import Link from "next/link";
import Nav from "./components/nav";

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <main id="main" className="grid-container grid-container--home">
        <div className="flow">
          <h1 className="text-light fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to
            <span className="fs-900 ff-serif text-white d-block home-title">
              Space
            </span>
          </h1>
          <p className="text-light flow--space-big">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="button-container">
          <Link
            href="/destination"
            className="large-button uppercase ff-serif text-dark bg-white"
          >
            Explore
          </Link>
        </div>
      </main>
    </div>
  );
}
