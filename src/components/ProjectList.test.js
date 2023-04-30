import { Link } from "react-router-dom";

const TestList = ({ index, name }) => {
    return (
        <div className="listItem">
            <Link
                to={{
                    pathname: `/portfolio_v2/project_detail/${index}`,
                }}
            >
                <span className="num">
                    {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="title">{name}</span>
            </Link>
            <p className="info"></p>
        </div>
    );
};

export default TestList;
