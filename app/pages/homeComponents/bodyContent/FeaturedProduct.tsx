// import { useAppSelector } from "@/app/redux/hooks";
// import { selectProductId } from "@/app/redux/slices/pageSlice";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

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
  

export const FeaturedProduct:React.FC<FeaturedProductProps> = ({
    featuredProductSec
})=>{
    // const productId = useAppSelector(selectProductId);
      const [product, setProduct] = useState<Product | null>();
      const [totalProduct, setTotalProduct] = useState<number | null>(1);
      useEffect(() => {
        const showSingleProduct = async () => {
            console.log(featuredProductSec.totalProduct);
          try {
            const res = await fetch(`https://dummyjson.com/products/${featuredProductSec?.totalProduct}`);
            const data = await res.json();
            setProduct(data);
          } catch (error) {
            console.log(error);
          }
        };
    
         showSingleProduct();
      }, [featuredProductSec]);
    
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