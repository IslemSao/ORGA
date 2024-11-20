import Image from "next/image";
import image from "../../app/public/Grid_bg.svg"
import logo from "../../app/public/Logo.svg"
import slogan from "../../app/public/slogan.svg"
import Navbar from "./Navbar";
export default function Hero() {
  return (
    <section id="hero" className=" relative min-h-screen flex items-center justify-center bg-[#111111]  min-w-full">
      <div className=" inset-0 absolute z-0 ">
         <Image src={image}  layout="fill" alt="img" objectFit="cover" className=" h-full w-full"/>
      </div>
      <div className="container px-4 py-16 flex justify-center items-center flex-col z-40 gap-4">
        <Image src={logo} alt="logo" width={600} height={600}/>
        <Image src={slogan} alt="slogan" width={600} height={400} />
      </div>
    </section>
  );
}