import { fetchProducts,getItems  } from "../redux/productsSlice";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById, selectProductById } from '../redux/productsSlice';


export async function getPathFromIds() {
    const items = await fetchProducts();
    const ids = items.map((item) => {
        console.log(ids);
      return {
        params: {
          id: convertToPath(item.title),
        },
      };
    });
    return ids;
}

export async function getItemsData(id){
  const items = await fetchProducts();
console.log("items",items)
  const product = items.find((item) => convertToPath(item.nombre) === id);

  return {
      id: id,
      data: product,
  };
}

export function convertToPath(nombre){
  console.log("nombre",nombre)
    //return title.toLowerCase().replace(/\s/g, "-")
    return nombre.toLowerCase().replace(/[\s,;,',./]+/g, '-');
}