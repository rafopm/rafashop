'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categoriesSlice';

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
      <div className="container-fluid pt-2">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className=" pr-3">Categorias</span></h2>
        <div className="d-flex justify-content-around flex-wrap  mx-xl-5">
          {categories.map((category, key) => (
            <div className="cat-item d-flex align-items-center mb-4 bg-white p-3" key={key}>
              <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                <img className="img-fluid" src={`img/cat-${key + 1}.jpg`} alt="" />
              </div>
              <div className="flex-fill pl-3">
                <h6 style={{ width: '160px', textAlign:"center"}}>{category}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default CategoryList;
