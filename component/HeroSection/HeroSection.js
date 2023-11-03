import style from "./HeroSection.module.css"
import mobiles from "../../Images/mobiles.png"
import arrow from "../../Images/arrow.png"
import Image from "next/image"
import profile from "../../Images/profile.svg"
import line from "../../Images/line.svg"
import playstore from "../../Images/playstore.svg"
import apple from "../../Images/apple.svg"
import avatarGroup from "../../Images/avatarGroup.png"
import ArrowDown from "../../Images/ArrowDown.svg"


export const HeroSection = () => {
  return (
    <div className={style.heroContainer}>
    <div className={style.lefthero}>
        
        <div className={style.leftheroContainer}>
            <div>
                <h1 className={style.leftheroprimary}><span className={style.leftheroprimaryspan}>-</span> The Best Fitness & Workout App</h1>
                <h2 className={style.leftherosecondary}>Your All-in-One</h2>
                <h3 className={style.leftherotirnary}>Fitness App</h3>
                <p className={style.leftheroforth}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it 
                to make a type specimen book. It has survived not only 
                five centuries,
                </p>
            </div>
            <div>
                <div className={style.buttonContainer}>
                    <button className={style.googleButton}>
                    <div>
                        <Image src={playstore} />
                    </div>
                    <div>

                    </div>
                    </button>
                    <button className={style.aapleButton}>
                    <div>
                    <Image src={apple} />
                    </div>
                    <div>

                    </div>
                    </button>
                </div>
                <div className={style.avatarContainer}>
                    <Image src={avatarGroup} width={200} alt="avatar" />
                    <div className={style.user}>
                        <span className={style.five}>5M+</span>
                        <span>Worldwide Users</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className={style.righthero}>
        <Image className={style.mobileimage} src={mobiles} alt="mobile" />

        <div className={style.activityContainer}>
        <div className={style.circleactivity}>
            <Image src={line} alt="line" />

        </div>
        <span>750+ Workout Activity</span></div>
        <div className={style.traineerContainer}>
        <div className={style.circletraineer}>
        <Image src={profile} alt="profile" />
        </div>
        <span>1250+ personal traineers</span></div>
        <div className={style.arrow}>
            <Image src={arrow} alt="arrow"/>
        </div>
    </div>
    <div className={style.arrowDownContainer} >
        <Image src={ArrowDown} alt="arowDown" />
    </div>
    </div>
  )
}
