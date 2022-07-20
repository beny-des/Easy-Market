import React, { useEffect } from "react";
// import Image from "next/image";
// import { Button } from "@mui/material";
import Glide, { Controls, Breakpoints } from "@glidejs/glide";
import styles from "../glide/Glider.module.css";

const Glider = () => {


  useEffect(() => {
    const config = {
      type: "carousel",
      autoplay: 2000,
      hoverpause: true,
      perView: 3,
      gap: 10,
      // peek: {
      //   before: 70,
      //   after: 50,
      // },
      // breakpoints: {
      //   800: {
      //     perView: 2,
      //   },
      //   480: {
      //     perView: 1,
      //   },
      // },
    };
    const imgGlider = () => {
      new Glide(".glide", config).mount();
    };
    imgGlider();
  }, []);

  return (
    // <div className={["glide"] + " " + [styles.cont]}>
    <div className={"glide"} style={{ paddingTop: "5px", paddingRight: "0px" }}>
      <div className="glide__track" data-glide-el="track">
        {/* <ul className={["glide__slides"] + " " + [styles.slides]}> */}
        <ul className={"glide__slides"}>
          <li className="glide__slide">
            <img
              src="/images/Tekken.jpg"
              alt="pic"
              className={styles.slideImg}
            ></img>
          </li>
          <li className="glide__slide">
            <img
              src="/images/Gears-of-war4.jpg"
              alt="pic"
              className={styles.slideImg}
            ></img>
          </li>
          <li className="glide__slide">
            <img
              src="/images/Biomutant.jpg"
              alt="pic"
              className={styles.slideImg}
            ></img>
          </li>
          <li className="glide__slide">
            <img
              src="/images/PUBG.jpg"
              alt="pic"
              className={styles.slideImg}
            ></img>
          </li>
        </ul>

        <div className="glide__arrows" data-glide-el="controls" >
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            prev
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            next
          </button>
        </div>

        <div className={"glide__bullets"} data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
          <button className="glide__bullet" data-glide-dir="=3"></button>
        </div>
      </div>
    </div>
  );
};
export default Glider;
