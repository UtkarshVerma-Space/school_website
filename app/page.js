"use client"
import Image from 'next/image'
import Nav from '@/components/Navbar/Nav'
import Carousel from '@/components/Carousel/Carousel'
import Hero from '@/components/Hero/Hero'
import Footer from '@/components/Footer/Footer'
export default function Home() {
  return (
   <>
<Nav/>

<Carousel/>

<Hero/>

<Footer/>

   </>
  )
}
