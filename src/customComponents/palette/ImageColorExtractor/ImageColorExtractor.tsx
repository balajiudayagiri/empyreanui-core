import { Button } from "empyreanui/components/ui/button";
import { Slider } from "empyreanui/components/ui/slider";
import { rgbStringToAllColors } from "empyreanui/utils";
import { Copy } from "lucide-react";
import React, {
  useState,
  CSSProperties,
  DragEvent,
  ChangeEvent,
  MouseEvent,
} from "react";

interface Color {
  color: number[];
  count: number;
}

const ImageColorExtractor: React.FC = () => {
  const isDarkMode = true;
  const [image, setImage] = useState<string | null>(null);
  const [colors, setColors] = useState<string[]>([]);
  const [contextMenuStyle, setContextMenuStyle] = useState<CSSProperties>({
    display: "none",
    position: "absolute",
  });
  const [contextMenuPosition, setContextMenuPosition] = useState({
    top: 0,
    left: 0,
  });
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(10); // Default scale value

  const onDrop = (
    event: DragEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    const file =
      (event as DragEvent<HTMLInputElement>).dataTransfer?.files[0] ||
      (event as ChangeEvent<HTMLInputElement>).target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        setImage(result);
        extractColors(result);
      };

      reader.readAsDataURL(file);
    }
  };

  const extractColors = (imageUrl: string) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) return;

      canvas.width = img.width;
      canvas.height = img.height;

      context.drawImage(img, 0, 0, img.width, img.height);

      const scaledWidth = Math.floor(img.width / scale);
      const scaledHeight = Math.floor(img.height / scale);

      const imageData = context.getImageData(0, 0, img.width, img.height).data;

      const colorMap: Record<string, number> = {};

      for (let y = 0; y < img.height; y += scale) {
        for (let x = 0; x < img.width; x += scale) {
          const index = (y * img.width + x) * 4;
          const color = [
            imageData[index],
            imageData[index + 1],
            imageData[index + 2],
          ];
          const colorString = color.join(",");

          if (!colorMap[colorString]) {
            colorMap[colorString] = 1;
          } else {
            colorMap[colorString]++;
          }
        }
      }

      const colorArray: Color[] = Object.keys(colorMap).map((colorString) => ({
        color: colorString.split(",").map(Number),
        count: colorMap[colorString],
      }));

      colorArray.sort((a, b) => b.count - a.count);

      const topColors = colorArray.slice(0, 10);

      setColors(topColors.map((item) => `rgb(${item.color.join(",")})`));
    };
  };

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value).then(
      () => {
        console.log("Copied to clipboard:", value);
        hideContextMenu();
      },
      (error) => {
        console.error("Unable to copy to clipboard", error);
      }
    );
  };

  const showContextMenu = (
    event: MouseEvent<HTMLDivElement>,
    color: string
  ) => {
    event.preventDefault();

    const position = {
      top: event.clientY,
      left: event.clientX,
    };

    setContextMenuPosition(position);
    setContextMenuStyle({ display: "block" });
    setSelectedColor(color);
  };

  const hideContextMenu = () => {
    setContextMenuStyle({ display: "none" });
    setSelectedColor(null);
  };

  const handleSliderChange = (value: number) => {
    setScale(Number(value));
    if (image) {
      extractColors(image);
    }
  };

  const handleReupload = () => {
    setImage(null);
    setColors([]);
  };

  return (
    <div className={"min-h-screen p-5"}>
      <div className="container mx-auto">
        {!image ? (
          <div className="flex flex-col items-center">
            <label htmlFor="fileInput" className="cursor-pointer w-full">
              <div className="border-dashed border-4 border-gray-400 hover:border-primary p-10 mb-6 rounded-lg text-center hover:bg-foreground/10 transition-colors">
                <p className="text-xl font-semibold mb-2">Upload an Image</p>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  className="hidden"
                  onChange={onDrop}
                />
                <p className="text-gray-500">
                  Drag and drop or click to upload
                </p>
              </div>
            </label>
            <div className="text-gray-500 text-center">
              <p>
                Use this tool to extract the most prominent colors from your
                image.
              </p>
              <p>
                Simply upload an image and adjust the scale slider to control
                the precision of color extraction.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium">Adjust Scale</label>
              <Slider
                max={100}
                defaultValue={[scale]}
                onValueChange={(e) => handleSliderChange(e[0])}
                className="w-full mt-2"
              />
              <p className="text-gray-500 mt-2">
                Use the slider to adjust the scale of color extraction. Lower
                values increase precision.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex flex-col items-center max-md:mx-auto">
                <img
                  src={image}
                  alt="Selected"
                  className="max-w-full size-72 border-dashed border-4 border-gray-400 p-4 rounded-lg"
                />
                <Button onClick={handleReupload} className="mt-4">
                  Upload a New Image
                </Button>
                <p className="text-gray-500 mt-2">Uploaded Image</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                {colors.map((color, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      style={{ backgroundColor: color }}
                      className="w-full h-32 rounded-lg border border-gray-400 shadow-md transform hover:scale-105 transition-transform"></div>
                    <div className="flex flex-col items-start justify-center mt-2">
                      <span className="flex border rounded-lg px-2 w-fit items-center gap-3 hover:text-primary text-xs lowercase font-bold">
                        <span>{rgbStringToAllColors(color).hex}</span>
                        <Button
                          onClick={() =>
                            copyToClipboard(rgbStringToAllColors(color).hex)
                          }
                          className="bg-transparent hover:bg-transparent text-foreground hover:text-primary size-fit transition-colors rounded-full">
                          <Copy size={16} />
                        </Button>
                      </span>
                      <span className="flex border rounded-lg px-2 w-fit items-center gap-3 hover:text-primary text-xs lowercase font-bold mt-1">
                        <span>{rgbStringToAllColors(color).rgb}</span>
                        <Button
                          onClick={() =>
                            copyToClipboard(rgbStringToAllColors(color).rgb)
                          }
                          className="bg-transparent hover:bg-transparent text-foreground hover:text-primary size-fit transition-colors rounded-full">
                          <Copy size={16} />
                        </Button>
                      </span>
                      <span className="flex border rounded-lg px-2 w-fit items-center gap-3 hover:text-primary text-xs lowercase font-bold mt-1">
                        <span>{rgbStringToAllColors(color).hsl}</span>
                        <Button
                          onClick={() =>
                            copyToClipboard(rgbStringToAllColors(color).hsl)
                          }
                          className="bg-transparent hover:bg-transparent text-foreground hover:text-primary size-fit transition-colors rounded-full">
                          <Copy size={16} />
                        </Button>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageColorExtractor;
