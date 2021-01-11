import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './styles/slideshow.module.scss';

const slideImages = [
    '/assets/slide1.png',
    '/assets/slide2.png',
    '/assets/slide3.png',
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    // arrows: true,
}
const slideShow = () => {
    return (
        <div className="sectionContainer">
        <div className="slideshowContainer">
            <Fade {...properties}>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}} />
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}} />  
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}} />  
                </div>
            </Fade>

        </div>
        </div>
    )
}

export default slideShow;