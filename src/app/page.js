"use client";
import { useState } from "react";
import { shadeGenerator } from "./generator";

export default function Home() {
  const [color, setColor] = useState("#84cc16");
  const shades = color ? shadeGenerator(color) : [];

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <h1 className="text-3xl mb-6">Color Shade Generator</h1>
      <input
        type="text"
        value={color}
        onChange={handleColorChange}
        className="px-4 py-2 border border-gray-300 rounded-md mb-6 text-black"
      />
      <div className="flex flex-wrap mx-auto">
        {shades.map((shade) => (
          <section
            key={shade.shade}
            className="flex justify-center flex-col items-center w-1/3 p-4"
          >
            <div
              className="flex flex-col w-16 h-16 rounded-full mb-2"
              style={{ backgroundColor: shade.hex }}
            ></div>
            <span className="text-sm">{shade.hex}</span>
          </section>
        ))}
      </div>
    </div>
  );
}
