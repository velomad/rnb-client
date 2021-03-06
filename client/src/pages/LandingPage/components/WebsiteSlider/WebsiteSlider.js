import React from "react";
import "./slider.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text } from "../../../../components";
import { history } from "../../../../utils";
import { data } from "./data";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const MainSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.50": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@2.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {data.map((el) => (
          <SwiperSlide className="py-4">
            <div
              className="py-4 space-y-4 rounded-lg"
              style={{
                height: "18rem",
                backgroundImage: `url(/static/images/gplaypattern.png)`,
              }}
            >
              <div className="flex  items-center">
                <div className="px-6">
                  <img src={el.websiteImage} width="25px" />
                </div>
                <div className={el.styles}>
                  <Text size="sm" variant="primary">
                    {el.websiteName}
                  </Text>
                </div>
              </div>

              <div className="grid grid-cols-3 place-items-center space-y-2">
                {el.circles.map((circle) => (
                  <div className="mt-2">
                    <div onClick={() => history.push(circle.link)}>
                      <div className="p-1 border-2 ring-2 ring-pink-500 ring-opacity rounded-full w-20 h-20">
                        <img
                          className="rounded-full w-full h-full object-contain"
                          src={circle.circleImage}
                          alt="Categories"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <Text
                        size="xs"
                        variant="primaryDark"
                        classes="capitalize"
                      >
                        {circle.circleName}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default MainSlider;
