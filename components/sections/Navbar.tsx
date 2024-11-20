import Link from 'next/link'
import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className=' text-white px-4 py-2 bg-slate-400 fixed'>
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