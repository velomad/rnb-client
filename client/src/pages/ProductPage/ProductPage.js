import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, Button } from "../../components";
import { Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { history } from "../../utils";
import { connect } from "react-redux";
import { setBackFromSearch } from "../../store/actions";
import { Skeleton } from "./components";

const ProductPage = (props) => {
  const [product, setproduct] = useState({});
  const [productLoading, setproductLoading] = useState(false);

  const productId = props.match.params.id;

  useEffect(() => {
    getInfo();
  }, []);
  const goto = () => {
    // props.setBackFromSearch(true);
    history.goBack();
  };
  const getInfo = async () => {
    setproductLoading(true);
    const result = await Axios.get(
      `https://reachnbuy.com/api/v1/product?id=${productId}&api_key=123`
    );
    setproduct(result.data.result);
    setproductLoading(false);
  };

  const handleBuyClick = async (productLink) => {
    console.log(productLink);

    const res = await Axios.post(
      "http://middleware.ckaro.in/api/convert/ekaro",
      {
        data: {
          type: "createexternalearnlink",
          attributes: {
            userid: "1364982",
            links: [productLink],
            ip_address: "10.0.0.41",
          },
        },
      }
    );
    console.log(res.data.data[0].message);
    let earnLink;
    if (res.data.data[0].message == "Wrong URL") {
      earnLink = res.data.data[0].original_url;
    } else {
      earnLink = res.data.data[0].ekaro_url;
    }

    window.open(earnLink, "_blank");
  };

  return (
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-5 mx-auto">
        <ArrowBackIcon
          fontSize="large"
          onClick={goto}
          className="cursor-pointer mb-2"
        />

        {productLoading ? (
          <Skeleton />
        ) : (
          <div class="lg:w-4/5 mx-auto flex flex-wrap items-center relative mt-6">
            <img
              alt="ecommerce"
              className="lg:w-1/2 object-contain w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              style={{ height: "25rem" }}
              src={product.imageUrl}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="space-y-4">
                <Text size="xl" variant="danger" weight="700">
                  {product.website}
                </Text>
                <h1 class="text-gray-900 text-2xl title-font font-medium mb-1">
                  {product.brandName}
                </h1>
                <h2 class="text-lg title-font text-gray-500 tracking-widest">
                  {product.productName}
                </h2>
              </div>
              {product.size &&
                product.size.map((e) => (
                  <div className="inline-block mr-8 mt-5">
                    <div className="bg-gray-900 text-white radius rounded-full h-10 w-10 flex justify-center items-center hover:bg-red-500 animate duration-500 ease-in-out">
                      {e}
                    </div>
                  </div>
                ))}

              <hr className="my-5" />
              <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Grid container spacing={3}>
                    {product.productPrice && (
                      <Grid item>
                        <Text size="xl" variant="secondary">
                          &#8377; {product.productPrice}
                        </Text>
                      </Grid>
                    )}
                    {product.productPriceStrike && (
                      <Grid item>
                        <Text size="xl" variant="primary">
                          <del>&#8377; {product.productPriceStrike}</del>
                        </Text>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                <Grid item onClick={() => handleBuyClick(product.productLink)}>
                  <Button size="base" variant="primary" animate={true}>
                    Buy Now
                  </Button>
                </Grid>
              </Grid>
              {product.discountPercent && (
                <div className="mt-4">
                  <Text size="base" variant="danger" weight="600">
                    {product.discountPercent}% OFF
                  </Text>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default connect(null, { setBackFromSearch })(ProductPage);
