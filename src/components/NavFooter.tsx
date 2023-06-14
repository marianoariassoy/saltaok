import { useEffect } from "react";
import { navItems } from "../data/Data";
import scroll from "../utils/scroll";

const NavFooter = () => {
  useEffect(() => {
    scroll();
  }, []);

  return (
    <section className="bg-black w-full flex justify-center">
      <ul className="nav-footer flex font-semibold mb-8">
        {navItems.map((item, index) => (
          <li key={index} className="border-r px-4">
            <a href={item.url} className="menu-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavFooter;
