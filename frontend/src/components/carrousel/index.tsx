"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CarrouselArrow from "../buttons/carrousel-arrow";

export default function ProductCarrousel({ featured }: { featured?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const handleNext = () => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? prevIndex : prevIndex + 1
    );
  };
  const handlePrev = () => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };
  return (
    <div className="section-content relative ">
      <div
        className="product-card-container "
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {products.map((product) => (
          <div
            key={product}
            className={`product-card ${featured && "featured"}`}
          >
            <div className="text-container">
              <h1>Product</h1>
              <p>From $999 or $49/mo.</p>
            </div>
            <Image
              src={`/images/products/macbook-pro.jpeg`}
              alt={product.toString()}
              width={300}
              height={300}
              // className="object-fill w-full h-full"
            />
          </div>
        ))}
      </div>
      <CarrouselArrow
        onPress={handlePrev}
        xOffset="left-16"
        direction=""
        isDisabled={currentIndex === 0}
      />
      <CarrouselArrow
        onPress={handleNext}
        xOffset="right-28"
        direction="rotate-180"
        isDisabled={currentIndex === products.length - 3}
      />
    </div>
  );
}
