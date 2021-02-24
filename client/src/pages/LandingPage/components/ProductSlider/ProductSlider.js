import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text, Button } from "../../../../components";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProductSlider = (props) => {
  const handleBuyClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Swiper
        spaceBetween={15}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.75": {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.50": {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {props.offers.map((el) => (
          <SwiperSlide className="p-2 border-2 border-dashed border-gray-300 rounded-lg">
            <div
              className="relative border"
              style={{
                height: "12rem",
                width: "100%",
                borderRadius: 5,
                background: "rgba(0,0,0,0.8)",
                backgroundImage: `url(${el.productImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="space-y-1 h-40 relative">
              <div>
                <Text size="xs" weight="700">
                  Brand :{" "}
                  {el.brandName.length > 14
                    ? el.brandName.slice(0, 14) + "..."
                    : el.brandName}
                </Text>
              </div>
              <div className="flex justify-between">
                <div>
                  <Text size="xs" weight="700">
                    &#8377; {el.productPrice.slice(1, el.productPrice.length)}
                  </Text>
                </div>
                <div>
                  <Text size="xs" weight="700">
                    {el.priceStrike && (
                      <del>
                        &#8377; {el.priceStrike.slice(1, el.priceStrike.length)}
                      </del>
                    )}
                  </Text>
                </div>
              </div>
              <div>
                <Text size="xs" weight="700" variant="primary">
                  {/* {el.productName} */}
                  {el.productName.length > 35
                    ? el.productName.slice(0, 35) + "..."
                    : el.productName}
                </Text>
              </div>

              <div className="flex bottom-0 absolute space-x-2">
                <div>
                  <Button
                    variant="warning"
                    size="small"
                    handleClick={() => handleBuyClick(el.productLink)}
                  >
                    Buy Now
                  </Button>
                </div>
                <div>
                  <Text size="xs" weight="700" variant="primary">
                    {el.discountPercent}
                  </Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
