"use client";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Image from "next/image";
import hero1 from "@/public/images/hero1.jpg";
// import tshirt from "@/public/images/t-shirt.jpg";
import { useEffect } from "react";
import { useState } from "react";
import { useAppSelector } from "@/app/redux/hooks";
import { selectScreenType } from "@/app/redux/slices/screenSizeSlice";
import { selectStoreName } from "@/app/redux/selectors/categorySelector";

interface Product {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
}

export function NavBar() {
    const screenType = useAppSelector(selectScreenType);
    const storeName = useAppSelector(selectStoreName);
  return (
    <>
      {/* navbar */}
      <nav className="w-full rounded-lg">
        <div className={`flex ${screenType === 'mobile' ? 'hidden':''} items-center justify-between py-3 px-10 navBar`}>
          {/* left side */}
          <div className="flex items-center">
            {/* logo */}
            <h1 className="mr-3 mb-1 text-xl hover:text-black">{storeName}</h1>

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
  return (
    <div className="homeBody py-2">
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
                {/* content */}
                <p className="w-full">
                  <span className="cursor-pointer">{item?.title}</span>
                </p>
                <p className="w-full mrp">
                  <span className="cursor-pointer">{item?.price}</span>
                </p>
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
  return <div className="homeBody flex flex-col"></div>;
}
