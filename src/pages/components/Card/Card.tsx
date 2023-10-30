import {
  Card as CardWrapper,
  CustomFlowbiteTheme,
  Flowbite,
} from "flowbite-react";
import Image, { StaticImageData } from "next/image";

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: "flex rounded-lg bg-second-background shadow-md",
      children: "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      },
    },
  },
};

const Card: React.FC<{
  headline: string;
  content: string;
  image: StaticImageData;
}> = ({ headline, content, image }) => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <CardWrapper className="md:w-1/2">
        <div>
          <h5 className="mb-2 md:text-2xl text-lg text-main-violet">
            {headline}
          </h5>
          <div className="mb-5 md:text-base text-sm font-thin text-main-violet">
            {content}
          </div>

          <Image height={200} width={650} src={image} alt={""} />
        </div>
      </CardWrapper>
    </Flowbite>
  );
};
export default Card;
