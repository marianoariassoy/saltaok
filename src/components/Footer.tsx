import Credits from "./Credits";
import NavFooter from "./NavFooter";
import SocialFooter from "./SocialFooter";

const Footer = () => {
  return (
    <section className="flex flex-col items-center">
      <NavFooter />
      <SocialFooter />
      <Credits />
    </section>
  );
};

export default Footer;
