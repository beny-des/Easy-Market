import { Card, CardMedia } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useFunctions } from "../../context/FunctionsContext";
import Styles from "../comingSoonGames/ComingSoonGames.module.css"



const ComingSoonGames = () => {
const{comingSoon}=useFunctions()
console.log("comingSoon",comingSoon);
  return(
  <>
   <Card >
        <CardMedia
          image="https://res.cloudinary.com/dfpn73tnk/image/upload/v1660680882/comming-soon_zt2p18.png"
          component="img"
          title="game area pic"
          height="170"
        />
      </Card>
  <div className={Styles.reviewsSection}>
{comingSoon?.map((product)=>{
  return(
    
 <div key={product._id} className={Styles.container} >
    <div className={Styles.card} >
      <div className={Styles.image} >
        <img  src={product.image} />
        {/* <video preload="none" loop muted playsInline>

          <source src="https://www.youtube.com/watch?v=3ZtedjN1JXY" type="video/watch"></source>
        </video> */}
      </div>
      <div className={Styles.title}><h2>{product.title}</h2></div>
      <div className={Styles.content} >
        <h3>
          {product.title}
         
          </h3>
        <p>{product.description}</p>
        <div style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
          <b>Console:</b>
                {product.console.map((obj) => {
                return (
                  <div key={obj.id} style={{ marginLeft: "7px" }}>
                    <Image
                      src={obj.image}
                      alt={"console pic"}
                      width={25}
                      height={25}
                    />
                  </div>
                );
              })}
        </div>
      </div>


    </div>    
  </div> 
)
})}
</div>


  </>
) };

export default ComingSoonGames;
