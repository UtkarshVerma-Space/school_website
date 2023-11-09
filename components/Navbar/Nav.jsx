import React from "react";
import Image from "next/image";
import style from "./nav.module.css";
import logo from "./logo";
import menu from "./assets/menu.png";
import Menu from "./Menu/Menu";
import { useState } from "react";
export default function Nav() {



function Blure() {
  return <div onClick={CloseModal}  className={style.blur}></div>
}
  
const [showmodal, setShowmodal] = useState(false);

function Icon() {
  return alert("true")
}

function OpenModal() {
  return setShowmodal(true);
}
function CloseModal() {
  return setShowmodal(false);
}



  return (
    <>
      <div className={style.topbar}>
        <li>2024-25 Fest to be Announced</li>
      </div>
      <div className={style.navbar}>
   


        <div className={style.navul}>
          <ul>
            <li> About </li>
            <li> Contact </li>
            <li> Help Desk </li>
          </ul>
        </div>

        <div className={style.logo}>
          <Image
            alt="img"
            className={style.img}
            height={100}
            width={100}
            src={logo}
          />
        </div>


        <div className={style.menu}>
        <Image
          onClick={OpenModal}
            alt="img"
            className={style.img}
            height={30}
            width={30}
            src={menu}
          />
        </div>
      </div>



<div className={style.popupboxmenu}>


{showmodal && <Menu close={CloseModal}/>}
{showmodal && <Blure/>}

</div>



    </>
  );
}
