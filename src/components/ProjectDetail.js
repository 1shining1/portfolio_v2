import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { workLists } from "../constants/index";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MaterialIcon from "react-google-material-icons";

function Detail() {
    const params = Number(Object.values(useParams()));
    const navigate = useNavigate();

    useEffect(() => {
        console.log("params: ", params);
        console.log(typeof params);
    }, [params]);

    const Slider = ({ index, name, description, skill, image }) => {
        return (
            <div variants={index} className="slide-item">
                <div className="img-wrap">
                    <img src={image} alt="img" />
                </div>
                <div className="txt-wrap">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <span>{skill}</span>
                </div>
            </div>
        );
    };

    return (
        <div id="projectDetail" className="content">
            {/* <h1 className="content-title">Detail</h1> */}
            <div className="backBtn">
                <button
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <MaterialIcon icon="navigate_before" />{" "}
                    <span>go back to Project List</span>
                </button>
            </div>
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
