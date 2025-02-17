"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import logo from "@/public/images/t-shirt.jpg";

import { LiaShoppingBagSolid } from "react-icons/lia";
import Image from "next/image";
import hero1 from "@/public/images/hero1.jpg";
// import tshirt from "@/public/images/t-shirt.jpg";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { selectScreenType } from "@/app/redux/slices/screenSizeSlice";
import {
  selectStoreImg,
  selectStoreName,
} from "@/app/redux/selectors/categorySelector";
import {
  selectProductId,
  setPageName,
  setProductId,
} from "@/app/redux/slices/pageSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { NextArrow, PrevArrow } from "@/app/constant/Arrows";
import { RichText } from "./RichText";
import { ImageBanner } from "./ImageBanner";
import { ImageWithText } from "./ImageWithText";
import { FeaturedProduct } from "./FeaturedProduct";

interface Product {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

interface NavBar {
  visible?: boolean;
  visible1?: boolean;
  visible2?: boolean;
  visible3?: boolean;
}

export const NavBar: React.FC<NavBar> = ({
  visible,
  visible1,
  visible2,
  visible3,
}) => {
  const screenType = useAppSelector(selectScreenType);
  const storeName = useAppSelector(selectStoreName);
  const storeImg = useAppSelector(selectStoreImg);
  return (
    <div className="w-full navBar">
      {/* navbar */}
      <nav
        className={`w-full flex justify-center rounded-lg ${
          visible ? "block" : "hidden"
        }`}
      >
        <div
          className={`flex 3xl:w-[82%] w-[95%]  ${
            screenType === "mobile" ? "hidden" : "block"
          } items-center justify-between py-3 px-10 `}
        >
          {/* left side */}
          <div className="flex items-center">
            {/* logo */}
            <div
              className={`flex items-center gap-3 ${
                visible1 ? "block" : "hidden"
              }`}
            >
              {
                <div className="mt-2 aspect-h-5">
                  <Image
                    src={storeImg || logo}
                    alt="Current store"
                    width={100}
                    height={100}
                    className="max-w-16 max-h-10 object-cover rounded-md mb-2.5"
                  />
                </div>
              }
              <h2 className="mr-3 mb-1 text-xl hover:text-black">
                {storeName}
              </h2>
            </div>

            {/* links */}
            <ul className={`flex ml-7 gap-6 ${visible2 ? "block" : "hidden"} `}>
              <li className="relative group cursor-pointer menuLinks">
                Home
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
              <li className="relative group cursor-pointer menuLinks">
                Mens Clothing
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
              <li className="relative group cursor-pointer menuLinks">
                Womes Clothing
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
            </ul>
          </div>

          {/* right side */}
          <div
            className={`flex items-center gap-5 ${
              visible3 ? "block" : "hidden"
            }`}
          >
            <span className="hover:scale-125 duration-300 cursor-pointer">
              <FiSearch className="icons" />
            </span>
            <span className="hover:scale-125 duration-300 cursor-pointer">
              <FaRegUser className="icons" />
            </span>
            <span className="hover:scale-125 duration-300 cursor-pointer relative">
              <LiaShoppingBagSolid className="icons" size={19} />
              <span className="ShopIcon absolute w-full max-w-3.5 text-center rounded-full flex items-center justify-center text-[9px] font-bold -top-1 -right-1">
                0
              </span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export function HomeBody() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  const screenType = useAppSelector(selectScreenType);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=12");
        const data = await res.json();
        setProductsData(data.products);
      } catch (error) {
        console.log("Error Fetching products : ", error);
      }
    }

    getProducts();
  }, []);

  const handleProductClick = (id: number) => {
    if (id) {
      dispatch(setPageName("Product Details Page"));
      dispatch(setProductId(id));
      localStorage.setItem("currentPage", "Product Details Page");
      window.dispatchEvent(
        new CustomEvent("pageChange", { detail: "Product Details Page" })
      );
    }
  };

  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );

  const sliderSections = tamplateSection.filter((s) => s.type === "Slider");
  const FeaturedCollections = tamplateSection.filter(
    (s) => s.type === "Featured Collection"
  );
  const RichTextSection = tamplateSection.filter((s) => s.type === "Rich Text");
  const imgBannerSection = tamplateSection.filter(
    (s) => s.type === "Image banner"
  );
  const imgWithTextSection = tamplateSection.filter(
    (s) => s.type === "Image with text"
  );
  const featuredProductSection = tamplateSection.filter(
    (s) => s.type === "Featured Product"
  );

  interface SlickSlider {
    slickPlay: () => void;
    slickPause: () => void;
  }
  const sliderRef = useRef<(Slider & SlickSlider) | null>(null);
  useEffect(() => {
    if (sliderRef.current) {
      // Handle autoplay changes
      const currentSection = sliderSections.find(
        (section) => section.type === "Slider" && section.subSections.length > 1
      );

      if (currentSection?.autoplay === "on") {
        sliderRef.current.slickPlay();
      } else {
        sliderRef.current.slickPause();
      }
    }
  }, [sliderSections]);

  const bodyDragSection = tamplateSection.filter(
    (s) =>
      s.type === "Slider" ||
      s.type === "Featured Collection" ||
      s.type === "Featured Product" ||
      s.type === "Rich Text" ||
      s.type === "Image banner" ||
      s.type === "Image with text"
  );

  return (
    <div className="homeBody py-2  w-full">
      {bodyDragSection.map((sec) => {
        if (sec.type === "Slider") {
          return (
            // {/* Slider */}
            <div className="w-full flex justify-center" key={sec.id}>
              <div
                className={`${
                  screenType === "mobile"
                    ? "w-full mr-14"
                    : "3xl:w-[80%] w-[95%] mr-20"
                } `}
              >
                {/* hero section */}
                {sliderSections.map((section) => {
                  if (
                    section.type === "Slider" &&
                    section.subSections.length > 1
                  ) {
                    const sliderSettings = {
                      dots: false,
                      arrows: true,
                      infinite: true,
                      speed: 500,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: section.autoplay === "on",
                      autoplaySpeed: section.autoplaySpeed,
                      pauseOnHover: false,
                      nextArrow: <NextArrow />,
                      prevArrow: <PrevArrow />,
                      fade: section.animation === "fade",
                      cssEase: section.animation === "fade" ? "linear" : "ease",
                      swipe: section.animation !== "none",
                      draggable: section.animation !== "none",
                    };

                    return (
                      <section
                        key={section.id}
                        className={`mx-10 w-full ${
                          section.visible ? "block" : "hidden"
                        } `}
                      >
                        <Slider
                          {...sliderSettings}
                          ref={sliderRef}
                          key={`slider-${section.id}-${section.autoplay}`}
                        >
                          {section.subSections.map((sub) => (
                            <div
                              key={sub.id}
                              className={`relative ${
                                sub.visible ? "block" : "hidden"
                              }
                    
                       ${
                         section.slideHight === "Small"
                           ? "aspect-[9/3.5]"
                           : "aspect-[9/5]"
                       } 
                       ${
                         section.slideHight === "Medium"
                           ? "aspect-[9/4.5]"
                           : "aspect-[9/5]"
                       } 
                       ${
                         section.slideHight === "Large"
                           ? "aspect-[9/6]"
                           : "aspect-[9/5]"
                       } `}
                              style={{ aspectRatio: section.slideHight }}
                            >
                              <Image
                                src={
                                  sub.sliderImg instanceof File
                                    ? URL.createObjectURL(sub.sliderImg)
                                    : sub.sliderImg || hero1
                                }
                                alt="Hero Slider"
                                width={100}
                                height={100}
                                className={`w-full h-full ${
                                  sub.visible ? "block" : "hidden"
                                }`}
                                unoptimized
                              />
                              <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 text-3xl">
                                {sub.content}
                              </div>
                              <div className="absolute bottom-[86px] left-1/2 transform -translate-x-1/2">
                                {sub.description}
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </section>
                    );
                  } else {
                    return (
                      <section
                        key={section.id}
                        className={`aspect-w-6 aspect-h mx-10 
              ${
                section.slideHight === "Small" ? "aspect-[9/3]" : "aspect-[9/5]"
              } 
              ${
                section.slideHight === "Medium"
                  ? "aspect-[9/4.5]"
                  : "aspect-[9/5]"
              } 
              ${
                section.slideHight === "Large" ? "aspect-[9/6]" : "aspect-[9/5]"
              } 
              ${section.visible ? "block" : "hidden"}`}
                      >
                        <div>
                          <Image
                            src={
                              section.subSections[0].sliderImg instanceof File
                                ? URL.createObjectURL(
                                    section.subSections[0].sliderImg
                                  )
                                : section.subSections[0].sliderImg || hero1
                            }
                            alt="Hero Slider"
                            className={`w-full h-full rounded-md relative ${
                              section.subSections[0].visible
                                ? "block"
                                : "hidden"
                            }`}
                            width={1200}
                            height={600}
                            unoptimized={
                              section.subSections[0].sliderImg instanceof File
                            }
                          />
                          <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 text-3xl">
                            {section?.subSections[0].content}
                          </div>
                          <div className="absolute bottom-[86px] left-1/2 transform -translate-x-1/2">
                            {section?.subSections[0].description}
                          </div>
                        </div>
                      </section>
                    );
                  }
                })}
              </div>
            </div>
          );
        } else if (sec.type === "Featured Collection") {
          return (
            // {/* Products section */}
            <div
              className="w-full flex justify-center overflow-x-hidden"
              key={sec.id}
            >
              <div
                className={`${
                  screenType === "mobile" ? "w-full" : "3xl:w-[80%] w-[97%]"
                } `}
              >
                {FeaturedCollections.map((fsec) => {
                  return (
                    <div
                      className={`mt-10 mx-10 ${
                        fsec.visible ? "block" : "hidden"
                      }`}
                      key={fsec.id}
                    >
                      {/* filter */}
                      <div>
                        <p>{fsec.content}</p>
                        <p>{fsec.description}</p>
                      </div>

                      {/* Products */}
                      <div
                        className={`mt-5 grid  ${
                          screenType === "mobile" ? "grid-cols-1" : ""
                        } text-center gap-10
              ${
                screenType !== "mobile" && fsec.totalProduct === 1
                  ? "grid-cols-1"
                  : "grid-cols-1"
              }
              ${
                screenType !== "mobile" && fsec.totalProduct === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }
              ${
                screenType !== "mobile" && fsec.totalProduct === 3
                  ? "grid-cols-3"
                  : "grid-cols-1"
              }
              ${
                screenType !== "mobile" && fsec.totalProduct === 4
                  ? "grid-cols-4"
                  : ""
              }
              ${
                screenType !== "mobile" && fsec.totalProduct === 5
                  ? "grid-cols-5"
                  : ""
              }
              ${
                screenType !== "mobile" && fsec.totalProduct === 6
                  ? "grid-cols-6"
                  : ""
              }
              `}
                      >
                        {/* single product container */}
                        {productsData.length > 0 ? (
                          productsData.map((item) => (
                            <div className="max-w-full products" key={item?.id}>
                              {/* img container */}
                              <div className="w-full h-auto text-left imgContainer">
                                <Image
                                  src={item?.thumbnail}
                                  alt="product image"
                                  width={200} // Set the width of the image (e.g., 200px)
                                  height={200} // Set the height of the image (e.g., 200px)
                                  layout="responsive" // Makes the image responsive and adjusts automatically
                                  className="object-cover productImg"
                                />
                              </div>
                              <div className="px-2 pb-2">
                                {/* content */}
                                <p className="w-full">
                                  <span className="cursor-pointer">
                                    {item?.title}
                                  </span>
                                </p>
                                <p className="w-full mrp">
                                  <span className="cursor-pointer">
                                    {item?.price}
                                  </span>
                                </p>
                              </div>
                              <button
                                onClick={() => {
                                  handleProductClick(item.id);
                                }}
                                className="px-2 rounded-sm btn-Custome mb-3 mx-1.5"
                              >
                                Show
                              </button>
                            </div>
                          ))
                        ) : (
                          <div className="text-center text-4xl">Loading...</div>
                        )}
                      </div>
                      <div className="w-full text-center my-4 mt-6">
                        <button
                          className={`bg-black text-white rounded-sm ${
                            fsec.buttonText ? "px-4 py-1" : "px-0 py-0"
                          }`}
                        >
                          {fsec.buttonText}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (sec.type === "Featured Product") {
          return (
            // {/* Rich text section */}
            <div className="w-full flex justify-center" key={sec.id}>
              <div
                className={`${
                  screenType === "mobile" ? "w-full" : "3xl:w-[80%] w-[97%]"
                } `}
              >
                {RichTextSection.map((section) => {
                  return (
                    <RichText key={section.id} RichTextSection={section} />
                  );
                })}
              </div>
            </div>
          );
        } else if (sec.type === "Rich Text") {
          return (
            // {/* Image with banner section */}
            <div className="" key={sec.id}>
              {imgBannerSection.map((sec) => {
                return <ImageBanner key={sec.id} ImageBannerSection={sec} />;
              })}
            </div>
          );
        } else if (sec.type === "Image banner") {
          /* Image with text section */
          <div className="w-full flex justify-center" key={sec.id}>
            <div
              className={`${
                screenType === "mobile" ? "w-full" : "3xl:w-[80%] w-[97%]"
              } `}
            >
              {imgWithTextSection.map((sec) => {
                return (
                  <ImageWithText key={sec.id} imageWithTextSection={sec} />
                );
              })}
            </div>
          </div>;
        } else if (sec.type === "Image with text") {
          return (
            // {/* Featured Product Section */}
            <div className="w-full flex justify-center" key={sec.id}>
              <div
                className={`${
                  screenType === "mobile" ? "w-full" : "3xl:w-[80%] w-[97%]"
                } `}
              >
                {featuredProductSection.map((sec) => {
                  return (
                    <FeaturedProduct key={sec.id} featuredProductSec={sec} />
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export function Categories() {
  const screenType = useAppSelector(selectScreenType);
  const [productsData, setProductsData] = useState<Product[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=12");
        const data = await res.json();
        setProductsData(data.products);
      } catch (error) {
        console.log("Error Fetching products : ", error);
      }
    }

    getProducts();
  }, []);

  const handleProductClick = (id: number) => {
    if (id) {
      dispatch(setPageName("Product Details Page"));
      dispatch(setProductId(id));
    }
  };
  return (
    <div className="homeBody py-2">
      <div className="mt-10 mx-10">
        {/* filter */}
        <div className="flex justify-between items-center">
          <div>
            <p>All Products</p>
            <p>24 items</p>
          </div>

          <div>
            <label htmlFor="">Sorted by:</label>
            <select name="" id="" className="bg-white">
              <option value="Newest Arrival">Newest Arrival</option>
              <option value="Newest Arrival">Trending</option>
              <option value="Newest Arrival">latest</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div
          className={`mt-10 grid  ${
            screenType === "mobile" ? "grid-cols-1" : "grid-cols-4"
          } text-center gap-10`}
        >
          {/* single product container */}
          {productsData.length > 0 ? (
            productsData.map((item) => (
              <div className="max-w-full products" key={item?.id}>
                {/* img container */}
                <div className="w-full h-auto text-left imgContainer">
                  <Image
                    src={item?.thumbnail}
                    alt="product image"
                    width={200} // Set the width of the image (e.g., 200px)
                    height={200} // Set the height of the image (e.g., 200px)
                    layout="responsive" // Makes the image responsive and adjusts automatically
                    className="object-cover productImg"
                  />
                </div>
                {/* content */}
                <p className="w-full">
                  <span className="cursor-pointer">{item?.title}</span>
                </p>
                <p className="w-full mrp">
                  <span className="cursor-pointer">{item?.price}</span>
                </p>
                <button
                  onClick={() => {
                    handleProductClick(item.id);
                  }}
                  className="px-2 rounded-sm btn-Custome mb-3 mx-1.5"
                >
                  show
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-4xl">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PageDetailsPage() {
  const productId = useAppSelector(selectProductId);
  const [product, setProduct] = useState<Product | null>();
  const [totalProduct, setTotalProduct] = useState<number | null>(1);
  useEffect(() => {
    const showSingleProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (productId) showSingleProduct();
  }, [productId]);

  const handleMinus = () => {
    if (totalProduct) {
      if (totalProduct > 1) {
        setTotalProduct(totalProduct - 1);
      }
    }
  };

  const handleAdd = () => {
    if (totalProduct) {
      if (totalProduct >= 0 && totalProduct < 10) {
        setTotalProduct(totalProduct + 1);
      }
    }
  };
  return (
    <div className="homeBody flex flex-col">
      <div>
        {product ? (
          <div className="ml-10 flex gap-10">
            {/* img container */}
            <div className="w-[500px] h-auto text-left px-10 py-5">
              <Image
                src={product?.thumbnail}
                alt="product image"
                width={100}
                height={100}
                layout="responsive"
                className="object-cover rounded-2xl"
              />
            </div>

            {/* content container */}
            <div className="mt-6 flex flex-col space-y-4">
              <h1 className="text-4xl font-semibold">{product.title}</h1>
              <span className="text-2xl font-medium">${product.price}</span>
              <p className="w-[450px] mr-[100px] text-base">
                {product.description}
              </p>

              {/* quentity */}
              <div className="flex items-center w-fit pb-10">
                <button
                  onClick={handleMinus}
                  className="bg-white border p-2 border-black w-full h-full"
                >
                  <FiMinus />
                </button>
                <span className="border-t bg-white border-b  h-full w-full p-2 px-4 border-black">
                  {totalProduct}
                </span>
                <button
                  onClick={handleAdd}
                  className="bg-white border p-2 border-black h-full w-full"
                >
                  <FiPlus />
                </button>
              </div>

              {/* buttons */}
              <div className="w-full h-10 flex gap-1">
                <button className="w-full h-full addCartBtn">
                  ADD TO CART
                </button>
                <button className="w-full h-full buyBtn">BUY NOW</button>
              </div>
            </div>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
