import Image from "next/image";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import logo from "@/app/assets/Logo.png"
export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Footer/>
   </div>
  );
}
