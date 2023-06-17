import { useEffect } from "react";
import { Link } from "react-router-dom";
import Social from "./Social";
import Search from "./Search";
import Logo from "./Logo";
import scroll from "../utils/scroll";

const Header = ({ home }: { home: boolean }) => {
  useEffect(() => {
    scroll();
  }, []);

  return (
    <div className="container max-w-7xl m-auto items-center py-6 px-8 hidden md:flex">
      <div className="flex-grow flex justify-between flex-1">
        <Social />
        <nav>
          <ul className="flex gap-12 xl:gap-16 items-center font-bold">
            <li>
              {home === true && (
                <a href="#actualidad" className="menu-link">
                  actualidad
                </a>
              )}
              {home === false && <Link to="/#actualidad">actualidad</Link>}
            </li>
            <li>
              {home === true && (
                <a href="#actualidad" className="menu-link">
                  entrevistas
                </a>
              )}
              {home === false && <Link to="/#entrevistas">entrevistas</Link>}
            </li>
          </ul>
        </nav>
      </div>
      <div className="px-16">
        {home === true && (
          <a href="#actualidad" className="menu-link">
            <Logo />
          </a>
        )}
        {home === false && (
          <Link to="/">
            <Logo />
          </Link>
        )}
      </div>
      <div className="flex flex-grow flex-1 justify-between items-center gap-12 xl:gap-16">
        <nav>
          <ul className="flex gap-12 xl:gap-16 items-center font-bold">
            <li>
              {home === true && (
                <a href="#virales" className="menu-link">
                  virales
                </a>
              )}
              {home === false && <Link to="/#virales">virales</Link>}
            </li>
            <li>
              <a href="#contacto" className="menu-link">
                contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="w-36">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
