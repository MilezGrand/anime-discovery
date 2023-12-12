import Image from "next/image";
import logoImage from '../public/logo.svg';
import instagramImage from '../public/instagram.svg'
import twitterImage from '../public/twitter.svg'
import tiktokImage from '../public/tiktok.svg'

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">Anime Vault</p>
      <Image
        src={logoImage}
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src={tiktokImage}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src={instagramImage}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src={twitterImage}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
