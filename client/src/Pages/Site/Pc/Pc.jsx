import React, { useEffect, useState } from "react";
import "./Pc.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Loader from "../../../Components/Loader/Loader";

const Pc = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <div className="pc">
            <div className="pc__hero">
              <p>LAPTOPS & DESKTOPS</p>
              <p>
                From cutting-edge gaming and creator laptops to high-end
                components for your dream PC build, Razer systems are
                meticulously crafted to provide the ultimate performance for
                work and play. Supported by our diverse collection of gamer
                accessories and PC peripherals, we’ve got you covered when it
                comes to your unique gaming or office desktop needs.
              </p>
            </div>
            <div className="pc__pcLaptopVitrine">
              <div className="pc__pcLaptopVitrine__card">
                <div className="pc__pcLaptopVitrine__card--top">
                  <img
                    src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
                    alt=""
                  />
                </div>
                <div className="pc__pcLaptopVitrine__card--bottom">
                  <div className="pc__pcLaptopVitrine__card-name">
                    <p>Razer Blade 18 Models</p>
                  </div>
                  <div className="pc__pcLaptopVitrine__card-desc">
                    <p>
                      NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                      7940HS Processor
                    </p>
                  </div>
                  <div className="pc__pcLaptopVitrine__card-priceAdd">
                    <div className="pc__pcLaptopVitrine__card-priceAdd-left">
                      <p>From</p>
                      <p>US$3,799</p>
                    </div>
                    <div className="pc__pcLaptopVitrine__card-priceAdd-right">
                      <button>
                        <AiOutlineShoppingCart className="addToCardIco" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc__pcLaptopVitrine__card">
                <div className="pc__pcLaptopVitrine__card--top">
                  <img
                    src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
                    alt=""
                  />
                </div>
                <div className="pc__pcLaptopVitrine__card--bottom">
                  <div className="pc__pcLaptopVitrine__card-name">
                    <p>Razer Blade 18 Models</p>
                  </div>
                  <div className="pc__pcLaptopVitrine__card-desc">
                    <p>
                      NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                      7940HS Processor
                    </p>
                  </div>
                  <div className="pc__pcLaptopVitrine__card-priceAdd">
                    <div className="pc__pcLaptopVitrine__card-priceAdd-left">
                      <p>From</p>
                      <p>US$3,799</p>
                    </div>
                    <div className="pc__pcLaptopVitrine__card-priceAdd-right">
                      <button>
                        <AiOutlineShoppingCart className="addToCardIco" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc__pcLaptopVitrine__card">
                <div className="pc__pcLaptopVitrine__card--top">
                  <img
                    src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
                    alt=""
                  />
                </div>
                <div className="pc__pcLaptopVitrine__card--bottom">
                  <div className="pc__pcLaptopVitrine__card-name">
                    <p>Razer Blade 18 Models</p>
                  </div>
                  <div className="pc__pcLaptopVitrine__card-desc">
                    <p>
                      NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                      7940HS Processor
                    </p>
                  </div>
                  <div className="pc__pcLaptopVitrine__card-priceAdd">
                    <div className="pc__pcLaptopVitrine__card-priceAdd-left">
                      <p>From</p>
                      <p>US$3,799</p>
                    </div>
                    <div className="pc__pcLaptopVitrine__card-priceAdd-right">
                      <button>
                        <AiOutlineShoppingCart className="addToCardIco" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc__pcLaptopVitrine__card">
                <div className="pc__pcLaptopVitrine__card--top">
                  <img
                    src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
                    alt=""
                  />
                </div>
                <div className="pc__pcLaptopVitrine__card--bottom">
                  <div className="pc__pcLaptopVitrine__card-name">
                    <p>Razer Blade 18 Models</p>
                  </div>
                  <div className="pc__pcLaptopVitrine__card-desc">
                    <p>
                      NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                      7940HS Processor
                    </p>
                  </div>
                  <div className="pc__pcLaptopVitrine__card-priceAdd">
                    <div className="pc__pcLaptopVitrine__card-priceAdd-left">
                      <p>From</p>
                      <p>US$3,799</p>
                    </div>
                    <div className="pc__pcLaptopVitrine__card-priceAdd-right">
                      <button>
                        <AiOutlineShoppingCart className="addToCardIco" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pc__peripherals ">
              <p>PC & LAPTOP PERIPHERALS</p>
              <p>
                The most powerful rigs mean nothing without the best gear to
                match. Gain a competitive edge with PC and laptop peripherals
                armed with our latest technology. From award-winning mice and
                keyboards to industry-leading headsets and monitors, deck out
                your setup with our comprehensive selection of peripherals for
                gaming and work.
              </p>
            </div>
            <div className="pc__peripheralsVitrine">
              <div className="pc__peripheralsVitrine__card">
                <div className="pc__peripheralsVitrine__card--top">
                  <img
                    src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
                    alt=""
                  />
                </div>
                <div className="pc__peripheralsVitrine__card--bottom">
                  <div className="pc__peripheralsVitrine__card-name">
                    <p>Razer Blade 18 Models</p>
                  </div>
                  <div className="pc__peripheralsVitrine__card-desc">
                    <p>
                      NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                      7940HS Processor
                    </p>
                  </div>
                  <div className="pc__peripheralsVitrine__card-priceAdd">
                    <div className="pc__peripheralsVitrine__card-priceAdd-left">
                      <p>From</p>
                      <p>US$3,799</p>
                    </div>
                    <div className="pc__peripheralsVitrine__card-priceAdd-right">
                      <button>
                        <AiOutlineShoppingCart className="addToCardIco" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc__peripheralsVitrine__card">
                <div className="pc__peripheralsVitrine__card--top">
                  <img
                    src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
                    alt=""
                  />
                </div>
                <div className="pc__peripheralsVitrine__card--bottom">
                  <div className="pc__peripheralsVitrine__card-name">
                    <p>Razer Blade 18 Models</p>
                  </div>
                  <div className="pc__peripheralsVitrine__card-desc">
                    <p>
                      NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                      7940HS Processor
                    </p>
                  </div>
                  <div className="pc__peripheralsVitrine__card-priceAdd">
                    <div className="pc__peripheralsVitrine__card-priceAdd-left">
                      <p>From</p>
                      <p>US$3,799</p>
                    </div>
                    <div className="pc__peripheralsVitrine__card-priceAdd-right">
                      <button>
                        <AiOutlineShoppingCart className="addToCardIco" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc__peripheralsVitrine__card">
                <div className="pc__peripheralsVitrine__card--top">
                  <img
                    src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
                    alt=""
                  />
                </div>
                <div className="pc__peripheralsVitrine__card--bottom">
                  <div className="pc__peripheralsVitrine__card-name">
                    <p>Razer Blade 18 Models</p>
                  </div>
                  <div className="pc__peripheralsVitrine__card-desc">
                    <p>
                      NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                      7940HS Processor
                    </p>
                  </div>
                  <div className="pc__peripheralsVitrine__card-priceAdd">
                    <div className="pc__peripheralsVitrine__card-priceAdd-left">
                      <p>From</p>
                      <p>US$3,799</p>
                    </div>
                    <div className="pc__peripheralsVitrine__card-priceAdd-right">
                      <button>
                        <AiOutlineShoppingCart className="addToCardIco" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc__peripheralsVitrine__card">
                <div className="pc__peripheralsVitrine__card--top">
                  <img
                    src="https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
                    alt=""
                  />
                </div>
                <div className="pc__peripheralsVitrine__card--bottom">
                  <div className="pc__peripheralsVitrine__card-name">
                    <p>Razer Blade 18 Models</p>
                  </div>
                  <div className="pc__peripheralsVitrine__card-desc">
                    <p>
                      NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9
                      7940HS Processor
                    </p>
                  </div>
                  <div className="pc__peripheralsVitrine__card-priceAdd">
                    <div className="pc__peripheralsVitrine__card-priceAdd-left">
                      <p>From</p>
                      <p>US$3,799</p>
                    </div>
                    <div className="pc__peripheralsVitrine__card-priceAdd-right">
                      <button>
                        <AiOutlineShoppingCart className="addToCardIco" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pc__complete">
              <p>COMPLETE YOUR SETUP</p>
              <p>A Color For Every Style</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Pc;
