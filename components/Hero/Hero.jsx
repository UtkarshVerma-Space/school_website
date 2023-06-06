
import React from 'react'
import Image from 'next/image'
import style from "./hero.module.css"
import OurStd from './components/OurStd'
export default function Hero() {
  return (

<>

    <div className={style.hero}>

        {/* Box1 */}
<div className={style.box1}>
<h1>Welcome To <span>VELLORA WORLD SCHOOL</span></h1>

<p>Congratulations on release the third edition of the Narayana Public School Magazine. The school did
wonderfully well in the boards result in the previous session. Hopes are high. The examinees are going to
make the school proud yet again. Apart from the boards the academic year has been a success. Students,
parents and the teachers deserve the applause.</p>
</div>

{/* box2 */}
<div className={style.box2}>
<Image height={600} width={600} src="https://mcmscache.epapr.in/post_images/website_350/post_29811255/full.jpg"/>
</div>




    </div>
    
<OurStd/>

</>
)
}
