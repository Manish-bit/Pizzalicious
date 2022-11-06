import css from '../styles/Footer.module.css'
import {UilFacebook, UilGithub, UilInstagram} from "@iconscout/react-unicons"
import Image from 'next/image'
import Logo from '../assets/Logo.png'
export default function Footer(){
    return(
       <div className={css.container}>
        <span>&copy; ALL RIGHTS RESERVED </span>
        <div className={css.social}>
            <UilFacebook size = {45}/>
            <UilGithub size = {45}/>
            <UilInstagram size = {45}/>
        </div>

        {/* Logo side */}
        <div className={css.logo}>
                <Image src={Logo} alt="" height={50} width={50}/>
                <span>Pizzalicious</span>
            </div>
       </div>
    )
}