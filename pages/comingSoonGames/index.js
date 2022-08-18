import { Card, CardMedia } from "@mui/material";
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
      </div>
      <div className={Styles.title}><h2>{product.title}</h2></div>
      <div className={Styles.content} >
        <h3>
          {product.title}
         
          </h3>
        <p>{product.description}</p>
     
      </div>
    </div>    
  </div> 
)
})}
</div>


  </>
) };

export default ComingSoonGames;
