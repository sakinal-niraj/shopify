"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import logo from "@/public/images/t-shirt.jpg";

import { LiaShoppingBagSolid } from "react-icons/lia";
import Image, { StaticImageData } from "next/image";
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
import { ClipLoader } from "react-spinners";
import { DownToUp, FadeLeft, LeftToRight, RightToLeft, ScaleFadeIn, UptoDown } from "@/app/util/Animation";

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
                <div className="mt-2 aspect-h-5 hover:scale-105 duration-200 ease-linear">
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

interface SubSection {
  id: string;
  visible: boolean;
  sliderImg?: string | File | StaticImageData;
  content?: string;
  description?: string;
}
export function HomeBody() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  const screenType = useAppSelector(selectScreenType);

  // Fetch product data for Featured Collection sections
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=8");
        const data = await res.json();
        setProductsData(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
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

  // Get the sorted sections from Redux (this order is updated by your drag & drop)
  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );

  interface SlickSlider {
    slickPlay: () => void;
    slickPause: () => void;
  }

  // Optional: use a ref for controlling slider autoplay if needed
  const sliderRef = useRef<Slider & SlickSlider>(null);

  // (You can add any effect here for slider autoplay based on section properties)
  useEffect(() => {
    // For example, find a slider section and play/pause based on its settings.
  }, [tamplateSection]);

  return (
    <div className="homeBody py-2 w-full">
      {tamplateSection.map((sec) => {
        // Skip rendering if section is hidden
        if (!sec.visible) return null;

        switch (sec.type) {
          case "Slider": {
            const sliderSettings = {
              dots: false,
              arrows: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: sec.autoplay === "on",
              autoplaySpeed: sec.autoplaySpeed,
              pauseOnHover: false,
              nextArrow: <NextArrow />,
              prevArrow: <PrevArrow />,
              fade: sec.animation === "fade",
              cssEase: sec.animation === "fade" ? "linear" : "ease",
              swipe: sec.animation !== "none",
              draggable: sec.animation !== "none",
            };

            return (
              <div className="w-full flex justify-center" key={sec.id}>
                <div
                  className={`${
                    screenType === "mobile"
                      ? "w-full mr-14"
                      : "3xl:w-[80%] w-[95%] mr-20"
                  }`}
                >
                  {sec.subSections && sec.subSections.length > 1 ? (
                    <section className="mx-10 w-full">
                      <Slider {...sliderSettings} ref={sliderRef}>
                        {sec.subSections.map((sub: SubSection) => (
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            key={sub.id}
                            className={`relative ${
                              sub.visible ? "block" : "hidden"
                            } ${
                              sec.slideHight === "Small"
                                ? "aspect-[9/3.5]"
                                : sec.slideHight === "Medium"
                                ? "aspect-[9/4.5]"
                                : sec.slideHight === "Large"
                                ? "aspect-[9/6]"
                                : "aspect-[9/5]"
                            }`}
                          >
                            <Image
                              src={
                                sub.sliderImg instanceof File
                                  ? URL.createObjectURL(sub.sliderImg)
                                  : sub.sliderImg || hero1
                              }
                              alt="Slider Image"
                              width={100}
                              height={100}
                              className="w-full h-full"
                              unoptimized
                            />
                            <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 text-3xl">
                              {sub.content}
                            </div>
                            <div className="absolute bottom-[86px] left-1/2 transform -translate-x-1/2">
                              {sub.description}
                            </div>
                          </motion.div>
                        ))}
                      </Slider>
                    </section>
                  ) : (
                    sec.subSections &&
                    sec.subSections[0] && (
                      <section className="mx-10 w-full" key={sec.id}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.7, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <Image
                            src={
                              sec.subSections[0].sliderImg instanceof File
                                ? URL.createObjectURL(
                                    sec.subSections[0].sliderImg
                                  )
                                : sec.subSections[0].sliderImg || hero1
                            }
                            alt="Slider Image"
                            className="w-full h-full rounded-md"
                            width={1200}
                            height={600}
                            unoptimized={
                              sec.subSections[0].sliderImg instanceof File
                            }
                          />
                          <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 text-3xl">
                            {sec.subSections[0].content}
                          </div>
                          <div className="absolute bottom-[86px] left-1/2 transform -translate-x-1/2">
                            {sec.subSections[0].description}
                          </div>
                        </motion.div>
                      </section>
                    )
                  )}
                </div>
              </div>
            );
          }

          case "Featured Collection": {
            return (
              <div
                className="w-full flex justify-center overflow-x-hidden"
                key={sec.id}
              >
                <div
                  className={`${
                    screenType === "mobile" ? "w-full" : "3xl:w-[80%] w-[97%]"
                  }`}
                >
                  <div className="mt-10 mx-10">
                    <div>
                      <p>{sec.content}</p>
                      <p>{sec.description}</p>
                    </div>
                    <div
                      className={`mt-5 grid ${
                        screenType === "mobile" && "grid-cols-1"
                      }
                      ${
                        screenType !== "mobile" &&
                        sec.totalProduct === 1 &&
                        "grid-cols-1"
                      }
                      ${
                        screenType !== "mobile" &&
                        sec.totalProduct === 2 &&
                        "grid-cols-2"
                      }
                      ${
                        screenType !== "mobile" &&
                        sec.totalProduct === 3 &&
                        "grid-cols-3"
                      }
                      ${
                        screenType !== "mobile" &&
                        sec.totalProduct === 4 &&
                        "grid-cols-4"
                      }
                      ${
                        screenType !== "mobile" &&
                        sec.totalProduct === 5 &&
                        "grid-cols-5"
                      }
                      ${
                        screenType !== "mobile" &&
                        sec.totalProduct === 6 &&
                        "grid-cols-6"
                      }
                       gap-10`}
                    >
                      {productsData.length > 0 ? (
                        productsData.map((item) => (
                          <motion.div
                            key={item.id}
                            {...(sec.animation === "zoom" ? ScaleFadeIn() : {})}
                            {...(sec.animation === "Left to Right" ? LeftToRight() : {})}
                            {...(sec.animation === "Right to Left" ? RightToLeft() : {})}
                            {...(sec.animation === "Up to Down" ? UptoDown() : {})}
                            {...(sec.animation === "Down to Up" ? DownToUp() : {})}
                            viewport={{ once: true }}
                            className="max-w-full products transform"
                          >
                            <motion.div
                              whileHover={{ scale: 1.03 }}
                              transition={{ duration: 0.3 }}
                              viewport={{ once: true }}
                              className="w-full h-auto text-left imgContainer"
                            >
                              <Image
                                src={item.thumbnail}
                                alt="Product image"
                                width={200}
                                height={200}
                                layout="responsive"
                                className="object-cover productImg"
                              />
                            </motion.div>
                            <motion.div
                              {...(sec.alignment === "zoom" ? ScaleFadeIn() : {})}
                              {...(sec.alignment === "Left to Right" ? LeftToRight() : {})}
                              {...(sec.alignment === "Right to Left" ? RightToLeft() : {})}
                              {...(sec.alignment === "Up to Down" ? UptoDown() : {})}
                              {...(sec.alignment === "Down to Up" ? DownToUp() : {})}
                              viewport={{ once: true }}
                              className="px-2 pb-2"
                            >
                              <p className="w-full">
                                <span className="cursor-pointer">
                                  {item.title}
                                </span>
                              </p>
                              <p className="w-full mrp">
                                <span className="cursor-pointer">
                                  {item.price}
                                </span>
                              </p>
                            </motion.div>
                            <motion.button
                               {...(sec.alignment === "zoom" ? ScaleFadeIn() : {})}
                               {...(sec.alignment === "Left to Right" ? LeftToRight() : {})}
                               {...(sec.alignment === "Right to Left" ? RightToLeft() : {})}
                               {...(sec.alignment === "Up to Down" ? UptoDown() : {})}
                               {...(sec.alignment === "Down to Up" ? DownToUp() : {})}
                              whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                              }}
                              viewport={{ once: true }}
                              onClick={() => handleProductClick(item.id)}
                              className="px-2 rounded-sm btn-Custome mb-3 mx-1.5 hover:scale-105 transform"
                            >
                              Show
                            </motion.button>
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-center text-4xl">Loading...</div>
                      )}
                    </div>
                    <div className="w-full text-center my-4 mt-6">
                      <motion.button
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.5, delay: 0.2 },
                        }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.8, transition: { duration: 0.3 } }}
                        transition={{ duration: 0 }}
                        viewport={{ once: true }}
                        className={`bg-black text-white rounded-sm ${
                          sec.buttonText ? "px-4 py-1" : "px-0 py-0"
                        }`}
                      >
                        {sec.buttonText}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          case "Featured Product": {
            return (
              <div className="w-full flex justify-center" key={sec.id}>
                <div
                  className={`${
                    screenType === "mobile" ? "w-full" : "3xl:w-[80%] w-[95%]"
                  }`}
                >
                  <FeaturedProduct featuredProductSec={sec} />
                </div>
              </div>
            );
          }

          case "Rich Text": {
            return (
              <div className="w-full flex justify-center" key={sec.id}>
                <div
                  className={`${
                    screenType === "mobile" ? "w-full" : "3xl:w-[80%] w-[97%]"
                  }`}
                >
                  <RichText RichTextSection={sec} />
                </div>
              </div>
            );
          }

          case "Image banner": {
            return (
              <div className="w-full flex justify-center" key={sec.id}>
                <div
                  className={` w-full
                    // screenType === "mobile" ? 
                  `}
                >
                  <ImageBanner ImageBannerSection={sec} />
                </div>
              </div>
            );
          }

          case "Image with text": {
            return (
              <div className="w-full flex justify-center" key={sec.id}>
                <div
                  className={`${
                    screenType === "mobile" ? "w-full" : "3xl:w-[80%] w-[97%]"
                  }`}
                >
                  <ImageWithText imageWithTextSection={sec} />
                </div>
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}

export function Categories() {
  const screenType = useAppSelector(selectScreenType);
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products?limit=12");
        const data = await res.json();
        setProductsData(data.products);
      } catch (error) {
        console.log("Error Fetching products : ", error);
      } finally {
        setLoading(false); // Stop loading when data is fetched
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
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <ClipLoader color="#000" size={50} /> {/* Loading Spinner */}
            </div>
          ) : (
            productsData.map((item) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="max-w-full products"
                key={item?.id}
              >
                {/* img container */}
                <motion.div className="w-full h-auto text-left imgContainer">
                  <Image
                    src={item?.thumbnail}
                    alt="product image"
                    width={200} // Set the width of the image (e.g., 200px)
                    height={200} // Set the height of the image (e.g., 200px)
                    layout="responsive" // Makes the image responsive and adjusts automatically
                    className="object-cover productImg"
                  />
                </motion.div>
                {/* content */}
                <p className="w-full">
                  <span className="cursor-pointer">{item?.title}</span>
                </p>
                <p className="w-full mrp">
                  <span className="cursor-pointer">{item?.price}</span>
                </p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    handleProductClick(item.id);
                  }}
                  className="px-2 rounded-sm btn-Custome mb-3 mx-1.5"
                >
                  show
                </motion.button>
              </motion.div>
            ))
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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="w-[500px] h-auto text-left px-10 py-5"
            >
              <Image
                src={product?.thumbnail}
                alt="product image"
                width={100}
                height={100}
                layout="responsive"
                className="object-cover rounded-2xl hover:cursor-pointer bg-gray-200"
              />
            </motion.div>

            {/* content container */}
            <div className="mt-6 flex flex-col space-y-4">
              <motion.h1
                variants={FadeLeft(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl font-semibold"
              >
                {product.title}
              </motion.h1>
              <motion.span
                variants={FadeLeft(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl font-medium"
              >
                ${product.price}
              </motion.span>
              <motion.p
                variants={FadeLeft(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-[450px] mr-[100px] text-base"
              >
                {product.description}
              </motion.p>

              {/* quentity */}
              <motion.div
                variants={FadeLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center w-fit pb-10"
              >
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleMinus}
                  className="bg-white border p-2 border-black w-full h-full"
                >
                  <FiMinus />
                </motion.button>
                <span className="border-t bg-white border-b  h-full w-full p-2 px-4 border-black">
                  {totalProduct}
                </span>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleAdd}
                  className="bg-white border p-2 border-black h-full w-full"
                >
                  <FiPlus />
                </motion.button>
              </motion.div>

              {/* buttons */}
              <motion.div
                variants={FadeLeft(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full h-10 flex gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full addCartBtn"
                >
                  ADD TO CART
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full buyBtn"
                >
                  BUY NOW
                </motion.button>
              </motion.div>
            </div>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
