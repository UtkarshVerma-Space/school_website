import style from "./outstd.module.css"
import Image from "next/image"
export default function OurStd() {

const Card =(props)=>{
    return(

<div
style={{ backgroundImage: `url(${props.imglink})` }}
className={style.box}>
 
    <span>{props.title}</span>
</div>
    )
}


const Principal=()=>{
return(
<>
<div className={style.quote}>

    <p className={style.quotes}>"Indeed, one of the most impressive forward-thinking schools that I have ever seen. Wish I had an opportunity to go back to school, this would definitely be my first choice. Your students will excel & I wish them and you all the very best."</p>
    <p className={style.author} >- Mr <span> Ajay </span> Mishra [ Principal  ]</p>
</div>
</>
)
}


const Socmedia=()=>{
        return(
            <div className={style.contact}>

  <h1> Contact Us</h1>
    <div className={style.socialmedia}>


        <img src="https://cdn-icons-png.flaticon.com/128/455/455705.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" alt="" />
    </div>
<p className={style.address}> Awas Vikas Colony Gonda, UttarPradesh ,271001
</p>


<iframe className={style.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113930.72238030117!2d80.85028259726563!3d26.829292899999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be324a37eb4af%3A0x36ea27e2fc49de6!2sDelhi%20Public%20School!5e0!3m2!1sen!2sin!4v1686032928961!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        )
}

    return (


        <div className={style.Curriculum}>

            <div className={style.Title}>
                Nurturing Future <span>  Leaders Today</span>
            </div>
        <div className={style.boxes}>
            
            <Card imglink="https://images.unsplash.com/photo-1616701318247-e87eb43e79e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGlvbiUyMGhhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" title="Academics" />

            <Card imglink="https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?cs=srgb&dl=pexels-wallace-chuck-2834917.jpg&fm=jpg" title="Sports" />

            <Card imglink="https://mybestguide.com/wp-content/uploads/2021/06/Best-Boarding-Schools-in-India-boarding-room.jpg" title="Boarding" />


            <Card imglink="https://jmeducationgroup.com/wp-content/uploads/2021/04/country-uk-boardingschool-body-image-1.jpg" title="Footprints" />

            </div>


       



<Principal/>


<Socmedia/>

        </div>




    )
}
