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
  const items = await getItems();

  const product = items.find((item) => convertToPath(item.title) === id);

  return {
      id: id,
      data: product,
  };
}

export function convertToPath(title){
    //return title.toLowerCase().replace(/\s/g, "-")
    return title.toLowerCase().replace(/[\s,;,',./]+/g, '-');
}