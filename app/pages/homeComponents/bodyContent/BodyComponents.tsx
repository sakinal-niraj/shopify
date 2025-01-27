"use client";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Image from "next/image";
import hero1 from "@/public/images/hero1.jpg";
// import tshirt from "@/public/images/t-shirt.jpg";
import { useEffect } from "react";
import { useState } from "react";

interface Product {
  id: number;
  thumbnail: string;
  title: string;
}

export function NavBar() {
  return (
    <>
      {/* navbar */}
      <nav className="w-full rounded-lg">
        <div className={`flex items-center justify-between py-3 px-10 navBar`}>
          {/* left side */}
          <div className="flex items-center">
            {/* logo */}
            <h1 className="mr-3 text-xl hover:text-black">My store</h1>

            {/* links */}
            <ul className="flex ml-7 gap-6 text-sm">
              <li className="relative group cursor-pointer text-[14px]">
                Home
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
              <li className="relative group cursor-pointer text-[14px]">
                Mens Clothing
                <span className="absolute -bottom-1 left-0 bg-gray-600 group-hover:bg-black w-0 h-[2px] group-hover:w-full duration-700" />
              </li>
              <li className="relative group cursor-pointer text-[14px]">
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

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://dummyjson.com/products?limit=10");
      const data = await res.json();
      setProductsData(data.products);
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
        <div className="mt-10 grid grid-cols-4 text-center gap-10">
          {/* single product container */}
          {productsData.map((item) => (
            <div className="max-w-full" key={item.id}>
              {/* img container */}
              <div className="w-full h-auto products">
                <Image
                  src={item.thumbnail}
                  alt="product image"
                  width={200} // Set the width of the image (e.g., 200px)
                  height={200} // Set the height of the image (e.g., 200px)
                  layout="responsive" // Makes the image responsive and adjusts automatically
                  className="object-cover"
                />
              </div>
              {/* content */}
              <p className="">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  return <div className="homeBody">contact</div>;
}

export function About() {
  return <div className="homeBody">about us</div>;
}
