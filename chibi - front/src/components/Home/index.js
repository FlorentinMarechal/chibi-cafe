import './home.scss';
import Carousels from '../Carousels';
import cafe from '../../assets/coffeeshop.jpg';

function Home() {
  return (
    <div className="home">
        {/* <div className="slider">
          <div className="slides">
            <div className="slide">
              <img src="https://images.pexels.com/photos/290975/pexels-photo-290975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="café" />
            </div>
            <div className="slide">
              <img src="https://cdn.pixabay.com/photo/2015/11/12/17/42/tea-1040677_960_720.jpg" alt="thé et infusion" />
            </div>
            <div className="slide">
            <img src="https://images.pexels.com/photos/2934200/pexels-photo-2934200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="sablés" />
            </div>
          </div>
        </div> */}
        <Carousels />
      <div className="presentation">
      <div className="presentation__img">
        <img src={cafe} alt="café" />
        </div>
      

      <div className="home__presentation">
        <p>CHIBI CAFE est un coffee shop / salon de thé situé en plein coeur de Paris.</p>
          
        <p>  Nous vous proposons des cafés et thés de spécialité, des déclinaisons de pâtisseries et des boissons colorées.
          Une épicerie fine proposant un large choix de produits sucrés.</p>
      </div>
      </div>

    </div>
  );
}

export default Home;