import Image from 'next/image'
import styles from './page.module.css'
import { HeroSection } from '@/component/HeroSection/HeroSection'
import { Features } from '@/component/Features/Features'

export default function Home() {
  return (
    <main className={styles.main}>
        <HeroSection/>
        <Features/>
    </main>
  )
}
