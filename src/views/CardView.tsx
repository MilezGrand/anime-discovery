import { MotionDiv } from "@atoms/MotionDiv";
import Link from "next/link";
import CardTemplate from "@/templates/CardTemplate";

type propsType = {
  id: string;
  imageUrl: string;
  name: string;
  kind: string;
  episodes: number;
  score: string;
  isAnime?: boolean;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function CardView({
  id,
  imageUrl,
  name,
  kind,
  episodes,
  score,
  isAnime = false,
}: propsType) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.15,
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="max-w-sm rounded-sm relative w-full"
    >
      <Link href={`/${isAnime ? "anime" : "manga"}/${id}`}>
        <CardTemplate
          {...{ id, imageUrl, name, kind, episodes, score }}
        />
      </Link>
    </MotionDiv>
  );
}

export default CardView;
