import Icon from "@/atoms/Icon";
import FooterTemplate from "@/templates/FooterTemplate";

function FooterView() {
  return (
    <FooterTemplate
      title="Anime Vault"
      logo={
        <Icon
          name="logo"
          size={48}
          className="object-contain"
        />
      }
      socials={
        <>
          <Icon
            name="tiktok"
            size={19}
            className="object-contain"
          />
          <Icon
            name="instagram"
            size={19}
            className="object-contain"
          />
          <Icon
            name="twitter"
            size={19}
            className="object-contain"
          />
        </>
      }
    />
  );
}

export default FooterView;
