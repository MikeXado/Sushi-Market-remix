import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SliderItem from "./SliderItem";

function Slider({ data }) {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        observeParents={true}
        observer={true}
        grabCursor={true}
        autoHeight={true}
        speed={800}
        pagination={{
          clickable: true,
          el: ".swiper__pagination",
          type: "bullets",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((produce) => {
          return (
            <SwiperSlide key={produce.id}>
              <SliderItem produce={produce} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper__pagination"></div>
    </>
  );
}

export default Slider;
