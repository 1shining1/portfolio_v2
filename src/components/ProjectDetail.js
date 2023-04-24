// import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import Detail from "../components/RealDetail";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";

// const params = useParams();
// useEffect(() => {
//     console.log("params: ", params);
// }, [params]);

const Lists = ({ id, index, name, image, content }) => {
    return (
        // <div variants={index}>
        <div>
            <img src={image} alt="img" />
            {/* <Link to={`/project_detail/${id}`}>link{index}</Link> */}
            <Link
                to={{
                    pathname: `/project_detail/${index}`,
                    state: { content },
                }}
            >
                whatever {index}
            </Link>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Lists;
