import Header from "@/sections/Header";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
      </main>
    </>
  );
}
