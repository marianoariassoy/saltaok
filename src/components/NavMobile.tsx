import { useEffect } from "react";
import { navItems } from "../data/Data";
import SocialFooter from "./SocialFooter";
import scroll from "../utils/scroll";
import { Link } from "react-router-dom";

function NavMobile({ home }: { home: boolean }) {
  useEffect(() => {
    scroll();
  }, []);

  const closeMenu = () => {
    document.querySelector("#nav-menu").classList.toggle("active");
    const navMobile = document.querySelector(".nav-mobile");
    navMobile?.classList.toggle("hidden");
  };

  return (
    <nav className="nav-mobile fade-in fixed top-0 w-screen h-screen bg-black bg-opacity-95 backdrop-blur-sm p-8 hidden -z-10" onClick={closeMenu}>
      <div className="flex w-full h-full text-center items-center justify-center">
        <ul className="font-semibold text-xl mb-16">
          {home &&
            navItems.map((item, index) => (
              <li key={index} className="mb-12">
                <a href={item.url} className="menu-link">
                  {item.name}
                </a>
              </li>
            ))}
          {!home &&
            navItems.map((item, index) => (
              <li key={index} className="mb-12">
                <Link to="/">{item.name}</Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="absolute left-0 w-full bottom-28 flex justify-center">
        <SocialFooter />
      </div>
    </nav>
  );
}

export default NavMobile;
