import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Text from "../Text";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProductSlider = (props) => {
    return (
        <div>
            <Swiper
                spaceBetween={props.spaceBetween}
                slidesPerView={props.slidesPerView}
                pagination={props.pagination}
                loop={props.loop}
                autoplay={props.autoplay}
                breakpoints={{
                    "@0.50": {
                        slidesPerView: props.slidesPerViewMobile,
                        spaceBetween: props.slidesPerViewMobile,
                    },
                }}
            >
                {
                    props.productImages.map((el, index) => {
                        return (
                            <React.Fragment key={index}>
                                <SwiperSlide>
                                    <div
                                        style={{
                                            height: props.cardHeight,
                                            width: "100%",
                                        }}
                                    >
                                        <img src={el} />
                                    </div>
                                </SwiperSlide>
                            </React.Fragment>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default ProductSlider;
