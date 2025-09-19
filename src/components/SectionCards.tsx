import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { JSX } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Computer, Github } from "lucide-react";
import { Badge } from "./ui/badge";

const AboutCard = ({
  title,
  content,
}: {
  title: string;
  content: () => JSX.Element;
}) => {
  return (
    <Card className="bg-gray-800 border-3 border-gray-600 text-gray-300 h-full w-full gap-3">
      <CardHeader>
        <CardTitle className="text-xl">
          <h4>{title}</h4>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-full items-center justify-center">
        {content()}
      </CardContent>
    </Card>
  );
};

interface Project {
  emoji: string;
  title: string;
  image: string;
  techStack: string[];
  description: string[];
  githubLink: string;
  liveLink?: string;
}

const ProjectCard = ({
  project: {
    emoji,
    title,
    image,
    techStack,
    description,
    githubLink,
    liveLink,
  },
}: {
  project: Project;
}) => {
  return (
    <Card className="bg-gray-800 border-3 border-gray-600 text-gray-300 h-full w-full gap-5">
      <CardHeader>
        <CardTitle className="text-xl flex items-center justify-between">
          <h4>
            {emoji} {title}
          </h4>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex space-y-5 flex-col">
        <div className="bg-gray-700 border-3 rounded-4xl border-gray-600 p-1">
          <Image
            src={image}
            alt={`${title} card image`}
            width={2000}
            height={2000}
            className="mx-auto w-full h-full rounded-3xl"
          />
        </div>
        <div className="flex justify-center flex-wrap gap-2">
          {techStack.map((item, index) => (
            <Badge key={index}>{item}</Badge>
          ))}
        </div>
        <ul className="px-10 my-auto space-y-2">
          {description.map((item, index) => (
            <li key={index} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-3 justify-center mt-3">
        <Button asChild size="lg">
          <Link href={githubLink} target="_blank">
            <Github /> GitHub Repo
          </Link>
        </Button>

        {liveLink && (
          <Button asChild variant="secondary" size="lg">
            <Link href={liveLink} target="_blank">
              <Computer /> Live Website
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export { AboutCard, ProjectCard };
