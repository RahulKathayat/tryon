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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            src={"/assets/icons8-less-than-30.png"}
            alt="not found"
            style={{
              transform: "scale(0.6)",
              cursor: "pointer",
              marginTop: "10px",
              marginLeft: "2px",
            }}
            onClick={() => {
              back(true)
            }}
          />
        </div>
        <div>
          <img
            src={"/assets/icons8-x-50.png"}
            alt="not found"
            style={{ transform: "scale(0.4)", cursor: "pointer" }}
            onClick={() => {
              close(true);
            }}
          />
        </div>
      </div>
      <hr
        style={{
          border: "1px solid gray",
          marginTop: "-8px",
          marginBottom: "0px",
        }}
      />
      <div style={{ position: "relative", marginBottom: "-12px" }}>
        <FavoriteBorderIcon
          className={`handleIcon ${isClicked ? "clicked" : ""}`}
          // onClick={handleIconClick}
          style={{ cursor: "pointer" }}
        />
        <img
          src={"/assets/blackgirls.jpg"}
          style={{ width: "100%", height: "500px" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default TryOn;
