import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "../components/Searchbar";
import Filters from "../components/Filters";
import { getProducts } from "../app/actions/products/getProducts";
import CardsContainer from "../components/Cards/CardsContainer";
import Loader from "../components/Loader/Loader";
import {
  getCategories,
  getColors,
  getSizes,
} from "../app/actions/categories/getCategories";
import Paginated from "../components/Paginated/Paginated";
import { useTranslation } from "react-i18next";

function Results() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { categories, sizes, colors } = useSelector(
    (state) => state.categories
  );
  const { category, size, color, gender } = useSelector(
    (state) => state.filters
  );
  const { currentUser } = useSelector((state) => state.userInfo);

  useEffect(() => {
    const fetchData = async () => {
      if (!products?.docs?.length) {
        await dispatch(getProducts());
      }
      await dispatch(getCategories());
      await dispatch(getSizes());
      await dispatch(getColors());
    };
    fetchData();
    setLoading(false);
  }, [dispatch]);

  function handleSearch(e) {
    setInput(e.target.value);
  }

  function changePage(e) {
    if (e.currentTarget.value === "prev") {
      dispatch(
        getProducts(input, category, size, color, gender, products.page - 1)
      );
    } else if (e.currentTarget.value === "next") {
      dispatch(
        getProducts(input, category, size, color, gender, products.page + 1)
      );
    } else {
      dispatch(
        getProducts(input, category, size, color, gender, e.currentTarget.value)
      );
    }
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    dispatch(getProducts(input, category, size, color, gender, 1));
  }, [input, category, size, color, gender]);

  const { t } = useTranslation("results");

  if (loading) return <Loader />;

  return (
    <div className="pt-14 bg-coal">
      <div className="flex justify-center items-center w-full pt-4 ">
        <Searchbar
          handleSearch={handleSearch}
          input={input}
          setInput={setInput}
          searchbarT={t("searchbar")}
        />
      </div>
      <div className="flex">
        <Filters
          categories={categories}
          sizes={sizes}
          colors={colors}
          allT={t("allFilters")}
          selectCategoryT={t("selectCategory")}
          selectColorT={t("selectColor")}
          selectSizeT={t("selectSize")}
        />
      </div>
      <CardsContainer
        products={products.docs}
        userID={currentUser?.id || undefined}
        noResultsT={t("noResults")}
      />
      <Paginated
        productsPerPage={products.limit}
        page={products.page}
        totalPages={products.totalPages}
        nextPage={products.nextPage}
        prevPage={products.prevPage}
        changePage={changePage}
      />
    </div>
  );
}

export default Results;
