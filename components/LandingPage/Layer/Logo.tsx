import { motion } from "framer-motion"
import Slider from 'react-slick'

// data
import dataslogo from '../../../data/twelvealogodata.json'

const Logo = () => {

    const settings = {
        className: "flex max-h-[600px] max-w-[1050px]  border-0 m-auto",
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const animation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            y: [-200, 0, 0]
        }
    }

    return (
        <motion.div
            variants={animation}
            initial="hidden"
            animate="show"
            transition={{ ease: "easeInOut", duration: 3, stiffness: 100 }}>
            <Slider {...settings}>

                <div>

                    {
                        dataslogo.slice(0, 1).map((dataslogo, index) => (
                            <img
                                className="w-[100%] h-[100%] rounded-[37px]"
                                key={index}
                                src={dataslogo.Logo1} alt="" />
                        ))
                    }
                </div>

                <div>

                    {
                        dataslogo.slice(0, 2).map((dataslogo, index) => (
                            <img
                                className="px-[20px] w-[100%] h-[100%] rounded-[37px]"
                                key={index}
                                src={dataslogo.Logo2} alt="" />
                        ))
                    }
                </div>


                <div>

                    {
                        dataslogo.slice(0, 3).map((dataslogo, index) => (
                            <img
                                className="px-[20px] w-[100%] h-[100%] rounded-[37px]"
                                key={index}
                                src={dataslogo.Logo3} alt="" />
                        ))
                    }
                </div>

                <div>

                    {
                        dataslogo.slice(0, 4).map((dataslogo, index) => (
                            <img
                                className="px-[20px] w-[100%] h-[100%] rounded-[37px]"
                                key={index}
                                src={dataslogo.Logo4} alt="" />
                        ))
                    }
                </div>

            </Slider>
        </motion.div>
    )
}
export default Logo