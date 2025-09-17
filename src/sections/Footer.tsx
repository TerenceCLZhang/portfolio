import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="container mx-auto space-y-5 pt-30 pb-5 ">
      <Separator className="bg-gray-500" />
      <p className="text-gray-400 text-center">
        &copy; Copyright 2025 Terence Zhang. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
