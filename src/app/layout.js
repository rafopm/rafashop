import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './redux/provider';
import Footer from './components/Footer';
import Header from './components/Header';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';
require('dotenv').config();
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce',
  description: 'RafaShop Ecommerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <Head>
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB5a_j_VkwtGD42H1ZoTpg9g30Wx2m8Y2I&libraries=places`} // Reemplaza TU_API_KEY con tu clave de API de Google Maps
            async
            defer
          ></script>
        </Head>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
