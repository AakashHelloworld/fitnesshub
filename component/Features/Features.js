import { Bar } from "../Bar/Bar"
import style from './Features.module.css'
import vectorone from "../../Images/Vector1.svg"
import vectortwo from "../../Images/Vector2.svg"
import Image from "next/image"
import iconone from "../../Images/icons1.png"
import icontwo from "../../Images/icons2.svg"
import iconthree from "../../Images/icons3.svg"
import iconfourth from "../../Images/icons4.svg"




export const Features = () => {
  return (
    <div className={style.features}>
    {/* APP */}
        <div className={style.appContainer}>
                <div className={style.textContainer}>
                    <h1 className={style.textappprimary}>Download Our</h1>
                    <h2 className={style.textappsecondary}>Fitness App <span className={style.textappsecondaryspan}>Today!</span></h2>
                    <p className={style.textappp}>Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took</p>
                    <p className={style.textappp}>Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took</p>


                    <div className={style.textappbottom}>
                        <div className={style.textappbottomdiv}>
                            <h5 className={style.textappbottomdivh5}>5 Million+</h5>
                            <p className={style.textappbottomdivp}>Worldwide Active Users</p>
                        </div>
                        <div className={style.textappbottomdiv}>
                            <h5 className={style.textappbottomdivh5}>1250+</h5>
                            <p className={style.textappbottomdivp}>Trainer</p>
                        </div>
                        <div className={style.textappbottomdivnoborder}>
                            <h5 className={style.textappbottomdivh5}>750+</h5>
                            <p className={style.textappbottomdivp}>Workout</p>
                        </div>

                    </div>
                </div>

                <div className={style.appimage}>
                        <div className={style.appimagediv}>
                                <div className={style.appimagedivdiv}>
                                    <h3 className={style.appimagedivdivh3}>For ios</h3>
                                    <p className={style.appimagedivdivp}>ios 13.6 +</p>
                                </div>
                                <button className={style.appimagedivbutton}>Download App</button>
                                <div className={style.appimagedivdivImage}>
                                    <Image src={vectorone} />
                                </div>
                        </div>
                        <div>
                        <div className={style.appimagedivdiv}>
                                    <h3 className={style.appimagedivdivh3}>For ios</h3>
                                    <p className={style.appimagedivdivp}>ios 13.6 +</p>
                                </div>
                                <button className={style.appimagedivbutton}>Download App</button>
                                <div className={style.appimagedivdivImage}>
                                    <Image src={vectortwo} />
                                </div>
                        </div>

                </div>

        </div>
{/* Bar */}
        <Bar />
{/* Benefits */}
        <div className={style.benefits}>
                <div className={style.benefitsText}>
                        <h3 className={style.benefitsTexth3}><span className={style.benefitsTexth3span}>-</span> Benefits of Fitness App</h3>
                        <h4 className={style.benefitsTexth4}>Exclusive Benefits</h4>
                        <h5 className={style.benefitsTexth5}>of Fitness App</h5>
                </div>

                <div className={style.benefitsSecondText}>
                    <p className={style.benefitsSecondTextp}>
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took
                    </p>
                </div>

        </div>
{/* features */}
        <div className={style.Allfeatures}>
            <div className={style.featureSub}>
                <div className={style.featureSubImageContainer}>
                    <div className={style.circle}><Image src={iconone} width={30} alt="icon" /></div>
                </div>
                <div>
                    <h3 className={style.featureSubh3}>Time Efficiency</h3>
                    <p className={style.featureSubp}>Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took</p>
                </div> 
            </div>
            <div className={style.featureSub}>
                <div className={style.featureSubImageContainer}>
                    <div className={style.circle}>
                        <Image src={icontwo} width={30} alt="icon" />
                    </div>
                </div>
                <div>
                    <h3 className={style.featureSubh3}>Time Efficiency</h3>
                    <p className={style.featureSubp}>Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took</p>
                </div> 
            </div>
            <div className={style.featureSub}>
                <div className={style.featureSubImageContainer}>
                    <div className={style.circle}>
                        <Image src={iconthree} width={30} alt="icon" />
                    </div>
                </div>
                <div>
                    <h3 className={style.featureSubh3}>Time Efficiency</h3>
                    <p className={style.featureSubp}>Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took</p>
                </div> 
            </div>
            <div className={style.featureSub}>
                <div className={style.featureSubImageContainer}>
                    <div className={style.circle}>
                        <Image src={iconfourth} width={30} alt="icon" />
                    </div>
                </div>
                <div>
                    <h3 className={style.featureSubh3}>Time Efficiency</h3>
                    <p className={style.featureSubp}>Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took</p>
                </div> 
            </div>
            
        </div>
    </div>
  )
}
