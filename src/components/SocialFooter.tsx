import { Facebook, Instagram, Twitter, Youtube, Tiktok, Twitch, Email } from "../icons/MySvgs";

const SocialFooter = () => {
  return (
    <section className="w-full bg-black flex justify-center pb-8">
      <ul className="flex gap-4 items-center">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100090273765391&mibextid=LQQJ4d" target="_blank" rel="noreferrer" className="svg-secondary">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="svg-secondary">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/saltaoktw/status/1634980871068581889?s=46&t=qW9qhBrq_Y57-WzCzzrlfA" target="_blank" rel="noreferrer" className="svg-secondary">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@saltaok" target="_blank" rel="noreferrer" className="svg-secondary">
            <Youtube />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@saltaok_?_t=8a0SShHqcgo&_r=1" target="_blank" rel="noreferrer" className="svg-secondary">
            <Tiktok />
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/saltaok_" target="_blank" rel="noreferrer" className="svg-secondary">
            <Twitch />
          </a>
        </li>
        <li>
          <a href="mailto:saltaokmail@gmail.com" target="_blank" rel="noreferrer" className="svg-secondary">
            <Email />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialFooter;
