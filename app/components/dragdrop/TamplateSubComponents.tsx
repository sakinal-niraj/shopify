import {
  tamplateFeaturedCollectionButtonText,
  tamplateFeaturedCollectionContent,
  tamplateFeaturedCollectionDescription,
  tamplateFeaturedCollectionTotalProduct,
  tamplateRicthTextAlignment,
  tamplateRicthTextDesc,
  tamplateRicthTextFirstButton,
  tamplateRicthTextFirstButtonLink,
  tamplateRicthTextHeading,
  tamplateRicthTextSecondButton,
  tamplateRicthTextSecondButtonLink,
  tamplateRicthTextTagline,
  tamplateSelectChanger,
  tamplateSlideAnimation,
  tamplateSlideAutoplay,
  tamplateSlideAutoplaySpeed,
  tamplateSlideContent,
  tamplateSlideDesc,
  tamplateSlideImage,
} from "@/app/redux/slices/tamplateSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { SelectType } from "./SelectType";
import React, { useEffect, useState } from "react";
import { InputSection } from "../InputSection";
import hero2 from "@/public/images/t-shirt.jpg";
import Image, { StaticImageData } from "next/image";
import { TextArea } from "../TextArea";
import Select from "react-select";

const slideHight = [
  { id: 1, name: "Small", value: "9/3.5" },
  { id: 2, name: "Medium", value: "9 / 5" },
  { id: 3, name: "Large", value: "9/6" },
];

const slideAnimation = [
  { id: 1, name: "none", value: "none" },
  { id: 2, name: "slide", value: "slide" },
  { id: 3, name: "fade", value: "fade" },
];

const slideAutoplay = [
  { id: 1, name: "on", value: "on" },
  { id: 2, name: "off", value: "off" },
];

// Slider main component
export const Slider = ({ secId }: { secId: string }) => {
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );
  const section = tamplateSection.find((sec) => sec.id === secId);

  // state for the autoplay speed
  const [speed, setSpeed] = useState(1000);

  // slider height handler
  const handleSlideHeight = (
    sectionId: string,
    height: string,
    size: string
  ) => {
    document.documentElement.style.setProperty("--slider-Height", size);
    dispatch(tamplateSelectChanger({ sectionId, height }));
  };

  // slider animation type handler
  const handleAnimate = (sectionId: string, animate: string) => {
    dispatch(tamplateSlideAnimation({ sectionId, animate }));
  };

  // slider autoplay hanlder
  const handleAutoplay = (sectionId: string, autoplay: string) => {
    dispatch(tamplateSlideAutoplay({ sectionId, autoplay }));
  };

  console.log(section?.autoplaySpeed);
  return (
    <div className="flex gap-2 mt-5 px-2 w-full flex-col gap-y-5">
      {/* Slide Show */}
      <SelectType
        title={"SlideShow"}
        options={slideHight}
        onClick={handleSlideHeight}
        sectionType={section?.id}
        sectionName={section?.slideHight}
      />

      {/* Animation style */}
      <SelectType
        title={"Animation style"}
        options={slideAnimation}
        onClick={handleAnimate}
        sectionType={section?.id}
        sectionName={section?.animation}
      />

      {/* Autoplay */}
      <SelectType
        title={"Autoplay"}
        options={slideAutoplay}
        onClick={handleAutoplay}
        sectionType={section?.id}
        sectionName={section?.autoplay}
      />

      {/* Auto speed */}
      <div className="flex justify-between items-center">
        <span className="w-[50%]">Autoplay speed</span>
        <div className="flex my-4 relative flex-col">
          <input
            type="range"
            min={1000}
            max={5000}
            step={1000}
            onChange={(e) => {
              const newSpeed = parseInt(e.target.value, 10);
              setSpeed(newSpeed);
              if (section?.id) {
                dispatch(
                  tamplateSlideAutoplaySpeed({
                    sectionId: section.id,
                    autoplaySpeed: newSpeed,
                  })
                );
              }
            }}
            value={speed}
            className={`w-full h-1 bg-gray-300 rounded-lg hover:cursor-grab  active:cursor-grabbing relative`}
          />
          <div className={"flex  w-full top-1 absolute left-1"}>
            <span className="">1</span>
            <span className="pl-[21px]">2</span>
            <span className="pl-[19.5px]">3</span>
            <span className="pl-[18.8px]">4</span>
            <span className="pl-[20px]">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// slider subcomponent
interface SliderSubProps {
  secId: string;
  subSecId: string;
}

export const SliderSub: React.FC<SliderSubProps> = ({ secId, subSecId }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("slider");
  const [desc, setDesc] = useState("hello world");
  const [previewImg, setPreviewImg] = useState<string | StaticImageData | null>(
    null
  );

  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );

  // Find the section and then the subSection within that section
  const section = tamplateSection.find((sec) => sec.id === secId);
  const subSection = section?.subSections.find((sub) => sub.id === subSecId);

  useEffect(() => {
    if (subSection && subSection.content !== undefined) {
      setContent(subSection.content);
    }

    if (subSection && subSection.description !== undefined) {
      setDesc(subSection.description);
    }
    if (subSection && subSection.sliderImg) {
      if (subSection.sliderImg instanceof File) {
        // Create an object URL for the File and clean up later
        const objectUrl = URL.createObjectURL(subSection.sliderImg);
        setPreviewImg(objectUrl);
        return () => {
          URL.revokeObjectURL(objectUrl);
        };
      } else {
        setPreviewImg(subSection.sliderImg);
      }
    }
  }, [subSection]);

  // Handle changes to the content input
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    if (section) {
      dispatch(
        tamplateSlideContent({
          sectionId: secId,
          subSectionId: subSecId,
          content: newContent,
        })
      );
    }
  };

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDesc = e.target.value;
    setDesc(newDesc);
    if (section) {
      dispatch(
        tamplateSlideDesc({
          sectionId: secId,
          subSectionId: subSecId,
          description: newDesc,
        })
      );
    }
  };

  // Handle image upload and store in Redux
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImg(previewUrl);
      dispatch(
        tamplateSlideImage({
          sectionId: secId,
          subSectionId: subSecId,
          image: previewUrl, // now a string, which is serializable
        })
      );
    }
  };
  return (
    <div className="mt-8 mx-2">
      <div className="flex flex-col gap-y-6">
        {/* Slider img */}

        <div className="flex flex-col justify-center w-full">
          <h1>Slider Img </h1>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            {previewImg ? (
              <Image
                src={previewImg}
                alt="Uploaded Preview"
                width={100}
                height={100}
                unoptimized
                className="object-cover rounded-lg"
              />
            ) : (
              <Image
                src={hero2}
                alt="Uploaded Preview"
                width={100}
                height={100}
                className="object-cover rounded-lg"
              />
            )}
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Slider Content */}
        <InputSection
          label="Title"
          placeholder="Enter Title"
          value={content}
          onChange={handleContentChange}
        />

        {/* Slider Description */}
        <InputSection
          label="Description"
          placeholder="write something"
          value={desc}
          onChange={handleDescChange}
        />
      </div>
    </div>
  );
};

export const FeaturedCollection = ({ secId }: { secId: string }) => {
  const [content, setContent] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);
  const [buttonText, setButtonText] = useState<string | null>(null);
  const [numProduct, setNumProduct] = useState<number>(1);

  // dispatcher
  const dispatch = useDispatch();
  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );

  const section = tamplateSection.find((sec) => sec.id === secId);
  useEffect(() => {
    if (section?.content) {
      setContent(section.content);
    }

    if (section?.description) {
      setDesc(section.description);
    }

    if (section?.buttonText) {
      setButtonText(section.buttonText);
    }

    if (section?.totalProduct) {
      setNumProduct(section.totalProduct);
    }
  }, [section]);

  // handle title change
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    dispatch(
      tamplateFeaturedCollectionContent({
        sectoinId: secId,
        content: newContent,
      })
    );
    console.log(section?.content);
  };

  // handle description change
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDesc = e.target.value;
    setDesc(newDesc);
    dispatch(
      tamplateFeaturedCollectionDescription({
        sectionId: secId,
        description: newDesc,
      })
    );
  };

  // handle buttontext change
  const handleButtonTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newButtonText = e.target.value;
    setButtonText(newButtonText);
    dispatch(
      tamplateFeaturedCollectionButtonText({
        sectionId: secId,
        buttonText: newButtonText,
      })
    );
  };

  interface ProductOptions {
    label: string;
    value: number;
  }

  const productOptions: ProductOptions[] = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
  ];

  // handle total product number change
  const handleProductNumberChange = (selectedOption: ProductOptions | null) => {
    if (selectedOption) {
      const newProductNumber = selectedOption.value;
      setNumProduct(newProductNumber);
      // document.documentElement.style.setProperty(
      //   "--number-of-product-grid",newProductNumber.toString(),
      // )
      dispatch(
        tamplateFeaturedCollectionTotalProduct({
          sectionId: secId,
          totalProduct: newProductNumber,
        })
      );
    }
  };
  return (
    <div className="flex gap-2 mt-5 px-2 w-full flex-col gap-y-6">
      {/* Featured colleciton Title */}
      <InputSection
        label="Title"
        placeholder="Enter Title for Featured collections"
        value={content || ""}
        onChange={handleTitleChange}
      />

      {/* Featured collection Description */}
      <TextArea
        label="Description"
        placeholder="write something"
        value={desc || ""}
        onChange={handleDescriptionChange}
      />

      {/* Featured collection Number or product on desktop */}
      <div>
        <label htmlFor="">Number of products on desktop</label>
        <Select<ProductOptions>
          options={productOptions}
          value={productOptions.find((t) => t.value === numProduct)}
          onChange={handleProductNumberChange}
        />
      </div>

      {/* Featured collection button text */}
      <InputSection
        label="Button Text"
        placeholder="Enter text in button"
        value={buttonText || ""}
        onChange={handleButtonTextChange}
      />
    </div>
  );
};

export const RichTextSection = ({ secId }: { secId: string }) => {
  const { tamplateSection } = useSelector(
    (state: RootState) => state.tamplateSection
  );
  const richTextSection = tamplateSection.find((s) => s.id === secId);
  const dispatch = useDispatch();
  const richAlignment = [
    { id: 1, name: "start", value: "start" },
    { id: 2, name: "center", value: "center" },
    { id: 3, name: "end", value: "end" },
  ];

  const [heading, setHeading] = useState<string | null>();
  const [tagline, setTagline] = useState<string | null>();
  const [description, setDescription] = useState<string | null>();
  const [firstButton, setFirstButton] = useState<string | null>();
  const [firstButtonLink, setFirstButtonLink] = useState<string | null>();
  const [secondButton, setSecondButton] = useState<string | null>();
  const [secondButtonLink, setSecondButtonLink] = useState<string | null>();

  useEffect(() => {
    if (richTextSection?.heading) {
      setHeading(richTextSection.heading);
    }

    if (richTextSection?.tagLine) {
      setTagline(richTextSection.tagLine);
    }

    if (richTextSection?.description) {
      setDescription(richTextSection.description);
    }

    if (richTextSection?.buttonText) {
      setFirstButton(richTextSection.buttonText);
    }

    if (richTextSection?.buttonLink) {
      setFirstButtonLink(richTextSection.buttonLink);
    }

    if (richTextSection?.buttonText1) {
      setSecondButton(richTextSection.buttonText1);
    }

    if (richTextSection?.buttonLink1) {
      setSecondButtonLink(richTextSection.buttonLink1);
    }
  }, [richTextSection]);

  // handle rich text alignment
  const handleAlignment = (sectionId: string, alignment: string) => {
    dispatch(tamplateRicthTextAlignment({ sectionId, alignment }));
  };

  // handle heading change
  const handleHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeading = e.target.value;
    setHeading(newHeading);
    dispatch(
      tamplateRicthTextHeading({ sectionId: secId, heading: newHeading })
    );
  };

  // handle Tagline change
  const handleTaglineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTagline = e.target.value;
    setTagline(newTagline);
    dispatch(
      tamplateRicthTextTagline({ sectionId: secId, tagline: newTagline })
    );
  };

  // handle Description text change
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDesc = e.target.value;
    setDescription(newDesc);
    dispatch(tamplateRicthTextDesc({ sectionId: secId, desc: newDesc }));
  };

  // handle first button text change
  const handleFirstButtonTextChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFirstButtonText = e.target.value;
    setFirstButton(newFirstButtonText);
    dispatch(
      tamplateRicthTextFirstButton({
        sectionId: secId,
        firstButtonText: newFirstButtonText,
      })
    );
  };

  // handle first button link change
  const handleFirstButtonLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newButtonLink = e.target.value;
    setFirstButtonLink(newButtonLink);
    dispatch(
      tamplateRicthTextFirstButtonLink({
        sectionId: secId,
        firstButtonLink: newButtonLink,
      })
    );
  };

  // handle second button text change
  const handleSecondButtonTextChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSecondButtonText = e.target.value;
    setSecondButton(newSecondButtonText);
    dispatch(
      tamplateRicthTextSecondButton({
        sectionId: secId,
        secondButtonText: newSecondButtonText,
      })
    );
  };

  // handle second button link change
  const handleSecondButtonLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newButtonLink = e.target.value;
    setSecondButtonLink(newButtonLink);
    dispatch(
      tamplateRicthTextSecondButtonLink({
        sectionId: secId,
        secButtonLink: newButtonLink,
      })
    );
  };
  return (
    <div className="flex gap-2 mt-5 px-2 w-full flex-col gap-y-5">
      {/* Rich text alignment */}
      <SelectType
        title={"SlideShow"}
        options={richAlignment}
        onClick={handleAlignment}
        sectionType={richTextSection?.id}
        sectionName={richTextSection?.alignment}
      />

      {/* Rich text Heading */}
      <InputSection
        label="Title"
        placeholder="Etner title here"
        value={heading || ""}
        onChange={handleHeadingChange}
      />

      {/* Rich text tagline */}
      <InputSection
        label="Tagline"
        placeholder="Enter tag line here"
        value={tagline || ""}
        onChange={handleTaglineChange}
      />

      {/* Rich text TextArea */}
      <TextArea
        label="Description"
        placeholder="Enter description here"
        value={description || ""}
        onChange={handleDescriptionChange}
      />

      {/* Richtext first button text */}
      <InputSection
        label="First Button Text"
        placeholder="Enter Text in first button"
        value={firstButton || ""}
        onChange={handleFirstButtonTextChange}
      />

      {/* Richtext first button link */}
      <InputSection
        label="First button link"
        placeholder="Paste First button link url here"
        value={firstButtonLink || ""}
        onChange={handleFirstButtonLinkChange}
      />

      {/* Richtext second button text */}
      <InputSection
        label="Second Button Text"
        placeholder="Enter text in second button"
        value={secondButton || ""}
        onChange={handleSecondButtonTextChange}
      />

      {/* Richtext secon button link */}
      <InputSection
        label="Second button link"
        placeholder="paste Second button link url here"
        value={secondButtonLink || ""}
        onChange={handleSecondButtonLinkChange}
      />
    </div>
  );
};
