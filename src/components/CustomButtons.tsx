"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { ReactNode } from "react";

type buttonVariants =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;

const ButtonLink = ({
  content,
  link,
  icon,
  variant = "default",
  newTab = false,
}: {
  content: string;
  link: string;
  icon?: ReactNode;
  variant?: buttonVariants;
  newTab?: boolean;
}) => {
  return (
    <Button
      asChild
      size="lg"
      variant={variant}
      className="hover:scale-105 active:scale-95"
    >
      <Link
        href={link}
        className="flex items-center"
        target={newTab ? "_blank" : "_self"}
      >
        {icon && <span>{icon}</span>}
        {content}
      </Link>
    </Button>
  );
};

export { ButtonLink };
