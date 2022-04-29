import './carousels.scss';
import carousel1 from '../../assets/carrousel/carrousel11.jpg';
import carousel2 from '../../assets/carrousel/carrousel22.jpg';
import carousel3 from '../../assets/carrousel/carrousel33.jpg';
import carousel4 from '../../assets/carrousel/carrousel44.jpg';
import carousel5 from '../../assets/carrousel/carrousel55.jpg';
import carousel6 from '../../assets/carrousel/carrousel66.jpg';
import carousel7 from '../../assets/carrousel/carrousel77.jpg';
import carousel8 from '../../assets/carrousel/tasse.jpeg';
import carousel9 from '../../assets/carrousel/tea.webp';

export default function Carousels() {
    return (
        <div className="carousels">
            <div className="slider">
                <div className="slides slides1">
                    <div className="slide">
                    <img src={carousel8} alt="café" />
                    </div>
                    <div className="slide">
                    <img src={carousel9} alt="thé et infusion" />
                    </div>
                    <div className="slide">
                    <img src={carousel7} alt="sablés" />
                    </div>
                </div>
            </div>
            <div className="slider">
                <div className="slides slides2">
                    <div className="slide">
                        <img src={carousel1} alt="café" />
                    </div>
                    <div className="slide">
                        <img src={carousel2} />
                    </div>
                    <div className="slide">
                    <img src={carousel3} alt="sablés" />
                    </div>
                </div>
            </div>
            <div className="slider last">
                <div className="slides last slides3">
                    <div className="slide">
                    <img src={carousel4} alt="café" />
                    </div>
                    <div className="slide">
                    <img src={carousel5} />
                    </div>
                    <div className="slide">
                    <img src={carousel6} alt="sablés" />
                    </div>
                </div>
            </div>
        </div>
    )
}
