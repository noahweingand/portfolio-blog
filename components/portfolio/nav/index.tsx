import Link from 'next/link';
import { NavLink } from './nav-link';
import { useNavCollapseHook } from '../../../hooks/header-collapse-hook';

export const Nav = () => {
  useNavCollapseHook();

  const links = ['Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav id="header" className="absolute w-full z-20 top-0">
      <div className="w-full md:max-w-6xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <Link href="/">
            <a className="text-white text-base no-underline hover:text-gray-900 font-extrabold text-2xl">
              nowein.dev
            </a>
          </Link>
        </div>

        <div className="block md:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-white-500 border-white-600 hover:text-white-900 hover:border-white-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow flex hidden mt-2 bg-transparent z-20 md:block overflow-x-scroll md:overflow-x-auto md:items-center md:w-auto md:mt-0"
          id="nav-content"
        >
          <ul className="list-reset flex justify-end flex-1 items-center">
            {links.map((link, key) => {
              return <NavLink key={key} name={link} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
