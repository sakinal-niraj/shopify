"use client";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import logo from '@/public/images/t-shirt.jpg';

import { LiaShoppingBagSolid } from "react-icons/lia";
import Image from "next/image";
import hero1 from "@/public/images/hero1.jpg";
// import tshirt from "@/public/images/t-shirt.jpg";
import { useEffect } from "react";
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

interface Product {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
}

export function NavBar() {
  const screenType = useAppSelector(selectScreenType);
  const storeName = useAppSelector(selectStoreName);
  const storeImg = useAppSelector(selectStoreImg);
  return (
    <>
      {/* navbar */}
      <nav className="w-full rounded-lg">
        <div
          className={`flex ${
            screenType === "mobile" ? "hidden" : ""
          } items-center justify-between py-3 px-10 navBar`}
        >
          {/* left side */}
          <div className="flex items-center">
            {/* logo */}
            <div className="flex items-center gap-3">
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
            <ul className="flex ml-7 gap-6 ">
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
          <div className="flex items-center gap-5">
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
    </>
  );
}

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
  return (
    <div className="homeBody py-2  w-full">
      {/* hero section */}
      <section className="aspect-w-6 aspect-h-3 mx-10">
        <Image src={hero1} alt="Hero1" className="w-full h-full rounded-md" />
      </section>

      {/* Products section */}
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
                <div className="px-2 pb-2">
                  {/* content */}
                  <p className="w-full">
                    <span className="cursor-pointer">{item?.title}</span>
                  </p>
                  <p className="w-full mrp">
                    <span className="cursor-pointer">{item?.price}</span>
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
      </div>
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

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
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
                <button className="w-full h-full addCartBtn">ADD TO CART</button>
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
