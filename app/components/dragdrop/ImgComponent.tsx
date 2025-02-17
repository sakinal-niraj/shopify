import { ChangeEvent } from "react";
import Image, { StaticImageData } from "next/image";
import hero2 from "@/public/images/t-shirt.jpg";
interface ImgComponentProps {
  label?: string;
  previewImg?: string | StaticImageData | null;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputId?: string;
}

const ImgComponent: React.FC<ImgComponentProps> = ({
  label,
  previewImg,
  onChange,
  inputId,
}) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <h1>{label || "Slider Img"}</h1>
      <label
        htmlFor={inputId}
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        {previewImg ? (
          <Image
            src={previewImg}
            alt="Uploaded Preview"
            width={100}
            height={100}
            unoptimized
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <Image
            src={hero2}
            alt="Fallback Preview"
            width={100}
            height={50}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        <input
          id={inputId}
          type="file"
          className="hidden"
          onChange={onChange}
          accept="image/*"
        />
      </label>
    </div>
  );
};

export default ImgComponent;
