import React, { useState, useEffect } from "react";
import { Slider, Text } from "../../components";
import { history } from "../../utils";
import Axios from "axios";
import {
  setStoriesPopUp,
  getSlider,
  getStories,
  getOffers,
  getNews,
} from "../../store/actions";
import { connect } from "react-redux";
import { WebsiteSlider, ProductSlider, StoriesPopUp } from "./components";

const LandingPage = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [ajio, setAjio] = useState([]);
  const [myntra, setMyntra] = useState([]);
  const [mamaearth, setMamaearth] = useState([]);
  const [beauty, setBeauty] = useState([]);

  useEffect(() => {
    // props.getSlider();
    props.getStories();
    getBlogs();
    getEarnKaroData();
    props.getOffers();
    // props.getNews();
  }, []);

  const getBlogs = async () => {
    try {
      const response = await Axios.get(
        "http://reachnbuy.unitechitsolution.in/AndroidClass/get_blog.php"
      );
      setBlogs(response.data.blog_list);
    } catch (e) {
      console.log(e);
    }
  };

  const getEarnKaroData = async () => {
    const urls = [
      "https://reachnbuy.com/api/v1/offerzone?offer=best-of-ajio",
      "https://reachnbuy.com/api/v1/offerzone?offer=best-of-myntra",
      "https://reachnbuy.com/api/v1/offerzone?offer=best-of-mamaearth",
      "https://reachnbuy.com/api/v1/offerzone?offer=beauty-and-personal-care",
    ];

    const arrayWithResults = await Promise.all(
      urls.map((url) => Axios.get(url))
    );
    setAjio(arrayWithResults[0].data.offers);
    setMyntra(arrayWithResults[1].data.offers);
    setMamaearth(arrayWithResults[2].data.offers);
    setBeauty(arrayWithResults[3].data.offers);
  };
  console.log(blogs);

  const loadStory = (val) => {
    props.setStoriesPopUp(true, val);
  };

  console.log(ajio);

  let ajioSliderImages = [];

  ajio.map((el) => {
    ajioSliderImages.push(el.productImage);
  });

  return (
    <div className="bg-gray-200">
      <div className="grid grid-cols-3 gap-5 py-4 place-items-center">
        <a
          href="https://kanmanicosmetics.com/shop/ols/products/kanmani-immense-50ml-unisex"
          target="_blank"
        >
          <div className="space-y-2">
            <img src="/static/images/v1.png" className="" width="200" />
            <div className="text-center">
              <Text>Immense</Text>
            </div>
          </div>
        </a>
        <a
          href="https://kanmanicosmetics.com/shop/ols/products/kanmani-essence-50ml-unisex"
          target="_blank"
        >
          <div className="space-y-2 ">
            <img src="/static/images/v2.png" className="" width="200" />
            <div className="text-center">
              <Text>Essence</Text>
            </div>
          </div>
        </a>
        <a
          href="https://kanmanicosmetics.com/shop/ols/products/kanmani-presence-50ml-unisex"
          target="_blank"
        >
          <div className="space-y-2">
            <img src="/static/images/v3.png" className="" width="200" />
            <div className="text-center">
              <Text>Presence</Text>
            </div>
          </div>
        </a>
      </div>
      <div className="bg-gray-100 py-2">
        <div className="p-1">
          <Text
            variant="primaryDark"
            weight="700"
            isTitle={true}
            size="sm"
            classes="uppercase"
          >
            Best of Ajio Flat (On Sale)
          </Text>
        </div>
        <div className="py-1">
          <ProductSlider offers={ajio} slides={6} />
        </div>
      </div>

      <div>
        {/* <div className="flex justify-between p-2 bg-gray-800">
          <div>
            <Text
              size="sm"
              variant="white"
              weight="700"
              classes="capitalize"
              isTitle={true}
            >
              Blogs
            </Text>
          </div>
          <div onClick={()=> history.push("/blogs")}>
            <Text
              size="sm"
              variant="white"
              weight="700"
              classes="capitalize"
              isTitle={true}
            >
              View All
            </Text>
          </div>
        </div> */}

        {/* <div className="grid grid-cols-2 place-items-center">
          {blogs.slice(0, 2).map((el, index) => {
            return (
              <div key={index} className="p-2">
                <img src={el.image} className="rounded-lg mx-auto" />
                <div>
                  <Text
                    size="xs"
                    variant="primaryDark"
                    weight="700"
                    classes="capitalize"
                    isTitle={false}
                  >
                    {el.date}
                  </Text>
                </div>
                <div className="pb-1">
                  <Text
                    size="sm"
                    variant="primaryDark"
                    weight="700"
                    classes="capitalize"
                    isTitle={true}
                  >
                    {el.title.slice(0, 16) + ".."}
                  </Text>
                </div>
                <div>
                  <Text
                    size="xs"
                    variant="primaryDark"
                    weight="500"
                    isTitle={false}
                  >
                    {el.description.slice(0, 40) + ".."}
                  </Text>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>

      {/* <div>
        <div className="hidden md:block">
					<img src="/static/images/vb1.jpg" />
				</div>

        <div className="hidden md:block">
					<img src="/static/images/vb2.jpg" />
				</div>
      </div>
      <a href="https://clnk.in/oH8j" target="_blank" className="hidden md:block">
        <div>
          <img src="/static/images/mobile2.jpeg" />
        </div>
      </a> */}

      <div className="bg-gray-100 py-2">
        <div className="p-1">
          <Text
            variant="primaryDark"
            weight="700"
            isTitle={true}
            size="sm"
            classes="uppercase"
          >
            Best of Myntra Flat (On Sale)
          </Text>
        </div>
        <div className="py-1">
          <ProductSlider offers={myntra} />
        </div>
      </div>

      {/* <a href="https://clnk.in/nSxA" target="_blank">
        <div>
          <img src="/static/images/mobile.jpeg" />
        </div>
      </a> */}
      <WebsiteSlider />

      <div className="bg-gray-100 py-2">
        <div className="p-1">
          <Text
            variant="primaryDark"
            weight="700"
            isTitle={true}
            size="sm"
            classes="uppercase"
          >
            Best of MamaEarth Flat (On Sale)
          </Text>
        </div>
        <div className="py-1">
          <ProductSlider offers={mamaearth} />
        </div>
      </div>

      <a
        href="https://ad.admitad.com/g/ea3sq3dsml3552d4acafe452830f0f"
        target="_blank"
      >
        <div className="sm:block md:hidden">
          <img src="/static/images/laptop.jpeg" />
        </div>
      </a>
      <div className="sm:block md:hidden">
        <img src="/static/images/b1.png" />
      </div>

      <div className="grid grid-cols-1 sm:block md:hidden">
        <div>
          <img src="/static/images/b2.png" />
        </div>
        <div>
          <div className="bg-gray-200 py-10 place-items-center grid grid-cols-3">
            <div
              className="h-20 w-20 bg-red-400 rounded-full p-4"
              onClick={() => history.push("/products?discountPercent[gte]=30")}
            >
              <div className="text-center mt-3 text-white font-semibold text-xl">
                30%
              </div>
            </div>
            <div className="h-20 w-20 bg-red-400 rounded-full p-4">
              <div
                className="text-center mt-3 text-white font-semibold text-xl"
                onClick={() =>
                  history.push("/products?discountPercent[gte]=50")
                }
              >
                50%
              </div>
            </div>
            <div className="h-20 w-20 bg-red-400 rounded-full p-4">
              <div
                className="text-center mt-3 text-white font-semibold text-xl"
                onClick={() =>
                  history.push("/products?discountPercent[gte]=70")
                }
              >
                70%
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-4">
            <div className="text-center text-4xl text-gray-600 uppercase capitalize">
              Offer zone
            </div>
            <div className="text-center text-gray-500 text-sm">
              best deals for you
            </div>
          </div>
        </div>
        <div>
          <img src="/static/images/b3.png" />
        </div> 
      </div>

      {/* <div class="px-4 space-y-4">
        <div>
          <Text
            size="sm"
            variant="primaryDark"
            weight="700"
            classes="capitalize"
            isTitle={true}
            classes="uppercase"
          >
            Stories & Updates
          </Text>
        </div>
        <div>
          <div class="flex flex-row space-x-3 items-center overflow-auto w-full">
            {props.stories.map((el, index) => (
              <div onClick={() => loadStory(index)}>
                <div class="p-1 border-2 border-pink-600 rounded-full">
                  <div class="w-16 h-16">
                    <img
                      className="rounded-full w-full h-full object-cover"
                      width="100%"
                      src={el.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <StoriesPopUp /> */}

      {/* 
			<div className="px-4">
				<Text
					size="sm"
					weight="700"
					variant="primaryDark"
					isTitle={true}
					classes="uppercase"
				>
					Our Partners
				</Text>
			</div> */}

      {/* <div className="grid gap-2 grid-cols-1 md:grid-cols-2 py-4 p-1"
				onClick={() => history.push("/products/kanmani")}
			>
				<div>
					<img
						className="rounded-lg object-cover w-full"
						style={{ height: "12rem" }}
						src="https://img1.wsimg.com/isteam/ip/a07c92b5-a36f-447a-b131-469f99987059/857416867_122848.jpg/:/rs=w:1950,h:1200"
					/>
				</div>
			</div> */}

      <div className="bg-gray-100">
        {/* <div className="px-4 py-2">
					<Text
						size="sm"
						weight="700"
						variant="primaryDark"
						isTitle={true}
						classes="uppercase"
					>
						News
					</Text>
				</div>
				<div className={`grid gap-2 grid-cols-2 md:grid-cols-2 py-4 p-1`}>
					{props.news.slice(0, 4).map((el, index) => (
						<div>
							<img
								className="rounded-lg object-cover w-full"
								style={{ height: "12rem" }}
								src={el.image}
							/>
						</div>
					))}
				</div> */}

        {/* <div>
          <Slider
            productImages={ajioSliderImages}
            spaceBetween={20}
            slidesPerView={3}
            pagination={true}
            loop={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            slidesPerViewMobile={1}
            spaceBetweenMobile={10}
            cardHeight={"h-56"}
          />
        </div> */}

        <div className={`grid gap-2 grid-cols-1 md:grid-cols-2 py-4`}>
          {props.news.slice(4, props.news.length - 1).map((el, index) => (
            <div>
              <img
                className="rounded-lg object-cover w-full"
                style={{ height: "12rem" }}
                src={el.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ landingPageState }) => ({
  sliderList: landingPageState.sliders,
  stories: landingPageState.stories,
  offers: landingPageState.offers,
  news: landingPageState.news,
});

export default connect(mapStateToProps, {
  setStoriesPopUp,
  getSlider,
  getStories,
  getOffers,
  getNews,
})(LandingPage);
