import { navItems } from "../data/Data";

const NavFooter = () => {
  return (
    <section className="bg-black w-full flex justify-center">
      <ul className="nav-footer flex font-semibold mb-8 ">
        {navItems.map((item, index) => (
          <li key={index} className="border-r px-4 text-xl">
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavFooter;
