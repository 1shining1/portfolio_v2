import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { workLists } from "../constants/index";

import { Pagination, Navigation } from "swiper";

function Detail() {
    const params = Number(Object.values(useParams()));

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
                    <h2>{name}</h2>
                </div>
            </div>
        );
    };

    // const [loading, setLoading] = useState(true);

    return (
        <>
            <h1>Detail</h1>
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
        </>
    );
}

export default Detail;
