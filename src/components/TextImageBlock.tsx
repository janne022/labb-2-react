import * as React from "react";
import { Image } from "@imagekit/react";

type TextImageBlockProps = {
  title: string;
  text: string;
  image: { filename: string; alt: string };
  imagePosition?: "left" | "right";
  containerClassName?: string;
  textAreaClassName?: string;
  buttonLabel?: string;
  buttonLink?: string;
};

const TextImageBlock: React.FC<TextImageBlockProps> = ({
  title,
  text,
  image,
  imagePosition = "right",
  containerClassName = "",
  textAreaClassName = "",
  buttonLabel = "Show Project",
  buttonLink = "#",
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-12 text-black w-full max-w-7xl mx-auto py-12 px-6 xl:p-12 ${
        imagePosition === "left" ? "xl:flex-row-reverse" : "xl:flex-row"
      } ${containerClassName}`.trim()}
    >
      <div
        className={`w-full xl:w-1/2 flex flex-col justify-center ${textAreaClassName}`.trim()}
      >
        <article className="flex flex-col items-start w-full">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg xl:text-xl text-gray-600 mb-8">{text}</p>

          <div>
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors flex items-center justify-center font-semibold text-white"
            >
              {buttonLabel}
            </a>
          </div>
        </article>
      </div>

      <div className="w-full xl:w-1/2 flex justify-center">
        <Image
          src={image.filename}
          alt={image.alt}
          width={1024}
          height={768}
          className="w-full max-h-150 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default TextImageBlock;
