import * as React from "react";
import katja from "../../../../public/images/katja_filter_2.png";
import Image from "next/image";

const Avatar: React.FC<{}> = () => {
  return (
    <Image
      className="inline object-cover w-60 h-60 mr-2 rounded-full"
      src={katja}
      alt={"person"}
    />
  );
};

export default Avatar;
