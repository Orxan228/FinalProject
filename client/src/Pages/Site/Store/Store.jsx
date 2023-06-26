import React from "react";
import "./Store.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineShoppingCart } from "react-icons/ai"
import Slider from "react-slick";

const Store = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settingsNews = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="store">
      <div className="store__filter">
        <Slider className="store__filterCarousel" {...settings}>
          <div className="store__filterCarousel--box store__filterCarousel--box1">
            <div className="store__filterCarousel--boxTop">
              {" "}
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blade-16_200x150.png"
                alt=""
              />
            </div>
            <div className="store__filterCarousel--boxBottom">
              <p>Laptops</p>
            </div>
          </div>
          <div className="store__filterCarousel--box store__filterCarousel--box2">
            <div className="store__filterCarousel--boxTop">
              {" "}
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_components_icon_188x150.png"
                alt=""
              />
            </div>
            <div className="store__filterCarousel--boxBottom">
              <p>Components</p>
            </div>
          </div>
          <div className="store__filterCarousel--box store__filterCarousel--box3">
            <div className="store__filterCarousel--boxTop">
              {" "}
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-basilisk-v3-pro_90x150.png"
                alt=""
              />
            </div>
            <div className="store__filterCarousel--boxBottom">
              <p>Mice</p>
            </div>
          </div>
          <div className="store__filterCarousel--box store__filterCarousel--box4">
            <div className="store__filterCarousel--boxTop">
              {" "}
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blackwidow-v4-pro_168x150.png"
                alt=""
              />
            </div>
            <div className="store__filterCarousel--boxBottom">
              <p>Keyboards</p>
            </div>
          </div>
          <div className="store__filterCarousel--box store__filterCarousel--box5">
            <div className="store__filterCarousel--boxTop">
              {" "}
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_audio_icon_168x150.png"
                alt=""
              />
            </div>
            <div className="store__filterCarousel--boxBottom">
              <p>Audio</p>
            </div>
          </div>
          <div className="store__filterCarousel--box store__filterCarousel--box6">
            <div className="store__filterCarousel--boxTop">
              {" "}
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-kiyo-pro-ultra_118x150.png"
                alt=""
              />
            </div>
            <div className="store__filterCarousel--boxBottom">
              <p>Content Creation</p>
            </div>
          </div>
          <div className="store__filterCarousel--box store__filterCarousel--box7">
            <div className="store__filterCarousel--boxTop">
              {" "}
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-enki-pro_lamborghini_80x150.png"
                alt=""
              />
            </div>
            <div className="store__filterCarousel--boxBottom">
              <p>Chairs</p>
            </div>
          </div>
          <div className="store__filterCarousel--box store__filterCarousel--box8">
            <div className="store__filterCarousel--boxTop">
              {" "}
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-wolverine-v2-pro-white_144x150.png"
                alt=""
              />
            </div>
            <div className="store__filterCarousel--boxBottom">
              <p>Console</p>
            </div>
          </div>
          <div className="store__filterCarousel--box store__filterCarousel--box9">
            <div className="store__filterCarousel--boxTop">
              {" "}
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-edge_186x150.png"
                alt=""
              />
            </div>
            <div className="store__filterCarousel--boxBottom">
              <p>Mobile</p>
            </div>
          </div>
          <div className="store__filterCarousel--box store__filterCarousel--box10">
            <div className="store__filterCarousel--boxTop">
              {" "}
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/rogue-15-chromatic_2x.png"
                alt=""
              />
            </div>
            <div className="store__filterCarousel--boxBottom">
              <p>Gear</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="store__freshHero">
        <div className="store__freshHero-top">
          <p>THE LATEST AND GREATEST GAMING GEAR </p>
          <p> Razer mice, keyboards, headsets, laptops & more</p>
        </div>
        <div className="store__freshHero-bottom">
          <p>FRESH OFF THE LINE</p>
          <p>
            Check out our latest releases to secure the most up-to-date upgrades
            for your setup
          </p>
        </div>
      </div>
      <div className="store__fresh">
        <div className="store__fresh__card">
          <div className="store__fresh__card--top">
            <img
              src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
              alt=""
            />
          </div>
          <div className="store__fresh__card--bottom">
            <div className="store__fresh__card-name">
              <p>Razer Blade 18 Models</p>
            </div>
            <div className="store__fresh__card-desc">
              <p>
                NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                7940HS Processor
              </p>
            </div>
            <div className="store__fresh__card-priceAdd">
              <div className="store__fresh__card-priceAdd-left">
                <p>From</p>
                <p>US$3,799</p>
              </div>
              <div className="store__fresh__card-priceAdd-right">
                <button><AiOutlineShoppingCart className="addToCardIco"/></button>
              </div>
            </div>
          </div>
        </div>
        <div className="store__fresh__card">
          <div className="store__fresh__card--top">
            <img
              src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
              alt=""
            />
          </div>
          <div className="store__fresh__card--bottom">
            <div className="store__fresh__card-name">
              <p>Razer Blade 18 Models</p>
            </div>
            <div className="store__fresh__card-desc">
              <p>
                NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                7940HS Processor
              </p>
            </div>
            <div className="store__fresh__card-priceAdd">
              <div className="store__fresh__card-priceAdd-left">
                <p>From</p>
                <p>US$3,799</p>
              </div>
              <div className="store__fresh__card-priceAdd-right">
                <button><AiOutlineShoppingCart className="addToCardIco"/></button>
              </div>
            </div>
          </div>
        </div>
        <div className="store__fresh__card">
          <div className="store__fresh__card--top">
            <img
              src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
              alt=""
            />
          </div>
          <div className="store__fresh__card--bottom">
            <div className="store__fresh__card-name">
              <p>Razer Blade 18 Models</p>
            </div>
            <div className="store__fresh__card-desc">
              <p>
                NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                7940HS Processor
              </p>
            </div>
            <div className="store__fresh__card-priceAdd">
              <div className="store__fresh__card-priceAdd-left">
                <p>From</p>
                <p>US$3,799</p>
              </div>
              <div className="store__fresh__card-priceAdd-right">
                <button><AiOutlineShoppingCart className="addToCardIco"/></button>
              </div>
            </div>
          </div>
        </div>
        <div className="store__fresh__card">
          <div className="store__fresh__card--top">
            <img
              src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
              alt=""
            />
          </div>
          <div className="store__fresh__card--bottom">
            <div className="store__fresh__card-name">
              <p>Razer Blade 18 Models</p>
            </div>
            <div className="store__fresh__card-desc">
              <p>
                NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                7940HS Processor
              </p>
            </div>
            <div className="store__fresh__card-priceAdd">
              <div className="store__fresh__card-priceAdd-left">
                <p>From</p>
                <p>US$3,799</p>
              </div>
              <div className="store__fresh__card-priceAdd-right">
                <button><AiOutlineShoppingCart className="addToCardIco"/></button>
              </div>
            </div>
          </div>
        </div>
        <div className="store__fresh__card">
          <div className="store__fresh__card--top">
            <img
              src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
              alt=""
            />
          </div>
          <div className="store__fresh__card--bottom">
            <div className="store__fresh__card-name">
              <p>Razer Blade 18 Models</p>
            </div>
            <div className="store__fresh__card-desc">
              <p>
                NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                7940HS Processor
              </p>
            </div>
            <div className="store__fresh__card-priceAdd">
              <div className="store__fresh__card-priceAdd-left">
                <p>From</p>
                <p>US$3,799</p>
              </div>
              <div className="store__fresh__card-priceAdd-right">
                <button><AiOutlineShoppingCart className="addToCardIco"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="store__newsSlider">
      <Slider className="store__newsCarousel" {...settingsNews}>
          <div className="store__newsCarousel--box store__newsCarousel--box1">
            <div className="store__filterCarousel--inner">
              <p>UNLEASH A NEW AGE OF TECHNOLOGY</p>
              <p>EXPERIENCE THE REVOLUTION</p>
            </div>
          </div>
          <div className="store__newsCarousel--box store__newsCarousel--box2">
            <div className="store__filterCarousel--inner">
              <p>BRING YOUR A-GAME ANYWHERE</p>
              <p>RAZERSTORE REWARDS GIVEAWAY</p>
            </div>
          </div>
          <div className="store__newsCarousel--box store__newsCarousel--box3">
            <div className="store__filterCarousel--inner">
              <p>GEAR UP FOR GLORY</p>
              <p>Esports Showdown Specials</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Store;
