import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { workLists } from "../constants/index";

import { Pagination, Navigation } from "swiper";

function Detail() {
    const params = Number(Object.values(useParams()));
    const navigate = useNavigate();

    useEffect(() => {
        console.log("params: ", params);
        console.log(typeof params);
    }, [params]);

    // const { content } = props.location.state;

    // const cont = Object.keys(content).map((key) => [key, content[key]]);
    // const cont = Object.entries(content);
    const Slider = ({ index, name, description, tags, image }) => {
        return (
            <div variants={index} className="imgWrap">
                <img src={image} alt="img" />
                <div className="txtWrap">
                    <p>{name}</p>
                </div>
            </div>
        );
    };

    return (
        <div id="projectDetail" className="content">
            {/* <h1 className="content-title">Detail</h1> */}
            <button
                onClick={() => {
                    navigate(-1);
                }}
                className="backBtn"
            >
                ◀ go back to Project list
            </button>
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
                    {workLists[params].content.map((work, index) => (
                        <SwiperSlide key={`work-${index}`}>
                            <Slider
                                // key={`work-${index}`}
                                index={index}
                                {...work}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Detail;
