import React from "react";
import classes from "./Banner.module.css";

let bannerData = {
  quote: 'Happiness You Can Drink Everyday',
};

export default function Banner() {
  return (
    <div className={classes.bannerBg}>
      <div className={classes.overlay}></div>
    <div className={classes.con}>
        <div className={classes.bannerCon}>
            <div className={classes.bannerText}>
                <h1>{bannerData.quote}</h1>
                <a href="#" className={classes.bannerBtn}>Learn More</a>
            </div>
        </div>
    </div>
</div>
  );
}
