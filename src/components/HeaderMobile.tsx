import { Link } from "react-router-dom";
import Logo from "./Logo";

const HeaderMobile = () => {
  const OpenMenu = () => {
    document.querySelector("#nav-menu").classList.toggle("active");
    const navMobile = document.querySelector(".nav-mobile");
    navMobile?.classList.toggle("hidden");
  };

  return (
    <>
      <div className="w-screen grid grid-cols-3 items-center px-8 py-6 md:hidden">
        <div></div>
        <div className="flex justify-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex justify-end">
          <div id="nav-menu" onClick={OpenMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
