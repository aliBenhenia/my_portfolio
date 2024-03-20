import About from "@/components/about/about";
import Header from "../components/header/Header";
import HomePage from "../components/home/HomePage";

export default function Home() {
  return (
   <>
     <div className="container mx-auto " id="main">
     
        <Header />
        <HomePage />
        <About />
     </div>
   </>
  );
}
