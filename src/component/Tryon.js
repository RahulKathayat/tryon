import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./try.css";
const TryOn = ({ close, back }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <div style={{ position: "relative", marginBottom: "-12px" }}>
        <FavoriteBorderIcon
          className={`handleIcon ${isClicked ? "clicked" : ""}`}
          // onClick={handleIconClick}
          style={{ cursor: "pointer" }}
        />
        <img
          src={"/assets/female-front.png"}
          style={{ width: "100%", height: "480px" ,objectFit: "contain",filter:"drop-shadow(2px 3px 4px #555)" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default TryOn;
