import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const NavMenu = () => {
  return (
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
  );
};

export default NavMenu;
