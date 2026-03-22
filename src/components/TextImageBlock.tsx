import * as React from "react";
import { Image } from "@imagekit/react";
import { ImageIcon } from "lucide-react";

type TextImageBlockProps = {
  title: string;
  text: string;
  image: { filename: string; alt: string };
  imagePosition?: "left" | "right";
  containerClassName?: string;
  textAreaClassName?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

const TextImageBlock: React.FC<TextImageBlockProps> = ({
  title,
  text,
  image,
  imagePosition = "right",
  containerClassName = "",
  textAreaClassName = "",
  buttonLabel = "Show Project",
  onButtonClick,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-12 w-full max-w-7xl py-12 px-6 xl:p-12 ${
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
            <button
              className="px-8 py-3 bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors flex items-center justify-center font-semibold text-white"
              onClick={onButtonClick}
            >
              {buttonLabel}
            </button>
          </div>
        </article>
      </div>

      <div className="w-full xl:w-1/2 flex justify-center">
        {image.filename ? (
          <Image
            src={image.filename}
            alt={image.alt}
            width={1024}
            height={768}
            className="w-full max-h-150 object-cover rounded-xl shadow-lg"
          />
        ) : (
          <div className="w-full aspect-video max-h-150 bg-secondary/50 border-2 border-dashed border-border rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-muted-foreground font-medium flex items-center gap-2">
              <ImageIcon size={20} />
              No image available
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextImageBlock;
