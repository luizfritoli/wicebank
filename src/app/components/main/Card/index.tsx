import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { HiOutlineSortDescending } from "react-icons/hi";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";


type PropTypes = {
  title:string
  desc:string
  balance?:number
  icon?:string
}

const Card = ({ title, desc, icon }:PropTypes) => {
  return (
    <div className="card">
      <div className="card-info">
        <h2>
          {title}{" "}
          {icon === "transfer" ? (
            <HiOutlineSwitchHorizontal className="icon" />
          ) : icon === "extract" ? (
            <HiOutlineSortDescending className="icon" />
          ) : icon === "receive" ? (
            <HiOutlineTrendingUp className="icon" />
          ) : icon === "leave" ? (
            <HiLockClosed className="icon" />
          ) : ""
            }
        </h2>
        <span>{desc}</span>
      </div>
    </div>
  );
}

export default Card
