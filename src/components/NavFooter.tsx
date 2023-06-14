import { useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../data/Data";
import scroll from "../utils/scroll";

type Props = {
  home: boolean;
};

const NavFooter = ({ home }: Props) => {
  useEffect(() => {
    scroll();
  }, []);

  return (
    <section className="bg-black w-full flex justify-center">
      <ul className="nav-footer flex font-semibold mb-8">
        {home === true &&
          navItems.map((item, index) => (
            <li key={index} className="border-r px-4">
              <a href={item.url} className="menu-link">
                {item.name}
              </a>
            </li>
          ))}
        {home === false &&
          navItems.map((item, index) => (
            <li key={index} className="border-r px-4">
              <Link to={`/${item.url}`}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default NavFooter;
