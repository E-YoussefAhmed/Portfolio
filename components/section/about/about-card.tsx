import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="min-w-[150px] max-w-[250px] h-full hover:scale-110 transition duration-500">
      <CardHeader>
        <AspectRatio
          className="bg-[#121b26] rounded-md overflow-hidden"
          ratio={5 / 3}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="200"
            className={`object-contain ${image !== "/mern.avif" && "py-2"}`}
          />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <h2 className="text-center text-primary font-bold">{title}</h2>
        <CardDescription className="mt-2 text-xs lg:text-sm text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
