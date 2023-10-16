import Image from 'next/image'
import Brand from './components/Brand'
import CarouselHome from './components/Carousel'
import CategoryList from './components/CategoryList'
import Featured from './components/Featured'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import TopBar from './components/TopBar'
import styles from './page.module.css'

export default function Home() {
  return (
    <main >
      <div style={{backgroundColor:'#F5F5F5'}}>

        <CarouselHome />
        <Featured />
        <CategoryList />
        <ProductList />

      </div>
    </main>
  )
}
