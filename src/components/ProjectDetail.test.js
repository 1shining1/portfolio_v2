import { Swiper, SwiperSlide } from "swiper/react";
// import { useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { work02 } from "../constants/index";

// import required modules
import { Pagination, Navigation } from "swiper";

const Slider = ({ index, name, description, tags, image }) => {
    return (
        <div variants={index} className="imgWrap">
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
                    {work02.map((work, index) => (
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
