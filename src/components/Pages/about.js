import React from "react";
import aboutImg from "../../../static/assets/images/about/IMG_0001.jpg";

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div
        style={{
          background: "url(" + aboutImg + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className='left-column'></div>
      <div className='right-column'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quia
        repudiandae quod iure architecto nobis suscipit animi qui, nulla
        perferendis laborum aliquam pariatur nam aut reprehenderit vitae.
        Asperiores, impedit itaque. Itaque nihil eum ad minus, quis velit.
        Aliquid, optio sapiente, laudantium nihil sit placeat quibusdam, hic
        quasi odit animi qui asperiores? Quis, pariatur ad commodi expedita
        deserunt dolorum voluptate quae? Incidunt, cupiditate. Earum cum at
        atque aspernatur aperiam consectetur dolor. Quia animi adipisci
        repellendus sint officia eum iure suscipit itaque deleniti magni vel
        repellat mollitia illum, blanditiis magnam doloribus asperiores! Sed
        esse nostrum impedit dolor laboriosam consequatur vitae minima delectus!
        Minima facere quod recusandae eligendi, omnis dolor eum. Facere omnis
        fugiat quas ullam earum perspiciatis architecto cumque aliquam nihil
        excepturi? Blanditiis magni voluptatibus, soluta aut officia ea atque
        accusantium porro fuga excepturi! Eos odio, consequuntur sit sed ullam
        modi, quam quas, veritatis at ipsa labore repellat neque dolorum vel
        aspernatur.
      </div>
    </div>
  );
}
