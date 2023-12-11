import React, { useEffect, useState } from "react";
import CarouselDetails from "../components/Details/CarouselDetails";
import ProductDetails from "../components/Details/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID } from "../app/actions/products/getProducts";
import { useParams } from "react-router-dom";
import BuyButton from "../components/BuyButton";
import AddButton from "../components/Details/AddButton";
import Swal from "sweetalert2";
import { addProductFunction } from "../app/actions/cart/addProductA";
import Loader from "../components/Loader/Loader";
import { useTranslation } from "react-i18next";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t } = useTranslation("details");

  const { currentUser } = useSelector((state) => state.userInfo);
  const { oneProduct } = useSelector((state) => state.products);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [code, setCode] = useState("");
  const [items, setItems] = useState({
    name: "",
    color: "",
    size: "",
    image: "",
    price: "",
    quantity: 1,
    maxQuantity: 0,
  });

  let maxQuantity;

  Array.isArray(oneProduct.stock) &&
    oneProduct?.stock?.map((stock) => {
      if (stock.color === selectedColor) {
        return stock.sizes.map((sizes) => {
          if (sizes.size === selectedSize) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            return (maxQuantity = sizes.quantity);
          }
        });
      }
    });

  const [loading, setLoading] = useState(true);

  const handleColor = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleSize = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleCart = () => {
    if (!selectedSize || !selectedColor) {
      Swal.fire({
        position: "center",
        backdrop: false,
        icon: "warning",
        title: t("alertNoSelected"),
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      dispatch(addProductFunction(items));
      Swal.fire({
        position: "top-right",
        backdrop: false,
        heightAuto: false,
        icon: "success",
        title: t("alertItemAdded"),
        showConfirmButton: false,
        width: 300,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getProductByID(id)).then(() => setLoading(false));
  }, [dispatch, id]);

  useEffect(() => {
    setItems({
      ...items,
      name: oneProduct?.name,
      color: selectedColor,
      size: selectedSize,
      image: oneProduct?.image,
      price: oneProduct?.price,
      maxQuantity: maxQuantity,
    });
  }, [dispatch, id, selectedColor, selectedSize]);

  useEffect(() => {
    setSelectedSize("");
  }, [selectedColor]);

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col lg:flex-row w-full min-h-full lg:min-h-screen pt-[64px] md:justify-around">
      <CarouselDetails
        image={oneProduct?.image}
        gallery={oneProduct?.gallery}
      />
      <div className="lg:max-w-[40%] flex flex-col gap-2">
        <ProductDetails
          name={oneProduct?.name}
          handleColor={handleColor}
          handleSize={handleSize}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          description={oneProduct?.description}
          colors={oneProduct?.colors}
          sizes={oneProduct?.sizes}
          stock={oneProduct?.stock}
          price={oneProduct?.price}
          maxQuantity={maxQuantity}
          seeMore={t("seeMore")}
        />
        <div className="flex flex-col w-fit pl-2 lg:pl-0">
          <label className="font-roboto text-lg">{t("discountText")}</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 font-roboto font-light px-1"
          />
        </div>
        <AddButton handleCart={handleCart} text={t("addButton")} />
        <BuyButton
          items={items}
          text={t("buyButton")}
          color={selectedColor}
          size={selectedSize}
          user={currentUser}
          active={!selectedColor || !selectedSize}
          alertNoSelected={t("alertNoSelected")}
          logInAlert={t("logInAlert")}
          code={code || undefined}
        />
        <div className="flex w-full justify-center">
          <div className="flex w-[90%] justify-center items-center py-2">
            <p className="text-[13px] w-full text-gray-700">
              {t("affirmText")}
              <b>$50.00</b>
              {t("affirmWith")}
              <b>affirm</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
