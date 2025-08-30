import bannerimage from "../../assets/banner.jpg";
import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <div
      className="relative isolate px-6 pt-32 lg:px-8"
      style={{
        backgroundImage: `url(${bannerimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Data to enrich your online business
        </h1>
        <p className="mt-8 text-lg font-medium text-gray-700 dark:text-gray-300 sm:text-xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink
            to="/get-started"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Get started
          </NavLink>
          <NavLink
            to="/learn-more"
            className="text-sm font-semibold text-gray-900 dark:text-white"
          >
            Learn more →
          </NavLink>
        </div>
      </div>
    </div>
  );
}
