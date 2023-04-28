// import { Swiper, SwiperSlide } from "swiper/react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import Detail from "../components/RealDetail";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { useEffect } from "react";

const Lists = ({ index, name, image, content }) => {
    return (
        // <div variants={index}>
        <div className="listItem">
            <Link
                to={{
                    pathname: `/portfolio_v2/project_detail/${index}`,
                    state: { content },
                }}
            >
                <img src={image} alt="img" className="list_img" />
                <span className="list_txt">MORE</span>
            </Link>
            <p className="list_title">{name}</p>
        </div>
    );
};

export default Lists;
