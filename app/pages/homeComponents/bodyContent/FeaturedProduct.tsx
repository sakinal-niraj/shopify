import { useAppSelector } from "@/app/redux/hooks";
import { selectScreenType } from "@/app/redux/slices/screenSizeSlice";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners"; // Import loader from react-spinners

interface Section {
  id?: string;
  content?: string;
  type?: string;
  contentType?: string;
  heading?: string;
  visible?: boolean;
  description?: string;
  slideHight?: string;
  animation?: string;
  autoplay?: string;
  tagLine?: string;
  autoplaySpeed?: number;
  buttonText?: string;
  buttonLink?: string;
  buttonText1?: string;
  buttonLink1?: string;
  totalProduct?: number;
  imgAlignment?: string;
  img?: File | string | StaticImageData;
  alignment?: string;
}

interface FeaturedProductProps {
  featuredProductSec: Section;
}

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  featuredProductSec,
}) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [totalProduct, setTotalProduct] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const showSingleProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products/${featuredProductSec?.totalProduct}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Stop loading when data is fetched
      }
    };

    showSingleProduct();
  }, [featuredProductSec]);

  const handleMinus = () => {
    if (totalProduct > 1) {
      setTotalProduct(totalProduct - 1);
    }
  };

  const handleAdd = () => {
    if (totalProduct >= 0 && totalProduct < 10) {
      setTotalProduct(totalProduct + 1);
    }
  };

  const screenType = useAppSelector(selectScreenType);

  return (
    <div className="homeBody flex w-full mb-5 pr-20 my-10">
      <div className="w-full">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <ClipLoader color="#000" size={50} /> {/* Loading Spinner */}
          </div>
        ) : product ? (
          <div
            className={`${
              screenType === "mobile" ? "" : "flex justify-evenly"
            } gap-10 w-full`}
          >
            {/* Image Container */}
            <div className="h-auto text-left px-10 py-5 w-full bg-gray-200 hover:scale-105 transfrom ease-linear duration-300">
              <Image
                src={product.thumbnail}
                alt="product image"
                width={100}
                height={100}
                layout="responsive"
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Content Container */}
            <div
              className={`${
                screenType === "screen" ? "mt-10" : "mt-10"
              } flex flex-col justify-center space-y-4 w-full pl-5`}
            >
              <h1 className="text-4xl font-semibold">{product.title}</h1>
              <span className="text-2xl font-medium">${product.price}</span>
              <p
                className={`${
                  screenType === "mobile" ? "w-[340px]" : "w-[450px]"
                } mr-[100px] text-base`}
              >
                {product.description}
              </p>

              {/* Quantity */}
              <div className="flex items-center w-fit pb-10">
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
              </div>

              {/* Buttons */}
              <div className="w-full h-10 flex gap-1">
              <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`${
                    screenType === "mobile" && "text-xs"
                  } w-full h-full addCartBtn`}
                >
                  ADD TO CART
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`${
                    screenType === "mobile" && "text-xs"
                  } w-full h-full buyBtn`}
                >
                  BUY NOW
                </motion.button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No product found.</p>
        )}
      </div>
    </div>
  );
};
