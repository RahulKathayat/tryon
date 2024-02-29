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
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "SoleilBold",
            letterSpacing:"1px"
          }}
        >
          FAVORITES
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
            alignItems: "center",boxShadow:"5px 5px 10px gray" }}
          >
            <img
              src={"/assets/firstimage.jpg"}
              alt=""
              style={{ height: "70px" }}
            />
          </div>
          <div
            className="col-md-5 handleImgBorder"
            style={{ marginRight: "0px", padding: "20px" ,display: "flex",justifyContent: "center",alignItems: "center",boxShadow:"5px 5px 10px gray" }}
          >
            <img
              src={"/assets/icons8-dress-48.png"}
              alt=""
              style={{ height: "80px" }}
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
            style={{ marginRight: "0px", padding: "20px",display: "flex",justifyContent: "center",alignItems: "center" ,boxShadow:"5px 5px 10px gray" }}
          >
            <img
              src={"/assets/icons8-dress-48 (1).png"}
              alt=""
              style={{ height: "70px"}}
            />
          </div>
          <div
            className="col-md-5 handleImgBorder"
            style={{ marginRight: "0px", padding: "20px",display: "flex",justifyContent: "center",alignItems: "center" ,boxShadow:"5px 5px 10px gray" }}
          >
            <img
              src={"/assets/icons8-dress-48 (2).png"}
              alt=""
              style={{ height: "80px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
