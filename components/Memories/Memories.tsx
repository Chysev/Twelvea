import Slider from 'react-slick'

// Component
import Template from "../Template/Template"
import Code404 from "../404/404"

const Memories = () => {

    const settings = {
        className: "m-auto w-[65%] py-[2.5rem] 1024max:w-[80%] grid gap-[.3rem] pt-[5rem]",
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
        <div className="flex min-h-[100vh] h-[100%] 992max:px-[2rem] BG">
            <Slider {...settings}>

                <div>
                    <iframe
                        className=" h-[auto] w-[100%]  aspect-video  rounded-[17.5px]  active:mb-[3rem] hover: transition-all"
                        src="https://drive.google.com/file/d/1IBAfuwm793UWwNj8h9sU-o5WJpGzUSu6/preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>

                <div>
                    <iframe
                        className=" h-[auto] w-[100%]  aspect-video  rounded-[17.5px]  active:mb-[3rem] hover: transition-all"
                        src="https://drive.google.com/file/d/1wDM4LORk6Pp0D_SpmBeCLwwU8-YwICZT/preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>

                <div>
                    <iframe
                        className=" h-[auto] w-[100%]  aspect-video  rounded-[17.5px]  active:mb-[3rem] hover: transition-all"
                        src="https://drive.google.com/file/d/1GlhEql7j2arlLoNFgRuMrWdHvz4APwdx/preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>

                <div>
                    <iframe
                        className=" h-[auto] w-[100%]  aspect-video  rounded-[17.5px]  active:mb-[3rem] hover: transition-all"
                        src="https://drive.google.com/file/d/12-hIYNL17phoFIf-EwpSbI_DJsKWMyv2/preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>

                <div>
                    <iframe
                        className=" h-[auto] w-[100%]  aspect-video  rounded-[17.5px]  active:mb-[3rem] hover: transition-all"
                        src="https://drive.google.com/file/d/1TH4wIJhnl2N5P7JsHxzqeaaY-sXRgKRS/preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>

                <div>
                    <iframe
                        className=" h-[auto] w-[100%]  aspect-video  rounded-[17.5px]  active:mb-[3rem] hover: transition-all"
                        src="https://drive.google.com/file/d/1cNveh-k41ilJfyolyVDbSQOPXXX5sIWn/preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </Slider>
        </div>

    )
}
export default Memories