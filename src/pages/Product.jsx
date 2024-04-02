import React, { useContext } from 'react';
import { MyContext } from '../components/contex';
import Card from '../components/categorycard/Itemcard';
import { useLocation } from 'react-router-dom';

function Product(props) {
  const {searchVal = ""} = props;
  const { Items } = useContext(MyContext);
  const location = useLocation();
  const { pathname } = location;

  const CATEGORY_NAMES = {
    Furniture: "furniture",
    "Electronic Item": "electronic",
    "Sports Related Product": "sports",
    "Home Appliances": "appliances",
    "Clothing": "clothing",
    "Beauty Products": "beauty",
    "Home Decor": "homedecor",
    "Outdoor Gear": "outdoorgear",
    "Pet Supplies": "petsupplie"
  };
  

  const filterCategories = () => {
    console.log(searchVal)
    const filteredCategories = Items.filter((item) => CATEGORY_NAMES[item.category] === pathname.slice(1));
    return searchVal ? filteredCategories.filter((item)=> item.name.toLowerCase().includes(searchVal.toLowerCase())) : filteredCategories;
  };

  return (
    <div className='container mt-3'>
      <div className="row">
        {
          filterCategories()?.length ?
        filterCategories().map((category, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Card {...category} />
          </div>
        )) 
        : <p>No Results Found</p>
        }
      </div>
    </div>
  );
}

export default Product;
