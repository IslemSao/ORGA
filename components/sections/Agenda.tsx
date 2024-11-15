'use client'; // Ajoute ceci en haut du fichier pour marquer ce fichier comme composant client

import { motion } from 'framer-motion';

export default function Agenda() {
  return (
    <section className='bg-primary py-20 '  >
      <div className="container px-4">
        <h2 className="text-3xl md:text-6xl font-no-continue text-white text-center">
          Agenda
        </h2>

        <div className="mx-4 md:mx-28 ">
          <h2 className="text-[#FF0050] mt-10 md:mt-20 text-xl md:text-3xl font-bold">
            Tuesday
          </h2>
          <p className="text-md md:text-lg  text-white font-medium pt-3">
            December 10th
          </p>
        </div>

        <div className="mx-4 md:mx-28 mt-10 text-white">
          {/* Premier bloc */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-4 md:gap-6 mb-10"
          >
            <div className="bg-[#00F2EA] bg-opacity-70 shadow-[0_0_7px_#00F2EA] py-4 px-2 rounded-xl flex flex-col ">
              <p className="font-semibold">08:00-09:00</p>
              <p className="text-sm">Place </p>
            </div>
            <div className="bg-[#00F2EA] bg-opacity-70 shadow-[0_0_7px_#00F2EA] py-4 px-4 rounded-xl">
              <p className="font-bold text-lg">Title </p>
              <p className="text-sm mt-1">Description of event .</p>
            </div>
          </motion.div>

          {/* Deuxième bloc */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-4 md:gap-6 mb-10"
          >
            <div className="bg-[#FF0050] bg-opacity-70 shadow-[0_0_7px_#FF0050] py-4 px-2 rounded-xl flex flex-col  ">
              <p className="font-semibold">09:00-10:00</p>
              <p className="text-sm">Place </p>
            </div>
            <div className="bg-[#FF0050] bg-opacity-70 shadow-[0_0_7px_#FF0050] py-4 px-4 rounded-xl">
              <p className="font-bold text-lg">Title </p>
              <p className="text-sm mt-1">Description of event .</p>
            </div>
          </motion.div>

          {/* Troisième bloc */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-4 md:gap-6 mb-10"
          >
            <div className="bg-[#00F2EA] bg-opacity-70 shadow-[0_0_7px_#00F2EA] py-4 px-2 rounded-xl flex flex-col ">
              <p className="font-semibold">10:00-11:00</p>
              <p className="text-sm">Place </p>
            </div>
            <div className="bg-[#00F2EA] bg-opacity-70 shadow-[0_0_7px_#00F2EA] py-4 px-4 rounded-xl">
              <p className="font-bold text-lg">Title 3</p>
              <p className="text-sm mt-1">Description of event .</p>
            </div>
          </motion.div>

      
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-4 md:gap-6 mb-10"
          >
            <div className="bg-[#FF0050] bg-opacity-70 shadow-[0_0_7px_#FF0050] py-4 px-2 rounded-xl flex flex-col  ">
              <p className="font-semibold">09:00-10:00</p>
              <p className="text-sm">Place </p>
            </div>
            <div className="bg-[#FF0050] bg-opacity-70 shadow-[0_0_7px_#FF0050] py-4 px-4 rounded-xl">
              <p className="font-bold text-lg">Title </p>
              <p className="text-sm mt-1">Description of event .</p>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-4 md:gap-6 mb-10"
          >
            <div className="bg-[#00F2EA] bg-opacity-70 shadow-[0_0_7px_#00F2EA] py-4 px-2 rounded-xl flex flex-col ">
              <p className="font-semibold">10:00-11:00</p>
              <p className="text-sm">Place </p>
            </div>
            <div className="bg-[#00F2EA] bg-opacity-70 shadow-[0_0_7px_#00F2EA] py-4 px-4 rounded-xl">
              <p className="font-bold text-lg">Title 3</p>
              <p className="text-sm mt-1">Description of event .</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
