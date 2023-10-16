import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './redux/provider';
import Footer from './components/Footer';
import Header from './components/Header';
import '@fortawesome/fontawesome-svg-core/styles.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce',
  description: 'RafaShop Ecommerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
