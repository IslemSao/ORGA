import Link from 'next/link'
import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className=' text-white text-xl rounded-2xl font-bold flex justify-between items-center gap-16 px-16 py-3 shadow-custom-spread  bg-white backdrop-blur-md bg-opacity-10 fixed mt-28 '>
        <Link href="#">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#about">Agenda</Link>
        <Link href="#speakers">Speakers</Link>
        <Link href="#FAQ">FAQ</Link>
        <Link href="#contact">contact</Link>

    </div>
  )
}

export default Navbar