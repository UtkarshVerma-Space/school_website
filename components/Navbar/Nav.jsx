import React from 'react'
import Image from 'next/image'
import style from "./nav.module.css"
import logo from './logo'
export default function Nav() {
  return (

<>
<div className={style.topbar}>

    <li>2024-25 Fest to be Announced</li>

</div>
    <div className={style.navbar}>
        <div className={style.logo}>
            <Image alt="img" className={style.img}
            height={100} width={100}
            src={logo}/>
        </div>
        <ul>
            <li> About </li>
            <li> Contact </li>
            <li> Help Desk </li>

        </ul>
    </div>







  </>


  )
}
