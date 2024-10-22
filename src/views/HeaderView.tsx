import HeaderTemplate from "@/templates/HeaderTemplate";
import Link from "next/link";
import Icon from "@/atoms/Icon";

function HeaderView() {
  return (
    <Link href="/">
      <HeaderTemplate
        logo={
          <Icon
            name="logo"
            size={100}
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
