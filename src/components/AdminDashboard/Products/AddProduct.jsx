import React, { useEffect, useState } from "react";
import { Admin } from "../AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import AddProductsStock from "./AddProductsStock";
import { postProduct } from "../../../app/actions/products/postProduct";
import GalleryPhotosRender from "./GalleryPhotosRender";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AddImageProduct from "./Modals/AddImageProduct";
import AddGallery from "./Modals/AddGallery";


const AddProduct = ({setAdminDisplay}) => {
  const navigate = useNavigate();
  const [imageProduct, setImageProduct] = useState(false);
  const [galleryImage, setGalleryImage] = useState(false);
  const dispatch = useDispatch();
  const { categories, sizes, colors } = useSelector(
    (state) => state.categories
  );
  const {allCollections} = useSelector((state) => state.productCollections);

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
    productCollection:[],
    gender:[]
  });
  console.log('soy input', input)
  useEffect(() => {
    setAdminDisplay(true)
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

  function handlerCheckboxCollections(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        productCollection: [e.target.value],
      });
    } else {
      setInput({
        ...input,
        productCollection: [],
      });
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

  async function handleSubmit() {
    console.log('antes del post',input)
    await dispatch(postProduct(input));
    Swal.fire({
      position: 'bottom-end',
      icon: 'info',
      title: 'Product Created!',
      showConfirmButton: false,
      timer: 2200
    });
    navigate("/admin/products");

  }

  return (
    <div>
      <Admin title={"Add Product"}>
        <div className="text-bold flex flex-col justify-center items-center w-full ">
          <div className="border-2 w-[90%] flex flex-col justify-center rounded-xl p-4">
            <div className="flex flex-col p-2">
              <label>Product title</label>
              <input type="text" name="name" onChange={handlerChange} className="text-black rounded-xl text-center"/>
            </div>

            {/* image product */}
            <div className="flex flex-col p-2">
              <label className="items-start flex border-b-2">Image</label>

              {input.image.length > 10 ? (
                <div className="flex justify-center items-center p-2 flex-col gap-2">
                  <img src={input.image} className="w-1/4 h-1/4 flex rounded-xl border-2" />
                  <button
                    onClick={() => {
                      setInput({
                        ...input,
                        image: "",
                      });
                    }}
                    className="border-2 p-2 rounded-xl text-red-500 hover:bg-red-600 hover:text-white hover:duration-500 text-sm">delete image</button>
                </div>
              ) : (
                <div>
                  <AddImageProduct imageProduct={imageProduct} setImageProduct={setImageProduct} setInput={setInput} input={input}/>
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
                className="text-black p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col p-2">
              <label>Price (USD)</label>
              <input type="number" name="price" onChange={handlerChange} 
              className="text-black w-1/2 rounded-xl text-center"/>
            </div>

            {/* checkbox container */}

            <div className="flex p-2 w-full items-stretch justify-between">

              {/* collection checkbox */}

              <div className="flex flex-col w-[30%] items-stretch border-2 rounded-xl p-2">
              <label className="text-center font-bold">Collections</label>
              {allCollections?.map((e) => {
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
                {/* <UploadImageGallery setInput={setInput} input={input} /> */}
                <AddGallery setInput={setInput} input={input} galleryImage={galleryImage} setGalleryImage={setGalleryImage}/>
              </div>
              <div>
                <GalleryPhotosRender setInput={setInput} input={input} />
              </div>
            </div>
            <div className="flex flex-col p-2">
              <label>Count in stock</label>
              <AddProductsStock
                sizes={sizes}
                colors={colors}
                setInput={setInput}
                input={input}
                clean={clean}
                setClean={setClean}
              />
            </div>

            <div className="flex items-center justify-center">
              <button onClick={()=>{
                if(input.name === "") return Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Please enter the product name",
                  showConfirmButton: false,
                  timer: 3000,
                  background: "#000000",
                  color: "#ffffff",
                });
                if(input.image === "") return Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Please enter the product image",
                  showConfirmButton: false,
                  timer: 3000,
                  background: "#000000",
                  color: "#ffffff",
                });
                 if(input.description === "") return Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Please enter the product description",
                  showConfirmButton: false,
                  timer: 3000,
                  background: "#000000",
                  color: "#ffffff",
                });
                if(input.price === "") return Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Please enter the product price",
                  showConfirmButton: false,
                  timer: 3000,
                  background: "#000000",
                  color: "#ffffff",
                });
                if(input.colors.length ===0) return Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Please enter at least 1 color for the product",
                  showConfirmButton: false,
                  timer: 3000,
                  background: "#000000",
                  color: "#ffffff",
                });
                if(input.sizes.length ===0) return Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Please enter at least 1 size for the product",
                  showConfirmButton: false,
                  timer: 3000,
                  background: "#000000",
                  color: "#ffffff",
                });
                handleSubmit()}} className=" border-2 p-2 rounded-xl text-green-500 hover:bg-green-500 hover:text-white hover:duration-500">
                SUBMIT PRODUCT
              </button>
            </div>
          </div>
        </div>
      </Admin>
    </div>
  );
};

export default AddProduct;
