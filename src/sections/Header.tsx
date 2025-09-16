import NavMenu from "@/components/NavMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="container flex justify-center items-center flex-col space-y-3 fixed 
    left-1/2 -translate-x-1/2 backdrop-blur-3xl py-6 rounded-b-3xl overflow-hidden"
    >
      <Link href="/">
        <h1>Terence Zhang</h1>
      </Link>

      <NavMenu />
    </header>
  );
};

export default Header;
