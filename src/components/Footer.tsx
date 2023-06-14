import Credits from "./Credits";
import NavFooter from "./NavFooter";
import SocialFooter from "./SocialFooter";

type Props = {
  home: boolean;
};

const Footer = ({ home }: Props) => {
  return (
    <section className="flex flex-col items-center">
      <NavFooter home={home} />
      <SocialFooter />
      <Credits />
    </section>
  );
};

export default Footer;
