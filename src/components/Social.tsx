import { Facebook, Instagram, Twitter, Youtube, Tiktok, Twitch, Email } from "../icons/MySvgs";

const Social = () => {
  return (
    <ul className="flex gap-4 items-center">
      <li>
        <a href="https://www.facebook.com/profile.php?id=100090273765391&mibextid=LQQJ4d" target="_blank" rel="noreferrer" className="svg-primary">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="svg-primary">
          <Instagram />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/saltaoktw/status/1634980871068581889?s=46&t=qW9qhBrq_Y57-WzCzzrlfA" target="_blank" rel="noreferrer" className="svg-primary">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@saltaok" target="_blank" rel="noreferrer" className="svg-primary">
          <Youtube />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@saltaok_?_t=8a0SShHqcgo&_r=1" target="_blank" rel="noreferrer" className="svg-primary">
          <Tiktok />
        </a>
      </li>
      <li>
        <a href="https://www.twitch.tv/saltaok_" target="_blank" rel="noreferrer" className="svg-primary">
          <Twitch />
        </a>
      </li>
      <li>
        <a href="mailto:saltaokmail@gmail.com" target="_blank" rel="noreferrer" className="svg-primary">
          <Email />
        </a>
      </li>
    </ul>
  );
};

export default Social;
