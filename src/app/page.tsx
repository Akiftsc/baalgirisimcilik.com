import SlideText from "@/Components/slideText";
import Link from "next/link";

export default function Home() {
  return (
    <main className="homePage flex flex-col gap-5">
    <h1 className="heroText">
      Eğer <SlideText /> İlgin Varsa
    </h1>
    <Link target="_blank" href="https://www.instagram.com/bulentakarcaligirisimcilik/" className="p-3 text-white cursor-pointer insta-button">
      @bulentakarcaligirisimcilik
    </Link>
    </main>
  ) 
}
