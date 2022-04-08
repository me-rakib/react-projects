import star_emp from "./images/star-empty.png";
import star_fill from "./images/star-filled.png";

export default function Star(props) {
    return (
        <img
          onClick={props.handleClick}
          src={props.isFavourite ? star_fill : star_emp}
          className="card-star"
          alt="star"
        ></img>
    )
}