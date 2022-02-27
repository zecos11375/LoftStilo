import React from "react";
import classes from "./Content.module.css";


export default function Content() {
  return (
    <div className={classes.container}>
      <section className={classes.contentCon}>
        <div className={classes.contentL}>
          <img
            src="/img/bar.jpg"
            alt=""
          />
        </div>
        <div className={classes.contentR}>
          <h2>Speed Bar Café</h2>
          <p>
          บริการได้เร็วไม่ต้องคอยนาน รสชาตินิ่ง ไม่ต้องเสี่ยงดวงแน่นอน
          </p>
        </div>
      </section>
      <section className={classes.contentCon}>
        <div className={classes.contentR}>
          <h2>Location</h2>
          <p>
          ถนนรางรถไฟเก่า สมุทรปราการ (อยู่ริมถ.รางรถไฟ หน้าปากซอย ก่อนถึงคอนโด Tropicana)
          </p>
          <a href='https://goo.gl/maps/TzX6CAvPZmsgjRtw8'>Google Map</a>

        </div>
        <div className={classes.contentL}>
          <img
            src="/img/cafe.jpg"
            alt=""
          />
        </div>
      </section>
 
    </div>
  );
}
