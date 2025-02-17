import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../../image/1.jpeg'
import foto2 from "../../image/2.jpeg"
import foto3 from "../../image/3.jpeg"
import styles from "./Slider.module.css"


function Slider() {
  return (
    <>
    <div className={styles.containerSlide}>
    <Carousel >
      <Carousel.Item>
        <img src={foto1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={foto2} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={foto3} alt="" />        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   
    </>
  )
}

export default Slider