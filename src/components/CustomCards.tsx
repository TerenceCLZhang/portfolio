import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JSX } from "react";

const AboutMeCard = ({
  title,
  description,
  content,
  ...props
}: {
  title: string;
  description: string;
  content: () => JSX.Element;
}) => {
  return (
    <Card
      className="bg-gray-800 border-3 border-gray-600 text-gray-300"
      {...props}
    >
      <CardHeader>
        <CardTitle className="text-xl">
          <h4>{title}</h4>
        </CardTitle>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{content()}</CardContent>
    </Card>
  );
};

export default AboutMeCard;
