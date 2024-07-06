"use client";
import { Button } from "empyreanui/components/ui/button";
import { Input } from "empyreanui/components/ui/input";
import { Slider } from "empyreanui/components/ui/slider";
import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { HexAlphaColorPicker } from "react-colorful";

interface ColorStop {
  color: string;
  stop: number;
}

const GradientGenerator: React.FC = () => {
  const [colorStops, setColorStops] = useState<ColorStop[]>([
    { color: "#020024", stop: 0 },
    { color: "#090979", stop: 25 },
    { color: "#00d4ff", stop: 100 },
  ]);
  const [selectedColor, setSelectedColor] = useState<string>("#090979");
  const [selectedStopIndex, setSelectedStopIndex] = useState<number | null>(1);
  const [degree, setDegree] = useState<number>(90);
  const [gradientType, setGradientType] = useState<
    | "linear"
    | "radial"
    | "conic"
    | "repeating-linear"
    | "repeating-radial"
    | "repeating-conic"
  >("linear");
  const [gradient, setGradient] = useState<string>("");

  useEffect(() => {
    const stops = colorStops
      .map(({ color, stop }) => `${color} ${stop}%`)
      .join(", ");
    const newGradient = `${gradientType}-gradient(${
      gradientType.includes("linear") ? `${degree}deg, ` : ""
    }${stops})`;
    setGradient(newGradient);
  }, [colorStops, degree, gradientType]);

  const handleAddColorStop = () => {
    const newStop = Math.round(Math.random() * 100);
    setColorStops(
      [...colorStops, { color: selectedColor, stop: newStop }].sort(
        (a, b) => a.stop - b.stop
      )
    );
  };

  const handleColorChange = (color: string) => {
    if (selectedStopIndex !== null) {
      const newColorStops = [...colorStops];
      newColorStops[selectedStopIndex].color = color;
      setColorStops(newColorStops);
    }
    setSelectedColor(color);
  };

  const handleStopChange = (index: number, stop: number) => {
    const newColorStops = [...colorStops];
    newColorStops[index].stop = stop;
    setColorStops(newColorStops.sort((a, b) => a.stop - b.stop));
  };

  const handleRemoveStop = (index: number) => {
    if (colorStops.length > 2) {
      setColorStops(colorStops.filter((_, i) => i !== index));
      setSelectedStopIndex(null);
    }
  };
  const handleSelectStop = (index: number) => {
    setSelectedStopIndex(index);
    setSelectedColor(colorStops[index].color);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Gradient Generator
      </h1>
      <p className="text-center mb-4">
        Create beautiful gradients easily by adding and adjusting color stops.
        Choose from different gradient types and customize the angle or position
        to suit your design needs.
      </p>
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <div
          className="fixed h-80 -z-1 w-screen top-72 max-md:hidden"
          style={{ background: `${gradient}` }}
        />
        <div className="bg-black/50 backdrop-blur-xl backdrop-blur-safari p-6 rounded-lg shadow-lg w-full max-w-5xl relative z-10 md:mt-10 mt-11">
          <div
            className="absolute flex justify-center items-center md:w-[95%] -top-[50px] max-md:left-0 w-full h-32 mb-4 rounded-lg border border-gray-300 overflow-hidden"
            style={{ background: gradient }}></div>
          <div className="mt-20">
            <div className="my-4 flex justify-center">
              <code className="p-2 border border-gray-300 mx-auto rounded-lg ">
                background: {gradient}
              </code>
            </div>
            <div className="flex gap-6 flex-col md:flex-row justify-between mb-4">
              {/* color picker */}
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <HexAlphaColorPicker
                  color={selectedColor}
                  onChange={handleColorChange}
                />
                <button
                  onClick={handleAddColorStop}
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
                  Add Color
                </button>
              </div>
              {/* gradientType */}
              <div className="w-72 h-full max-md:mx-auto">
                <label className="mb-2 font-semibold max-md:text-center">
                  Gradient Type
                </label>
                <div className="flex flex-col gap-1">
                  {[
                    "linear",
                    "radial",
                    "conic",
                    "repeating-linear",
                    "repeating-radial",
                    "repeating-conic",
                  ].map((type) => (
                    <Button
                      key={type}
                      className={`px-4 py-2 rounded hover:bg-primary/20 ${
                        gradientType === type
                          ? "text-black"
                          : "bg-transparent border border-solid border-primary text-primary"
                      }`}
                      onClick={() => setGradientType(type as any)}>
                      {type.charAt(0).toUpperCase() +
                        type.slice(1).replace(/-/g, " ")}
                    </Button>
                  ))}
                </div>
              </div>
              {/* added colors list */}
              <div className="relative w-full mb-4 rounded-lg border md:h-[300px] md:overflow-scroll">
                {colorStops.map((colorStop, index) => (
                  <div
                    key={`${colorStop.color}-${index}`}
                    className="border border-solid border-white/10 hover:border-primary cursor-pointer my-2 p-2 bg-white/10 rounded-lg"
                    onClick={() => handleSelectStop(index)}>
                    <div className="flex gap-3">
                      <div
                        className="size-8 max-md:min-w-14 rounded-lg"
                        style={{ backgroundColor: colorStop.color }}
                      />
                      <Input
                        className="border-2 bg-transparent font-mono border-solid text-center border-white/10 rounded-lg grow h-8 min-w-14 px-2 flex items-center justify-center"
                        value={`${colorStop.color}`}
                        onChange={(e) => handleColorChange(e.target.value)}
                      />
                      <code className="border-2 border-solid text-end border-white/10 rounded-lg h-8 min-w-14 px-2 flex items-center justify-center w-16">{`${colorStop.stop}%`}</code>
                      <div className="size-8 flex items-center justify-center">
                        <div
                          className="rounded-lg hover:text-red-500 border-2 border-transparent border-solid hover:border-red-500 hover:bg-red-500/30 p-1"
                          onClick={() => handleRemoveStop(index)}>
                          <X />
                        </div>
                      </div>
                    </div>
                    <Slider
                      className="my-4 border border-solid border-primary rounded-xl"
                      value={[colorStop.stop]}
                      onValueChange={(value) =>
                        handleStopChange(index, Number(value))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {gradientType.includes("linear") ? (
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <label className="mb-1 font-semibold">{`Rotation ${degree}°`}</label>
              <Slider
                content={`Rotation${degree}°`}
                className="my-4 border border-solid border-primary rounded-xl"
                max={360}
                value={[degree]}
                onValueChange={(value) => setDegree(Number(value))}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GradientGenerator;
