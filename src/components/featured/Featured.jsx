import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import { useSelector } from "react-redux";

export default function Featured() {
  const data = useSelector((state) => state.data.data);
  console.log(data.movies[4].img);
  return (
    <div className="featured">
      <img src={data.movies[4].img} />
      <div className="info">
        <span className="logo">
          <img src="https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png" />
        </span>
        <div className="title">{data.movies[4].title}</div>
        <span className="desc">{data.movies[4].description}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
