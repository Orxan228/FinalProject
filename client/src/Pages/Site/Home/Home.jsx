import React from "react";
import "./Home.scss";
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="home__new">
        <div
          className="home__new--item home__new--item1"
          style={{
            backgroundImage:
              "url(" +
              "https://assets2.razerzone.com/images/pnx.assets/6ca16320b8425e0a74bc7ed71f2adf99/razer-blade-14-2023-homepage-desktop.jpg" +
              ")",
          }}
        >
          <p className="home__new--item--p home__new--item--p1">
            NEW RAZER BLADE 14
          </p>
          <p className="home__new--item--p home__new--item--p2">
            SMALL SIZE.BIG PERFOMANCE.
          </p>
        </div>
        <div
          className="home__new--item home__new--item2"
          style={{
            backgroundImage:
              "url(" +
              "https://assets2.razerzone.com/images/pnx.assets/a845f6901aeda8def2ad4b2ba0314ecb/mercury-blade16&18-homepage-desktop2x.jpg" +
              ")",
          }}
        >
          <p className="home__new--item--p home__new--item--p1">
            NEW RAZER BLADE 16 & 18 MERCURY
          </p>
          <p className="home__new--item--p home__new--item--p2">
            PERFORMANCE REIMAGINED
          </p>
        </div>
        <div
          className="home__new--item home__new--item3"
          style={{
            backgroundImage:
              "url(" +
              "https://assets2.razerzone.com/images/pnx.assets/6ca16320b8425e0a74bc7ed71f2adf99/razer-hammerhead-pro-hyperspeed-homepage-desktop1x.jpg" +
              ")",
          }}
        >
          <p className="home__new--item--p home__new--item--p1">
            RAZER HAMMERHEAD PRO HYPERSPEED
          </p>
          <p className="home__new--item--p home__new--item--p2">
            PLAY EVERYWHERE. HEAR EVERYTHING.
          </p>
        </div>
      </div>
      <div className="home__grid">
        <div className="home__grid--item home__grid--item1">
          <p className="home__grid--item--p home__grid--item--p1">CHAMPION HOPE</p>
          <p className="home__grid--item--p home__grid--item--p2">IN SUPPORT OF BREAST CANCER AWARENESS</p>
        </div>
        <div className="home__grid--item home__grid--item2">
          <p className="home__grid--item--p home__grid--item--p1">RAZER KITSUNE</p>
          <p className="home__grid--item--p home__grid--item--p2">OPTICAL + PRECISION! THE ULTRA COMBO!</p>
        </div>
        <div className="home__grid--item home__grid--item3">
          <p className="home__grid--item--p home__grid--item--p1">NEW RAZER BLADE 15</p>
          <p className="home__grid--item--p home__grid--item--p2">PORTABLE. POWERFUL. PERFECTION.</p>
        </div>
        <div className="home__grid--item home__grid--item4">
          <p className="home__grid--item--p home__grid--item--p1">RAZER ENKI PRO</p>
          <p className="home__grid--item--p home__grid--item--p2">AUTOMOBILI LAMBORGHINI EDITION</p>
        </div>
        <div className="home__grid--item home__grid--item5">
          <p className="home__grid--item--p home__grid--item--p1">RAZER EDGE</p>
          <p className="home__grid--item--p home__grid--item--p2">THE ULTIMATE ANDROID GAMING HANDHELD</p>
        </div>
        <div className="home__grid--item home__grid--item6">
          <p className="home__grid--item--p home__grid--item--p1">BRING YOUR A‑GAME ANYWHERE</p>
          <p className="home__grid--item--p home__grid--item--p2">RAZERSTORE REWARDS GIVEAWAY</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
