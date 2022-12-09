// Component
import Template from "../Template/Template"
import Code404 from "../404/404"

const Memories = () => {

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
        <div></div>
    )
}
export default Memories