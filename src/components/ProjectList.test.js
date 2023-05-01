import { Link } from "react-router-dom";
import MaterialIcon from "react-google-material-icons";

const TestList = ({ index, name }) => {
    return (
        <div className="list-item">
            <Link
                to={{
                    pathname: `/portfolio_v2/project_detail/${index}`,
                }}
            >
                <span className="num">
                    {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="title">
                    {name}
                    <MaterialIcon icon="south_east" />
                </span>
            </Link>
            {/* <p className="info"></p> */}
        </div>
    );
};

export default TestList;
