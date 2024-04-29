import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SwipeBanner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full select-none"
      >
        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img
              src="https://millatsakib.github.io/img-src/Assignment10/banner/1.jpg"
              alt=""
            />
            <div className="text-white absolute text-xl md:text-3xl lg:text-5xl font-bold w-ful md:max-w-[80vw] lg:max-w[65vw] text-center">
              The world is a book, and those who do not travel read only one
              page.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img
              src="https://millatsakib.github.io/img-src/Assignment10/banner/2.jpg"
              alt=""
            />
            <div className="text-white absolute text-xl md:text-3xl lg:text-5xl font-bold w-ful md:max-w-[80vw] lg:max-w[65vw] text-center">
              To travel is to take a journey into yourself.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img
              src="https://millatsakib.github.io/img-src/Assignment10/banner/3.jpg"
              alt=""
            />
            <div className="text-white absolute text-xl md:text-3xl lg:text-5xl font-bold w-ful md:max-w-[80vw] lg:max-w[65vw] text-center">
              Traveling – it leaves you speechless, then turns you into a
              storyteller.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img
              src="https://millatsakib.github.io/img-src/Assignment10/banner/4.jpg"
              alt=""
            />
            <div className="text-white absolute text-xl md:text-3xl lg:text-5xl font-bold w-ful md:max-w-[80vw] lg:max-w[65vw] text-center">
              Travel is the only thing you buy that makes you richer.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img
              src="https://millatsakib.github.io/img-src/Assignment10/banner/5.jpg"
              alt=""
            />
            <div className="text-white absolute text-xl md:text-3xl lg:text-5xl font-bold w-ful md:max-w-[80vw] lg:max-w[65vw] text-center">
              We travel not to escape life, but for life not to escape us.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwipeBanner;
