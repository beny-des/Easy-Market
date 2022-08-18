import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import styles from "../glide/Glider.module.css";

const imageArray = [
 {
    id: 0,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660061161/Glider/Ghost_of_tsushima_rubedh.jpg",
  },
  {
    id: 1,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660061161/Glider/Anthem_yvipie.jpg",
  },
  {
    id: 2,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1657442141/biomutant-pc-game-steam-cover_oykkkg.jpg",
  },
  {id:3,pic:"https://res.cloudinary.com/dfpn73tnk/image/upload/v1660633963/Check%20folder/Tekken7_mjjl9l.jpg"},

  {
    id: 4,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660125478/Glider/Skyrim_zr1r8r.jpg",
  },
  {
    id: 5,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660562656/Check%20folder/Horizen_face_otbc0h.jpg",
  },
  {
    id: 6,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660061169/Glider/Uncharted_k1eelx.jpg",
  },
  {
    id: 7,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660633963/Check%20folder/cover-tekken_7_bqocyy.jpg",
  },
  {
    id: 8,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660061181/Glider/just_cause_zdksx4.jpg",
  },
  {
    id: 9,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660061174/Glider/Prince_of_persia_gmlijx.jpg",
  },
  {
    id: 10,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660061174/Glider/Tomb_raider_z6jxql.jpg",
  },
  {
    id: 11,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660061160/Glider/Batman_ztcgql.jpg",
  },
  {
    id: 12,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660123001/Glider/final-fantasy-vii-remake-cloud_ur8rwd.jpg",
  },
 
  {
    id: 13,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660562661/Check%20folder/new-horizon-forbidden-west-2022_3840x2160_dlgsi7.jpg",
  },
  {
    id: 14,
    pic: "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660061168/Glider/MK_vemuos.jpg",
  },
];

const Glider = () => {
  useEffect(() => {
    const config = {
      type: "carousel",
      autoplay: 2000,
      hoverpause: true,
      perView: 3,
      gap: 10,
    };
    const imgGlider = () => {
      new Glide(".glide", config).mount();
    };
    imgGlider();
  }, []);

  return (
    <div
      className={"glide"}
      style={{
        paddingTop: "5px",
        paddingLeft: "28px",
        paddingRight: "0px",
        position: "relative",
        zIndex: "0",
      }}
    >
      <div className="glide__track" data-glide-el="track">
        <ul className={"glide__slides"}>
          {imageArray.map((img) => {
            return (
              <li key={img.id} className="glide__slide">
                <img src={img.pic} alt="pic" className={styles.slideImg}></img>
              </li>
            );
          })}
        </ul>

        <div className="glide__arrows" data-glide-el="controls">
          <button style={{marginLeft:"8px"}}
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            prev
          </button>
          <button style={{marginRight:"8px"}}
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            next
          </button>
        </div>

        <div className={"glide__bullets"} data-glide-el="controls[nav]">
          {imageArray.map((img) => {
            return (
              <button
                key={img.id}
                className="glide__bullet"
                data-glide-dir={`=${img.id}`}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Glider;
