import React, { useState } from "react";
import "./try.css";
import { WidthFull } from "@mui/icons-material";

const Favorite = ({ close, back }) => {
  const [PhotoImage, setPhotoImage] = useState(false);
  const [Measure, setMeasure] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <div  style={{height:"480px"}}>
      <div >
        <h4
          className="handleFavTxt"
          style={{
            // color: "#a19f99",
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "SoleilBold",
          }}
        >
          Favorites
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "25px",
          }}
        >
          <div
            className="col-md-5 handleImgBorder"
            style={{ marginRight: "0px", padding: "20px",display: "flex",justifyContent: "center",
            alignItems: "center" }}
          >
            <img
              src={"/assets/firstimage.jpg"}
              alt=""
              style={{ height: "70px", marginLeft: "10px", marginTop: "2px" }}
            />
          </div>
          <div
            className="col-md-5 handleImgBorder"
            style={{ marginRight: "0px", padding: "20px" ,display: "flex",justifyContent: "center",alignItems: "center" }}
          >
            <img
              src={"/assets/icons8-dress-48.png"}
              alt=""
              style={{ height: "80px", marginLeft: "5px" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "25px",
          }}
        >
          <div
            className="col-md-5 handleImgBorder"
            style={{ marginRight: "0px", padding: "20px",display: "flex",justifyContent: "center",alignItems: "center"  }}
          >
            <img
              src={"/assets/icons8-dress-48 (1).png"}
              alt=""
              style={{ height: "70px", marginLeft: "10px", marginTop: "2px" }}
            />
          </div>
          <div
            className="col-md-5 handleImgBorder"
            style={{ marginRight: "0px", padding: "20px",display: "flex",justifyContent: "center",alignItems: "center"  }}
          >
            <img
              src={"/assets/icons8-dress-48 (2).png"}
              alt=""
              style={{ height: "80px", marginLeft: "5px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
