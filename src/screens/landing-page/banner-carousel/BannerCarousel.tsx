import { ReactElement } from "react";
import Slider from "react-slick";
// import { styled } from "@mui/material/styles";

export const BannerCarousel = (): ReactElement => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/8970c4cb-8e5c-4f82-9328-3ea820ecdcff/a6d10fa8-9a09-4fe1-8b84-ddd2ac282142_rw_1920.jpg?h=c07a0cb334fc4d2302725e69274e5132" />
        </div>
        <div>
          <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/8970c4cb-8e5c-4f82-9328-3ea820ecdcff/a6d10fa8-9a09-4fe1-8b84-ddd2ac282142_rw_1920.jpg?h=c07a0cb334fc4d2302725e69274e5132" />
        </div>
        <div>
          <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/8970c4cb-8e5c-4f82-9328-3ea820ecdcff/a6d10fa8-9a09-4fe1-8b84-ddd2ac282142_rw_1920.jpg?h=c07a0cb334fc4d2302725e69274e5132" />
        </div>
        <div>
          <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/8970c4cb-8e5c-4f82-9328-3ea820ecdcff/a6d10fa8-9a09-4fe1-8b84-ddd2ac282142_rw_1920.jpg?h=c07a0cb334fc4d2302725e69274e5132" />
        </div>
        <div>
          <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/8970c4cb-8e5c-4f82-9328-3ea820ecdcff/a6d10fa8-9a09-4fe1-8b84-ddd2ac282142_rw_1920.jpg?h=c07a0cb334fc4d2302725e69274e5132" />
        </div>
        <div>
          <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/8970c4cb-8e5c-4f82-9328-3ea820ecdcff/a6d10fa8-9a09-4fe1-8b84-ddd2ac282142_rw_1920.jpg?h=c07a0cb334fc4d2302725e69274e5132" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;
