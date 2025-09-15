import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="container flex justify-center items-center flex-col space-y-3 fixed 
    left-1/2 -translate-x-1/2 backdrop-blur-3xl py-6 rounded-b-3xl overflow-hidden"
    >
      <Link href="/">
        <h1 className="text-2xl lg:text-3xl">Terence Zhang</h1>
      </Link>

      <NavigationMenu className="border border-white/15 rounded-full bg-white/10 p-2">
        <NavigationMenuList className="flex space-x-1">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#" className="nav-item">
                About Me
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#" className="nav-item">
                Projects
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#" className="nav-item">
                Contact Me
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
