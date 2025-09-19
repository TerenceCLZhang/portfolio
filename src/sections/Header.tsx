import NavMenu from "@/components/NavMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full fixed left-1/2 -translate-x-1/2 backdrop-blur-3xl py-6 z-20">
      <div className="mx-auto flex justify-center items-center flex-col  space-y-3 md:flex-row md:space-y-0 md:justify-between max-w-5xl">
        <Link href="/">
          <h1 className="gradient-1">Terence Zhang</h1>
        </Link>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
