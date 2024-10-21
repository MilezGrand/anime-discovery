import Image from "next/image";

import logoImage from "@public/logo.svg";
import HeaderTemplate from "@/templates/HeaderTemplate";
import Link from "next/link";

function HeaderView() {
  return (
    <Link href="/">
      <HeaderTemplate
        logo={
          <Image
            src={logoImage}
            alt="logo"
            width={101}
            height={96}
            className="object-contain"
          />
        }
        title={
          <>
            Anime <span className="red-gradient">Vault</span>
          </>
        }
      />
    </Link>
  );
}

export default HeaderView;
