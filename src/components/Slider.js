import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import works from "../constants/index";

// import required modules
import { Pagination, Navigation } from "swiper";

const Slider = ({ index, name, description, tags, image }) => {
    return (
        <div variants={index}>
            <img src={image} alt="img" />
            <div className="txtWrap">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Work = () => {
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
                    {works.map((work, index) => (
                        <SwiperSlide>
                            <Slider
                                key={`work-${index}`}
                                index={index}
                                {...work}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Work;
