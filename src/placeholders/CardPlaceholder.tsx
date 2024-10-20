import Placeholder from "@/atoms/Placeholder";
import CardTemplate from "@/templates/CardTemplate";
import React from "react";

function CardPlaceholder() {
  return (
    <CardTemplate
      poster={<Placeholder className="size-full" />}
      name={<Placeholder className="h-[20px] w-[200px]" />}
      episodes={<Placeholder className="h-[20px] w-[50px]" />}
      score={<Placeholder className="h-[20px] w-[50px]" />}
      kind={<></>}
    />
  );
}

export default CardPlaceholder;
