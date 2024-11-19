'use client';  // Ajoute ceci en haut du fichier pour marquer ce fichier comme composant client

import { motion } from 'framer-motion'

export default function Agenda() {
  return (
    <section id="agenda" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-5xl  text-center">
          Agenda 
        </h2>
        <div  className="mx-28 " >
          <h2 className="text-[#FF0050] mt-20 text-2xl md:text-3xl font-bold">
               Tuesday
          </h2>
          <p className="text-lg font-medium pt-3">
              December 10th
          </p>
        </div>
        <div className="mx-28 mt-10 text-white ">
          <motion.div  whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -10 }} transition={{ duration: 1.5 }} className="grid grid-cols-12 gap-11 mb-10">
              <div className="bg-[#00F2EA] col-span-2 bg-opacity-90 shadow-[0_0_7px_#00F2EA] py-4 pl-1 rounded-xl justify-center items-center">
                 <p>08:00-09:00</p>
                 <p>Place</p>
              </div>
              <div className="bg-[#00F2EA] col-span-10 bg-opacity-90 shadow-[0_0_7px_#00F2EA] py-4 pl-4 rounded-xl justify-center items-center ">
                 <p className="font-bold">Title</p>
                 <p className="text-sm">pppppppppppppppppppppppppppppppppp</p>
              </div>
          </motion.div>

          <motion.div  whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -10 }} transition={{ duration: 1.5 }} className="grid grid-cols-12 gap-11 mb-10  ">
              <div className="bg-[#FF0050] col-span-2 bg-opacity-90 shadow-[0_0_7px_#FF0050] py-4 pl-1 rounded-xl justify-center items-center">
              <p>08:00-09:00</p>
              <p>Place</p>
              </div>
              <div className="bg-[#FF0050] col-span-10 bg-opacity-90 shadow-[0_0_7px_#FF0050] py-4 pl-4 rounded-xl justify-center items-center">
              <p className="font-bold">Title</p>
              <p className="text-sm">pppppppppppppppppppppppppppppppppp</p>
              </div>
          </motion.div>

          <motion.div  whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -10 }} transition={{ duration: 1.5 }} className="grid grid-cols-12 gap-11 mb-10">
              <div className="bg-[#00F2EA] col-span-2 bg-opacity-90 shadow-[0_0_7px_#00F2EA] py-4 pl-1 rounded-xl justify-center items-center">
                 <p>08:00-09:00</p>
                 <p>Place</p>
              </div>
              <div className="bg-[#00F2EA] col-span-10 bg-opacity-90 shadow-[0_0_7px_#00F2EA] py-4 pl-4 rounded-xl justify-center items-center ">
                 <p className="font-bold">Title</p>
                 <p className="text-sm">pppppppppppppppppppppppppppppppppp</p>
              </div>
          </motion.div>

          <motion.div  whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -10 }} transition={{ duration: 1.5 }} className="grid grid-cols-12 gap-11 mb-10  ">
              <div className="bg-[#FF0050] col-span-2 bg-opacity-90 shadow-[0_0_7px_#FF0050] py-4 pl-1 rounded-xl justify-center items-center">
              <p>08:00-09:00</p>
              <p>Place</p>
              </div>
              <div className="bg-[#FF0050] col-span-10 bg-opacity-90 shadow-[0_0_7px_#FF0050] py-4 pl-4 rounded-xl justify-center items-center">
              <p className="font-bold">Title</p>
              <p className="text-sm">pppppppppppppppppppppppppppppppppp</p>
              </div>
          </motion.div>


          <motion.div  whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -10 }} transition={{ duration: 1.5 }} className="grid grid-cols-12 gap-11 mb-10">
              <div className="bg-[#00F2EA] col-span-2 bg-opacity-90 shadow-[0_0_7px_#00F2EA] py-4 pl-1 rounded-xl justify-center items-center">
                 <p>08:00-09:00</p>
                 <p>Place</p>
              </div>
              <div className="bg-[#00F2EA] col-span-10 bg-opacity-90 shadow-[0_0_7px_#00F2EA] py-4 pl-4 rounded-xl justify-center items-center ">
                 <p className="font-bold">Title</p>
                 <p className="text-sm">pppppppppppppppppppppppppppppppppp</p>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}