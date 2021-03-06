import React, { useState, useEffect } from "react";
import Axios from "axios";
import MobileProductCard from "./components/MobileProductCard";
import { FilterNav, FiltersPopUp, SortingPopUp, Skeleton } from "./components";
import { connect } from "react-redux";
import {
  getProducts,
  setProductCategoryChange,
  setBackFromSearch,
  setResetProducts,
} from "../../store/actions";
import InfiniteScroll from "react-infinite-scroll-component";
import { history, useQuery } from "../../utils";

let CurrentPage = 1;

const MobileProductsPage = (props, location) => {
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (props.products.length >= props.totalProducts) {
      setHasMore(false);
      return;
    }

    console.log(props.products);

    CurrentPage += 1;
    props.getProducts(CurrentPage);
  };

  useEffect(async () => {
    window.scrollTo(0, 0);
    setHasMore(true);
    // console.log(history.location.pathname);

    // if (!props.isBack) {
    CurrentPage = 1;
    props.setResetProducts();
    await props.getProducts(1);
    // 	props.setBackFromSearch(false);
    // } else {
    // 	props.setBackFromSearch(false);
    // }
  }, [history.location.search]);

  return (
    <React.Fragment>
      <div>
        <InfiniteScroll
          className="grid grid-cols-2 gap-1 "
          dataLength={props.products.length}
          next={() => fetchMoreData()}
          hasMore={hasMore}
          loader={
            props.productsLoading || props.products.length > 0 ? (
              <Skeleton />
            ) : (
              <div className="text-center py-40">
                Proudcts will be listed soon..
              </div>
            )
          }
          endMessage={<h4>No More Items</h4>}
        >
          {props.products.map((e, index) => (
            <div
              className="overflow-hidden"
              style={{ borderRight: "solid #ccc 0px" }}
              key={index}
            >
              <MobileProductCard
                id={e._id}
                image={e.imageUrl}
                website={e.website}
                price={e.productPrice}
                priceStrike={e.productPriceStrike}
                name={e.productName}
                brand={e.brandName}
                discount={e.discountPercent}
                rating={e.productRating}
              />
            </div>
          ))}
        </InfiniteScroll>

        {/* filter navigator */}
        <FilterNav />

        {/* popup for filter */}
        <FiltersPopUp />

        {/* popup for sorting */}
        <SortingPopUp />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ dataSkoreProductsState, uiState }) => ({
  products: dataSkoreProductsState.products,
  productsLoading: dataSkoreProductsState.productsLoading,
  isBack: uiState.isBackFromProductDetail,
  totalProducts: dataSkoreProductsState.totalProducts,
  category: dataSkoreProductsState.category,
});

export default connect(mapStateToProps, {
  getProducts,
  setProductCategoryChange,
  setBackFromSearch,
  setResetProducts,
})(MobileProductsPage);
