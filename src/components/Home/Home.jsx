import React, { useEffect, useState } from "react";
import CarouselPhotos from "./CarouselPhotos";
import ColectionGallery from "./ColectionGallery";
import InstagramPost from "./InstagramPost";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import {
  getAllTheProducts,
  getProducts,
} from "../../app/actions/products/getProducts";
import NewArrivals from "./NewArrivals";
import { getProductsCollection } from "../../app/actions/productsCollection/getProductsCollection";
import { getCategories } from "../../app/actions/categories/getCategories";
import NewsletterPopUp from "./NewsletterPopUp";
import axios from "axios";
import CountryPopUp from "./CountryPopUp";
import NewsletterButton from "./NewsletterButton";

const Home = ({ setAdminDisplay }) => {
  const { t } = useTranslation("home");
  const dispatch = useDispatch("");
  const { allProducts: products } = useSelector((state) => state.products);
  const { allCollections } = useSelector((state) => state.productCollections);
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [newsletterPopUp, setNewsletterPopUp] = useState(false);
  const [country, setCountry] = useState("");
  // Obtener primeros 2 femeninos
  const womensProducts = allProducts?.filter((p) => p.gender[0] === "female");
  const firstWomensProducts = womensProducts?.slice(0, 2);

  // Obtener primer masculino
  const mensProducts = allProducts.filter((p) => p.gender[0] === "male");
  const firstMensProduct = mensProducts[0];

  // Armar array final con solo esos 3
  const productsToShow = [firstMensProduct, ...firstWomensProducts];

  //map the collections name, but only get the last collection in the array
  let collectionName
  if(Array.isArray(allCollections)){
   collectionName = allCollections
    ?.slice(allCollections.length - 1)
    .map((collection) => {
      return collection.productCollection;
    });
  }
  //find in allProducts all the products that are in the last collection and get their images selecting random 3
  let collectionProducts
  if(Array.isArray(allProducts)){
   collectionProducts = allProducts
    ?.filter((product) => {
      return product.productCollection[0] === collectionName[0];
    })
    ?.slice(0, 3)
    .map((product) => {
      return { image: product.image, id: product.id };
    });

    }

  //knowing all the categories avaliables, save into a array one product with image, name and id of each category
  const categoriesGallery = allProducts?.map((product) => {
    return {
      name: product.name,
      image: product.image,
      categories: product.categories[0],
      id: product.id,
      gender: product.gender[0],
    };
  });
  // useEffect(() => {

  // }, [currentUser])

  useEffect(() => {
    const fetchData = async () => {
      setAdminDisplay(false);
      setLoading(true);
      try {
        await dispatch(getProducts());
        await dispatch(getAllTheProducts());
        await dispatch(getCategories());
        await dispatch(getProductsCollection());
        setAllProducts(products);
      } catch (error) {
        // Handle any errors that occur during the async operation
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    axios
      .get("https://ipinfo.io/?token=1b7e1fcbc43d6a")
      .then((res) => setCountry(res.data.country))
      .catch((error) => console.log(error))
      .finally(() => {
        //validate if localstorage has the popup key else
        if (localStorage.getItem("popup") === null) {
          setPopUp(true);
        }
      });
  }, [dispatch]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg-coal">
      <CarouselPhotos categoriesGallery={categoriesGallery} />
      <NewArrivals
        productsToShow={productsToShow}
        newArrivalsT={t("newArrivals")}
        shopNowT={t("shopNow")}
      />
      <ColectionGallery
        collectionName={collectionName}
        collectionProducts={collectionProducts}
        seeMore={t("seeMore")}
        theNewCollection={t("theNewCollection")}
        collectionMessage1={t("collectionMessage1")}
        collectionMessage2={t("collectionMessage2")}
      />
      {/* <InstagramPost followUs={t("followUs")} /> */}
      <CountryPopUp
        popUp={popUp}
        setPopUp={setPopUp}
        cancelButton={t("cancelButton")}
        mainText1={t("popupMainText1")}
        mainText2={t("popupMainText2")}
        title={t("popupTitle")}
        alert={t("newsletterAlert")}
        placeholder={t("subscribeInput")}
        subscribeButton={t("subscribeButton")}
        country={country}
      />
      <NewsletterPopUp
        newsletterPopUp={newsletterPopUp}
        setNewsletterPopUp={setNewsletterPopUp}
      />
      <NewsletterButton setNewsletterPopUp={setNewsletterPopUp} />
    </div>
  );
};

export default Home;
