import s from "./SocialIconComponent.module.scss";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "./Facebook";
import InstagramIcon from "./Instagram";
import YouTubeIcon from "./YouTube";

const SocialIconsComponent = () => {
  return (
    <div className={s.socialIconBox}>
      {" "}
      <div className={s.socialIcon}>
        <Link
          href="https://www.facebook.com/tefltuscany"
          target="_blank"
          className={s.linkTag}
        >
          <FacebookIcon />
        </Link>
      </div>
      <div className={s.socialIcon}>
        <Link
          href="https://www.instagram.com/centrostudimugello1994/"
          target="_blank"
          className={s.linkTag}
        >
          <InstagramIcon />
        </Link>
      </div>
      <div className={s.socialIcon}>
        <Link
          href="https://www.youtube.com/channel/UC4Iq349wLtnznhw_BfO1Dhw"
          target="_blank"
          className={s.linkTag}
        >
          <YouTubeIcon />
        </Link>
      </div>
    </div>
  );
};

export default SocialIconsComponent;
