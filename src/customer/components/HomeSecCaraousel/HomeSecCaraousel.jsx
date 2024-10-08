import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { useState } from 'react';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomeSecCaraousel = () => { 
    const [activeIndex, setActiveIndex] = useState(0)

    const responsive = {
        0: {items: 1},
        720: {items: 3},
        1024: {items: 5.5}
    }
    const items = mens_kurta.slice(0,10).map(
        (item) => 
        <HomeSectionCard product={item}/>
    )

    const totalItems = items.length;
    const maxIndex = totalItems - 1;
    
    const slidePrev = () => 
        {
            const newIndex = Math.max(activeIndex - 1, 0)
            console.log(newIndex)
            setActiveIndex(newIndex)
        }
    const slideNext = () => 
        {
            const newIndex = Math.min(activeIndex + 1, maxIndex)
            console.log(newIndex)
            setActiveIndex(newIndex)
        }
    const syncActiveIndex = ({item}) => setActiveIndex(item)
    
    return (
        <div className='border'>
            <h2 className='text-exl text-gray-800 font-extrabold py-5'>Men's Kurta</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />  

                { activeIndex !== items.length - 5 && <Button
                    variant='contained'
                    className='z-50 bg-white'
                    onClick={slideNext}
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        right: "0rem",
                        transform: "translateX(50%) rotate(90deg)",
                        bgcolor: "white"
                    }}
                    color='white'
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}

                { activeIndex !== 0 && <Button 
                    variant='contained' 
                    className='z-50 bg-white' 
                    onClick={slidePrev}
                    sx={{
                        position: "absolute", 
                        top: "8rem", 
                        left: "0rem", 
                        transform: "translateX(-50%) rotate(90deg)",
                        bgcolor: "white"
                    }} 
                    color='white' 
                    aria-label='previous' 
                    >
                    <KeyboardArrowLeftIcon sx={{transform: "rotate(-90deg)", color: "black "}}/>
                </Button>}
            </div>
        </div>
    )
}

export default HomeSecCaraousel