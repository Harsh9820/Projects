
import { mainCaraouselData } from './MainCaraouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = mainCaraouselData.map((item) => <img className="cursor-pointer" src={item.image} alt=""/>)

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
        />
    )
}

export default MainCarousel