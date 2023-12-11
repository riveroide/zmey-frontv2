import React, { useEffect, useState } from "react";
import { Admin } from "../AdminSidebar";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import GalleryPhotosRender from "./GalleryPhotosRender";
import { useNavigate } from "react-router-dom";
import { modifyProduct } from "../../../app/actions/products/putProduct";
import {
  getCategories,
  getColors,
  getSizes,
} from "../../../app/actions/categories/getCategories";
import { getProductsCollection } from "../../../app/actions/productsCollection/getProductsCollection";
import Swal from "sweetalert2";
import AddImageProduct from "./Modals/AddImageProduct";
import AddGallery from "./Modals/AddGallery";
import EditProductsStock from "./EditProductsStock";


const EditProduct = ({ oneProduct, loading, setLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, sizes, colors } = useSelector(
    (state) => state.categories
  );
  const { allCollections } = useSelector((state) => state.productCollections);
  const [imageProduct, setImageProduct] = useState(false);
  const [galleryImage, setGalleryImage] = useState(false);
  const [clean, setClean] = useState("");
  const [input, setInput] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    categories: [],
    gallery: [],
    stock: [],
    colors: [], //cargar solo los colores disponibles para los filtros
    sizes: [], // cargar solo los talles disponibles para los filtros
    productCollection: [],
    gender: [],
  });
  console.log('soy input edit', input)
  
  function handlerChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handlerCheckbox(e) {
    const categoryName = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setInput((prevInput) => ({
        ...prevInput,
        categories: [...prevInput.categories, categoryName],
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        categories: prevInput.categories.filter(
          (category) => category !== categoryName
        ),
      }));
    }
  }

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProductsCollection());
    dispatch(getColors());
    dispatch(getSizes());
    setInput(oneProduct);
    setLoading(false);
  }, [oneProduct, dispatch]);

  useEffect(() => {
    const sizescontainer = [];
    input.stock.map((f) => {
      return f.sizes.map((d) => {
        if (!sizescontainer.includes(d.size)) sizescontainer.push(d.size);
      });
    });
    setInput({
      ...input,
      colors: input.stock.map((c) => c.color),
      sizes: sizescontainer,
    });
  }, [input.stock, clean]);

  function handlerCheckboxCollections(e) {
    const collectionName = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setInput((prevInput) => ({
        ...prevInput,
        productCollection: [...prevInput.productCollection, collectionName],
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        productCollection: prevInput.productCollection.filter(
          (collection) => collection !== collectionName
        ),
      }));
    }
  }

  function handlerCheckboxGender(e) {
    const genderName = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setInput((prevInput) => ({
        ...prevInput,
        gender: [...prevInput.gender, genderName],
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        gender: prevInput.gender.filter((gender) => gender !== genderName),
      }));
    }
  }

  function handleSubmit() {
    dispatch(modifyProduct(input));
    Swal.fire({
      position: "bottom-end",
      icon: "info",
      title: "Product modified!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/admin/products");
  }

  if (loading) {
    return (
      <Admin title={"Loading..."}>
        <Loader />
      </Admin>
    );
  } else {
    return (
      <div>
        <Admin
          title={`Edit Product: ${oneProduct.name} (id: ${oneProduct.id})`}
        >
          <div className="text-bold flex flex-col justify-center items-center w-full">
            <div>
              <Link to={"/admin/products"}> GO BACK</Link>
            </div>
            <div className="border-2 w-[90%] flex flex-col justify-center rounded-xl p-4">
              <div className="flex flex-col p-2">
                <label>Product title</label>
                <input
                  type="text"
                  name="name"
                  onChange={handlerChange}
                  className="text-black rounded-xl text-center"
                  value={input.name}
                />
              </div>
              <div className="flex flex-col p-2">
                <label className="items-start flex border-b-2">Image</label>

                {input.image.length > 10 ? (
                  <div className="flex justify-center items-center p-2 flex-col">
                    <img
                      src={input.image}
                      className="w-1/4 h-1/4 flex rounded-xl border-2"
                    />
                    <button
                      onClick={() => {
                        setInput({
                          ...input,
                          image: "",
                        });
                      }}
                      className="border-2 p-2 rounded-xl text-red-500 hover:bg-red-600 hover:text-white hover:duration-500 text-sm"
                    >
                      delete image
                    </button>
                  </div>
                ) : (
                  <div>
                    <AddImageProduct
                      imageProduct={imageProduct}
                      setImageProduct={setImageProduct}
                      setInput={setInput}
                      input={input}
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col p-2">
                <label>Description</label>
                <textarea
                  rows="6"
                  cols=""
                  name="description"
                  onChange={handlerChange}
                  value={input.description}
                  className="text-black p-2 rounded-xl"
                />
              </div>
              <div className="flex flex-col p-2">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  onChange={handlerChange}
                  value={input.price}
                  className="text-black w-1/2 rounded-xl text-center"
                />
              </div>

              {/* checkbox container */}

              <div className="flex p-2 w-full items-stretch justify-between">
                {/* collection checkbox */}

                <div className="flex flex-col w-[30%] items-stretch border-2 rounded-xl p-2">
                  <label className="text-center font-bold">Collections</label>
                  {allCollections?.map((e) => {
                    const { productCollection } = e;

                    const isChecked =
                      input.productCollection.includes(productCollection);
                    return (
                      <div
                        className="flex justify-between w-full border-b-2"
                        key={e.id}
                      >
                        {e.productCollection}
                        <input
                          type="checkbox"
                          name={e.productCollection}
                          value={e.productCollection}
                          checked={isChecked}
                          onChange={handlerCheckboxCollections}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* categories checkbox */}
                <div className="flex flex-col w-[30%] items-stretch border-2 rounded-xl p-2">
                  <label className="text-center font-bold">Categories</label>
                  {categories?.map((e) => {
                    const { name } = e;
                    const isChecked = input.categories.includes(name);
                    return (
                      <div
                        className="flex justify-between w-full border-b-2"
                        key={e.id}
                      >
                        {e.name}
                        <input
                          type="checkbox"
                          name={e.name}
                          value={e.name}
                          onChange={handlerCheckbox}
                          checked={isChecked}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* gender checkbox */}
                <div className="flex flex-col w-[30%] items-stretch border-2 rounded-xl p-2">
                  <label className="text-center font-bold">Gender</label>
                  <div className="flex justify-between w-full border-b-2">
                    Female
                    <input
                      type="checkbox"
                      name="female"
                      value="female"
                      checked={input.gender.includes("female")}
                      onChange={handlerCheckboxGender}
                    />
                  </div>
                  <div className="flex justify-between w-full border-b-2">
                    Male
                    <input
                      type="checkbox"
                      name="male"
                      value="male"
                      checked={input.gender.includes("male")}
                      onChange={handlerCheckboxGender}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-2">
                <label>Gallery Photos</label>
                <div>
                  {/* <UploadImageGallery setInput={setInput} input={input}/> */}
                  <AddGallery
                    setInput={setInput}
                    input={input}
                    galleryImage={galleryImage}
                    setGalleryImage={setGalleryImage}
                  />
                </div>
                <div>
                  <GalleryPhotosRender setInput={setInput} input={input} />
                </div>
              </div>
              <div className="flex flex-col p-2">
                <label>Count in stock</label>
                <EditProductsStock
                  sizes={sizes}
                  colors={colors}
                  setInput={setInput}
                  input={input}
                  clean={clean}
                  setClean={setClean}
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={handleSubmit}
                  className=" border-2 p-2 rounded-xl"
                >
                  SUBMIT PRODUCT
                </button>
              </div>
            </div>
          </div>
        </Admin>
      </div>
    );
  }
};

export default EditProduct;
