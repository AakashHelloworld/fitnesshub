import Image from "next/image"
import logo from "../../Images/logo.png"
import style from "./Navbar.module.css"
export const Navbar = () => {
  return (
    <nav className={style.navbar}>
        <div className={style.logoContiner}>
        <Image src={logo}  alt="logo" width={200}/>
        </div>
        <div className={style.textContainer} >
            <ul className={style.linkContainer}>
              <li className={style.link}>Home</li>
              <li className={style.link}>Features</li>
              <li className={style.link}>How it works</li>
              <li className={style.link}>About</li>
              <li className={style.link}>Testimonial</li>
              <li className={style.link}>Blog</li>
            </ul>
            <button className={style.navButton}>Get the App</button>
        </div>
    </nav>
  )
}
