import React from 'react'
import style from "./Bar.module.css"
export const Bar = () => {
  return (
    <div className={style.barconatiner}>
    <div className={style.BlueBar}>
        <ul className={style.list}>
            <li className={style.listItem}>
                Yoga
            </li>
            <li className={style.listItem}>
                GYM
            </li>
            <li className={style.listItem}>
                Swimming
            </li>
            <li className={style.listItem}>
                Runing
            </li>
            <li className={style.listItem}>
            Gosiphing
            </li>
            <li className={style.listItem}>
                cycling
            </li>
        </ul>
    </div>

    <div className={style.blackBar}>
            
    </div>

</div>
  )
}
