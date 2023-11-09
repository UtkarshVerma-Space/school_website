import React from "react";
import style from "./menu.module.css";
import Image from "next/image";

import about from "./assets/about.png";
import contact from "./assets/contact.png";
import helpdesk from "./assets/helpdesk.png";
import studenlogin from "./assets/student.png";

export default function Menu(props) {
  return (
    <>
    <div className={style.menubox}>
      <div className={style.container}>
        <div className={style.menulist}>
          <ul>
            <li>
              <Image
                alt="img"
                className={style.img}
                height={30}
                width={30}
                src={about}
              />
              About
            </li>


            <li>
            <Image
            alt="img"
            className={style.img}
            height={30}
            width={30}
            src={contact}
          />
              Contact</li>


            <li>
              <Image
            alt="img"
            className={style.img}
            height={30}
            width={30}
            src={helpdesk}
          />
              Help Desk</li>


            <li>
            <Image
            alt="img"
            className={style.img}
            height={30}
            width={30}
            src={studenlogin}
          />
              Student Login</li>
          </ul>

      <h1 style={{color : "grey"}} onClick={props.close}>Close Menu</h1>
        </div>
      </div>
    </div>
   
            </>
  );
}
