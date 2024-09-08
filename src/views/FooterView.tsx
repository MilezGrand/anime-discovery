import Image from "next/image";
import logoImage from "@public/logo.svg";
import instagramImage from "@public/instagram.svg";
import twitterImage from "@public/twitter.svg";
import tiktokImage from "@public/tiktok.svg";
import Icon from "@/atoms/Icon";
import FooterTemplate from "@/templates/FooterTemplate";

function FooterView() {
  return (
    <FooterTemplate
      title="Anime Vault"
      logo={
        <Image
          src={logoImage}
          alt="logo"
          width={47}
          height={44}
          className="object-contain"
        />
      }
      socials={
        <>
          <Icon
            src={tiktokImage}
            alt="tiktok"
            size={19}
            className="object-contain"
          />
          <Icon
            src={instagramImage}
            alt="instagram"
            size={19}
            className="object-contain"
          />
          <Icon
            src={twitterImage}
            alt="x"
            size={19}
            className="object-contain"
          />
        </>
      }
    />
  );
}

export default FooterView;
