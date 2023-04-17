import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import works from "../constants/index";

// import mySeverance from "../assets/projects/mySeverance.png";
// import smartHP from "../assets/projects/smartHP.png";

// import required modules
import { Pagination, Navigation } from "swiper";

const Slider = ({ index, name, description, tags, image }) => {
    // function Slider() {
    return (
        <>
            <div id="SwiperWrap">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={image} alt="img" />
                        <div className="txtWrap">
                            <h2>{name}</h2>
                            <p>text</p>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <img src={image} alt="img" />
                        <div className="txtWrap">
                            <h2>Slide 2</h2>
                            <p>text</p>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </>
    );
};

const Work = () => {
    return (
        <>
            <div className="test">
                {works.map((project, index) => (
                    <Slider
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default Work;
