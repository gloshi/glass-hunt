import React, { useState } from 'react'
import styles from "../../styles/Area.module.css";

const SliderArea = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
      }
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
      }
    
      let progress = ((currentIndex / (slides.length + 1)) * 100) + 20
  return (
    <>
    <div className={styles.slider}>
        <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className={styles.sliderImg}>
            
        </div>
          
          <div className={styles.params}>
            <div className={styles.arrows}>
              <img onClick={prevSlide} className={styles.back} src="/img/areaImg/arrow.svg" alt="" />
              <img onClick={nextSlide} src="/img/areaImg/arrow.svg" alt="" />
            </div>
            <div className={styles.progressBar}>
              <div style={{width: `${progress}%`}} className={styles.coverBar}></div>
            </div>
          </div>
          
        </div>
     
      </>
  )
}

export default SliderArea