import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { JSX } from "react";
import { Computer, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import * as motion from "motion/react-client";
import { slideLeftVariants, slideRightVariants } from "@/utils/variants";
import { ButtonLink } from "./CustomButtons";

const AboutCard = ({
  title,
  direction,
  content,
  description,
}: {
  title: string;
  direction: "left" | "right";
  content: () => JSX.Element;
  description?: string;
}) => {
  return (
    <motion.div
      className="h-full w-full"
      variants={direction === "left" ? slideLeftVariants : slideRightVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-gray-800 border-3 border-gray-600 text-gray-300 gap-3 h-full w-full">
        <CardHeader>
          <CardTitle className="text-xl">
            <h4>{title}</h4>
          </CardTitle>
          {description && (
            <CardDescription className="text-gray-400">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="flex h-full items-center justify-center">
          {content()}
        </CardContent>
      </Card>
    </motion.div>
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
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      className="h-full w-full"
      variants={index % 2 == 0 ? slideLeftVariants : slideRightVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-gray-800 border-3 border-gray-600 text-gray-300 h-full w-full gap-5">
        <CardHeader>
          <CardTitle className="text-xl">
            <h4>
              {emoji} {title}
            </h4>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex gap-5 flex-col">
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
        <CardFooter className="flex flex-col md:flex-row gap-3 justify-center mt-3">
          <ButtonLink
            content="GitHub Repo"
            link={githubLink}
            icon={<Github />}
            newTab={true}
          />
          {liveLink && (
            <ButtonLink
              content="Live Website"
              link={liveLink}
              icon={<Computer />}
              variant="secondary"
              newTab={true}
            />
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export { AboutCard, ProjectCard };
