import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByCollection } from "../app/actions/products/getProducts";
import Loader from "../components/Loader/Loader";
import CardsContainer from "../components/Cards/CardsContainer";
import Paginated from "../components/Paginated/Paginated";

function Collection() {
  const dispatch = useDispatch();
  const { collection } = useParams();
  const [loading, setLoading] = useState(true);

  const { collectionProducts } = useSelector((state) => state.products);
  const { currentUser } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (!collectionProducts?.docs?.length) {
      dispatch(getProductByCollection(collection)).then(() =>
        setLoading(false)
      );
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductByCollection(collection)).then(() => setLoading(false));
  }, [collection]);

  function changePage(e) {
    if (e.currentTarget.value === "prev") {
      dispatch(getProductByCollection(collection, collectionProducts.page - 1));
    } else if (e.currentTarget.value === "next") {
      dispatch(getProductByCollection(collection, collectionProducts.page + 1));
    } else {
      dispatch(getProductByCollection(collection, e.currentTarget.value));
    }
    window.scrollTo(0, 0);
  }

  if (loading) return <Loader />;

  return (
    <div className="pt-[64px] bg-coal">
      <CardsContainer
        products={collectionProducts.docs}
        userID={currentUser?.id || undefined}
      />
      <Paginated
        productsPerPage={collectionProducts.limit}
        page={collectionProducts.page}
        totalPages={collectionProducts.totalPages}
        nextPage={collectionProducts.nextPage}
        prevPage={collectionProducts.prevPage}
        changePage={changePage}
      />
    </div>
  );
}

export default Collection;
