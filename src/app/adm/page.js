'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/loginSlice';
import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Styles from '../styles/Adm.module.css'
import Product from '../components/admin/Product'
import Category from '../components/admin/Category'
import Brand from '../components/admin/Brand'
import Order from '../components/buyer/Order'
import Favorite from '../components/buyer/Favorite'
import Image from 'next/image';

const adminOptions = [
  {
    id: 1,
    name: 'Administrar Productos',
    icon: '/img/icons/product.png',
    option: <Product /> //componente a renderizar 
  },
  {
    id: 2,
    name: 'Administrar Categorias',
    icon: '/img/icons/category.png',
    option: <Category /> //componente a renderizar 
  },
  {
    id: 3,
    name: 'Administrar Marcas',
    icon: '/img/icons/brand.png',
    option: <Brand /> //componente a renderizar 
  },
];

const buyerOptions = [
  {
    id: 1,
    name: 'Ver Pedidos',
    icon: 'img/icons/order.png',
    option: <Order /> //componente a renderizar 
  },
  {
    id: 2,
    name: 'Ver Favoritos',
    icon: 'img/icons/heart.png',
    option: <Favorite /> 
  },
];

const Adm = () => {
  const router = useRouter();
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (user === undefined) {
      setIsLoading(true);
      return;
    }
    setIsLoading(false);

    const timeout = setTimeout(() => {
      if (!user || !user.rol) {
        router.push('/');
      }
    }, 5000); // Redirigir a la raíz después de 5 segundos si el usuario no tiene un valor válido

    return () => clearTimeout(timeout);
  }, [user, router]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Mostrar indicador de carga mientras se obtienen los datos del usuario
  }

  if (user === undefined) {
    return null; // Evitar renderizado cuando user es undefined
  }
  const options = user ? (user.rol === 'admin' ? adminOptions : buyerOptions) : [];

  return (
    <div>
      <div className={Styles.cardContainer}>
        {options.map((option) => (
          <div
            key={option.id}
            className={`${Styles.card} ${selectedOption === option ? Styles.selected : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            
            <Image 
            src={option.icon}
            alt={option.name}
            width='200'
            height='200'
            
            />
            <h2 className={Styles.name}>{option.name}</h2>
          </div>
        ))}
      </div>
      {selectedOption && selectedOption.option && (
        <div>
          {selectedOption.option}
        </div>
      )}
    </div>
  );
};

export default Adm;