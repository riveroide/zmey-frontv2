import React, { useEffect, useState } from "react";
import { Admin } from "../AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/actions/products/getProducts";
import Product from "./Product";
import Loader from "../../Loader/Loader";
import { deleteProducts } from "../../../app/actions/products/deleteProducts";

const MainProducts = ({setAdminDisplay}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { products } = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    setAdminDisplay(true)
    const fetchData = async () => {
      setLoading(true);
      try {
        await dispatch(getProducts());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const filtered = products.docs.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sorted = sortProducts(filtered);
    setFilteredProducts(sorted);
  }, [searchQuery, products, sortOrder, sortType]);

  const handleDeleteProduct = async (productId) => {
    try {
      await dispatch(deleteProducts(productId));
      dispatch(getProducts());
    } catch (error) {
      console.log(error);
    }
  };

  const sortProducts = (products) => {
    const sortedProducts = [...products];
    if (sortType === "name") {
      sortedProducts.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (nameA > nameB) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
    } else if (sortType === "price") {
      sortedProducts.sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;
        if (priceA < priceB) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (priceA > priceB) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedProducts;
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSortTypeChange = (event) => {
    setSortType(event.target.value);
  };

  if (loading) {
    return (
      <Admin title={"Loading..."}>
        <Loader />
      </Admin>
    );
  }


  return (
    <Admin title={"Products"}>
      <div className="p-4 w-full flex justify-between items-center">
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-2 rounded-lg p-2"
          />
        </div>
        <div className="ml-4">
          <label htmlFor="sortType" className="mr-2">
            Sort By:
          </label>
          <select
            id="sortType"
            value={sortType}
            onChange={handleSortTypeChange}
            className="border-2 rounded-lg p-2"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className="ml-4">
          <label htmlFor="sortOrder" className="mr-2">
            Sort Order:
          </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="border-2 rounded-lg p-2"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <a href="/admin/addproduct" className="flex justify-end">
          <button className="border-2 rounded-lg p-2 bg-white text-black">
            Create new product
          </button>
        </a>
      </div>
  
      <div className="flex flex-wrap p-4 gap-4 justify-center items-center">
        {filteredProducts.map((product) => (
          <Product
            product={product}
            key={product.id}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </Admin>
  );
        }

 export default MainProducts; 