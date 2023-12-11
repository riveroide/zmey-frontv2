import axios from "../../axiosConfig";
import {
  getAllProducts,
  getCollectionProducts,
  getOneProduct,
  setAllProducts,
  setCurrentFemaleCategories,
  setCurrentMaleCategories,
} from "../../reducers/productSlice";

export const getProducts =
  (
    name = "",
    category = "All",
    size = "All",
    color = "All",
    gender = "All",
    page = 1
  ) =>
  async (dispatch) => {
    try {
      await axios
        .get(
          `/products?${name ? "name=" + name + "&" : ""}${
            gender ? "gender=" + gender + "&" : ""
          }${category && "categories=" + category + "&"}${
            size && "size=" + size + "&"
          }${color && "color=" + color + "&"}${
            page ? "page=" + parseInt(page) : ""
          }`
        )
        .then((res) => {
          dispatch(getAllProducts(res.data));
        });
    } catch (error) {
      return error;
    }
  };

export const getAllTheProducts = () => async (dispatch) => {
  try {
    const products = await axios.get("/products");
    dispatch(setAllProducts(products.data.docs));
  } catch (error) {
    console.log(error);
  }
};

export const getProductByID = (ID) => async (dispatch) => {
  const product = await axios.get(`/products/${ID}`);
  product.data.sizes?.sort((a, b) => {
    const sizesOrder = ["xs", "s", "m", "l", "xl", "xxl"];
    const indexA = sizesOrder.indexOf(a);
    const indexB = sizesOrder.indexOf(b);
    return indexA - indexB;
  });
  dispatch(getOneProduct(product.data));
};

export const getProductByCollection =
  (collection, page = 1) =>
  async (dispatch) => {
    const products = await axios.get(
      `/products?collection=${collection}&page=${page}`
    );
    dispatch(getCollectionProducts(products.data));
  };

export const getMaleCategories = () => async (dispatch) => {
  const categoriesNames = await axios.get(`/products/gendername/male`);
  dispatch(setCurrentMaleCategories(categoriesNames.data));
};

export const getFemaleCategories = () => async (dispatch) => {
  const categoriesNames = await axios.get(`/products/gendername/female`);
  dispatch(setCurrentFemaleCategories(categoriesNames.data));
};
