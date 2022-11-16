import Slider from 'react-slick'

// data
import datas from '../../../data/twelveadatas.json'

function NoArrows(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

const Classcards = () => {

    const settings = {
        className: "py-[10px]  max-w-[1023px] w-[100%] m-auto",
        dots: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NoArrows />,
        prevArrow: <NoArrows />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    {
                        datas.slice(0, 1).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(1, 2).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(2, 3).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(3, 4).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(4, 5).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(5, 6).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(6, 7).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(7, 8).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(8, 9).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(9, 10).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(10, 11).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(11, 12).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(12, 13).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(13, 14).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(14, 15).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

                <div>
                    {
                        datas.slice(15, 16).map((datas, index) => (
                            <img
                                className="max-h-[490px] m-auto rounded-[27px] px-[5px] max-w-[400px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>
            </Slider>
        </div>

    )
}

export default Classcards