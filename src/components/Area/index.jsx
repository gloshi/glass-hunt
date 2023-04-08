import React from "react";
import styles from "../../styles/Area.module.css";
import SliderArea from "./SliderArea";

const Area = () => {

    const Vesterborg = [
        {url: '/img/areaImg/vesterborg1.png', title: 'vesterborg1', id: 1},
        {url: '/img/areaImg/vesterborg2.jpg', title: 'vesterborg2', id: 2},
        {url: '/img/areaImg/vesterborg3.jpg', title: 'vesterborg3', id: 3},
        {url: '/img/areaImg/vesterborg4.jpg', title: 'vesterborg4', id: 4},
        {url: '/img/areaImg/vesterborg5.jpg', title: 'vesterborg5', id: 5},
    ]
    const Restaurants = [
      {url: '/img/areaImg/Restaurants1.png', title: 'Restaurants1', id: 1},
      {url: '/img/areaImg/Restaurants2.jpg', title: 'vesterborg2', id: 2},
      {url: '/img/areaImg/Restaurants3.jpg', title: 'vesterborg3', id: 3},
      {url: '/img/areaImg/Restaurants4.jpg', title: 'vesterborg4', id: 4},
      {url: '/img/areaImg/Restaurants5.jpg', title: 'vesterborg5', id: 5},
  ]
  const Experiences = [
    {url: '/img/areaImg/Experiences1.jpg', title: 'vesterborg1', id: 1},
    {url: '/img/areaImg/Experiences2.jpg', title: 'vesterborg2', id: 2},
    {url: '/img/areaImg/Experiences3.jpg', title: 'vesterborg3', id: 3},
    {url: '/img/areaImg/Experiences4.jpg', title: 'vesterborg4', id: 4},
    {url: '/img/areaImg/vesterborg5.jpg', title: 'vesterborg5', id: 5},
]
const Drive = [
  {url: '/img/areaImg/drive1.jpg', title: 'vesterborg1', id: 1},
  {url: '/img/areaImg/drive2.jpg', title: 'vesterborg2', id: 2},
  {url: '/img/areaImg/drive3.jpg', title: 'drive3', id: 3},
  {url: '/img/areaImg/drive4.jpg', title: 'drive4', id: 4},
  {url: '/img/areaImg/drive5.jpg', title: 'drive5', id: 5},
]
const Town = [
  {url: '/img/areaImg/town1.png', title: 'town1', id: 1},
  {url: '/img/areaImg/town2.jpg', title: 'town2', id: 2},
  {url: '/img/areaImg/town3.jpg', title: 'town3', id: 3},
  {url: '/img/areaImg/town4.jpg', title: 'town4', id: 4},
  {url: '/img/areaImg/town5.jpg', title: 'town5', id: 5},
]

  return (
    <div className={styles.container}>
      <div className={styles.areaImg}>
        <img src="/img/area.png" alt="area" />
      </div>
      <div className={styles.areaText}>
        <h1>The Area</h1>
        <button>get directions</button>
      </div>
      <div className={styles.sliderBox}>
        <SliderArea slides={Vesterborg}/>
        <div className={styles.text}>
        <h1>Vesterborg</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing...</span>
        <p>
          Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
          designed by architect Sigurd Larsen. They all have an open space
          with a double bed, a double sofa bed, kitchen, separate toilet and
          an outdoor shower. On the roof, surrounded by treetops, there is a
          terrace, which is about nine meters above ground.
        </p>
      </div>
      </div>
      <div className={styles.info}>
      <div className={styles.left}>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing...</div>
      </div>
      <div className={styles.right}>
          <img src="/img/areaImg/map.svg" alt="map" />
      </div>
      </div>
      <div className={styles.Activities}>Activities</div>
      <div className={styles.sliderBox}>
        <SliderArea slides={Restaurants}/>
        <div className={styles.text}>
        <h1>Restaurants & shopping</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing...</span>
        <p>
          Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
          designed by architect Sigurd Larsen. They all have an open space
          with a double bed, a double sofa bed, kitchen, separate toilet and
          an outdoor shower. On the roof, surrounded by treetops, there is a
          terrace, which is about nine meters above ground.
        </p>
      </div>
      </div>
      <div className={styles.sliderBox}>
      <div className={styles.text}>
        <h1>Experiences in nature</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing...</span>
        <p>
          Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
          designed by architect Sigurd Larsen. They all have an open space
          with a double bed, a double sofa bed, kitchen, separate toilet and
          an outdoor shower. On the roof, surrounded by treetops, there is a
          terrace, which is about nine meters above ground.
        </p>
      </div>
        <SliderArea slides={Experiences}/>
        
      </div>
      <div className={styles.sliderBox}>
        <SliderArea slides={Drive}/>
        <div className={styles.text}>
        <h1>Go for a drive</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing...</span>
        <p>
          Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
          designed by architect Sigurd Larsen. They all have an open space
          with a double bed, a double sofa bed, kitchen, separate toilet and
          an outdoor shower. On the roof, surrounded by treetops, there is a
          terrace, which is about nine meters above ground.
        </p>
      </div>
      </div>
      <div className={styles.sliderBox}>
      <div className={styles.text}>
        <h1>Small-town charm</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing...</span>
        <p>
          Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
          designed by architect Sigurd Larsen. They all have an open space
          with a double bed, a double sofa bed, kitchen, separate toilet and
          an outdoor shower. On the roof, surrounded by treetops, there is a
          terrace, which is about nine meters above ground.
        </p>
      </div>
        <SliderArea slides={Town}/>
        
      </div>
    </div>
  );
};

export default Area;
