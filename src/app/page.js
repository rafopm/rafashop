import Image from 'next/image'
import Brand from './components/Brand'
import NavBar from './components/NavBar'
import TopBar from './components/TopBar'
import styles from './page.module.css'

export default function Home() {
  return (
    <main >
      <div >
        <TopBar />
        <Brand />
        <NavBar />
      </div>
    </main>
  )
}
