
import { Carousel } from "flowbite-react";

export default function Carrousel({images}) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {images.map((image, index) => (
          <img
            key={index}
            className="object-cover w-full h-full"
            src={image}
            alt=""
          />
        ))}
      </Carousel>
    </div>
  );
}
