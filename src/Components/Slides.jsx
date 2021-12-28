import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from 'F:/conselio_react/src/img/akconstruction.jpg';
import Image2 from 'F:/conselio_react/src/img/e8bb1ee28bdca8b07bb48786dfa8e45b.jpg';
import Image3 from 'F:/conselio_react/src/img/daniel-mccullough-HtBlQdxfG9k-unsplash.jpg';
import Image4 from 'F:/conselio_react/src/img/max-langelott-d3_cFMe97Ec-unsplash.jpg';
import 'F:/conselio_react/src/Components/Slides.css';
const Slides = () =>{
    return(
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100"
          //https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png
src={Image1}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3> first slide</h3>
            
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item interval={1500}>
          <img className="d-block w-100" 
          
src={Image2}
            alt="Image two"
          />
          <Carousel.Caption>
            <h3> second slide</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
              

        <Carousel.Item interval={1500}>
          <img className="d-block w-100"
          
src={Image3}
            alt="Image three"
          />
          <Carousel.Caption>
            <h3> third slide</h3>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img className="d-block w-100"
          
src={Image4}
            alt="Image fourth"
          />
          <Carousel.Caption>
            <h3> fourth slide</h3>
            
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
      
)
};

export default Slides;