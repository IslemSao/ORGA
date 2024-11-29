import Image from "next/image";
import image from "../../app/public/Grid_bg.svg"
import logo from "../../app/public/Logo.svg"
import slogan from "../../app/public/slogan.svg"
import { RiMapPin2Line } from "react-icons/ri";
import { LuCalendar } from "react-icons/lu";
import button from "../../app/public/Register.svg"
export default function Hero() {
  return (
    <section id="hero" className=" relative min-h-screen flex items-center justify-center bg-[#111111]  min-w-full">
      <div className=" inset-0 absolute z-0 ">
         <Image src={image}  layout="fill" alt="img" objectFit="cover" className=" h-full w-full"/>
      </div>
      <div className="container px-4 py-16 flex justify-center items-center flex-col z-40 gap-4">
        <Image src={logo} alt="logo" width={500} height={500} className=" pt-8"/>
        <Image src={slogan} alt="slogan" width={600} height={400} />
        <div className=" grid grid-cols-3 gap-20 text-white ">
          <div className=" pr-10 my-4">
            <div className=" flex justify-start items-center gap-2 text-[#00F2EA] my-3 ">
              <RiMapPin2Line className=" text-3xl"/>
              <p>DGA at ESI Alger</p>
            </div>
               <div className="flex justify-start items-center gap-2 text-[#FF0050]">
              <LuCalendar className=" text-3xl"/>
              <p>Afternoon  09/12/2024</p>
               </div>
          </div>
          <div className="flex justify-center items-center ">
            <Image src={button} alt="button" width={200} height={200}/>
            </div>
        </div>
      </div>
    </section>
  );
}