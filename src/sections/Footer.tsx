import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto space-y-5 pt-10 pb-5 max-w-5xl section-padding">
      <Separator className="bg-gray-500" />
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
        <p className="text-gray-400 text-center">
          &copy; Copyright 2025 Terence Zhang. All rights reserved.
        </p>
        <div className="space-x-3">
          <Button asChild size="icon">
            <Link
              href={`mailto:${process.env.EMAIL}`}
              target="_blank"
              aria-label="Email Terence directly"
            >
              <Mail />
            </Link>
          </Button>
          <Button asChild size="icon">
            <Link
              href="https://www.linkedin.com/in/terence-chun-lin-zhang/"
              target="_blank"
              aria-label="Visit Terence Zhang's LinkedIn profile"
            >
              <Linkedin />
            </Link>
          </Button>
          <Button asChild size="icon">
            <Link
              href="https://github.com/TerenceCLZhang"
              target="_blank"
              aria-label="Visit Terence Zhang's GitHub profile"
            >
              <Github />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
