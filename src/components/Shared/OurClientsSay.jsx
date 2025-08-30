import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; // Swiper 11+ style
import { StarIcon } from "@heroicons/react/24/solid";

import client1 from "../../assets/clients/download (1).jpg";
import client2 from "../../assets/clients/download.jpg";
import client3 from "../../assets/clients/images (1).jpg";
import client4 from "../../assets/clients/images.jpg";

const clients = [
  { image: client1, name: "John Doe", description: "Client review 1", rating: 5 },
  { image: client2, name: "Jane Smith", description: "Client review 2", rating: 4 },
  { image: client3, name: "Michael Brown", description: "Client review 3", rating: 5 },
  { image: client4, name: "Emily Johnson", description: "Client review 4", rating: 4 },
];

const OurClientsSay = () => (
  <section className="py-16 bg-[#a5e792]">
    <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#48B828] mb-4">
        Our Clients Say
      </h2>
      <p className="text-gray-600 mb-12">
        Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{client.name}</h3>
              <p className="text-gray-600 mb-4">{client.description}</p>
              <div className="flex gap-1">
                {Array.from({ length: client.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default OurClientsSay;
