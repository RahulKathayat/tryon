import React, { useState } from "react";
import "./try.css";

const Favorite = () => {
  const [PhotoImage, setPhotoImage] = useState(false);
  const [Measure, setMeasure] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              setMeasure(false);
              setPhotoImage(true);
            }}
          />
        </div>
        <div>
          <img
            src={"/assets/icons8-x-50.png"}
            alt="not found"
            style={{ transform: "scale(0.4)", cursor: "pointer" }}
            onClick={() => {
              setMeasure(false);
              setStatus(false);
            }}
          />
        </div>
      </div>
      <hr style={{ border: "1px #d4cfc5 solid", marginTop: "-8px" }} />

      <div>
        <h4
          className="handleFavTxt"
          style={{
            // color: "#a19f99",
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Favorite
        </h4>
        <div style={{ display: "flex", justifyContent:"space-between" , margin:"25px"}}>
          <div
            className="col-md-5 handleImgBorder"
            style={{ marginRight: "0px", padding:"20px" }}
          >
            <img
              src={"/assets/firstimage.jpg"}
              alt=""
              style={{ height: "70px", marginLeft: "10px", marginTop: "2px" }}
            />
          </div>
          <div className="col-md-5 handleImgBorder"  style={{ marginRight: "0px", padding:"20px" }}>
            <img
              src={"/assets/icons8-dress-48.png"}
              alt=""
              style={{ height: "80px", marginLeft: "5px" }}
            />
          </div>
        </div>


        <div style={{ display: "flex", justifyContent:"space-between" , margin:"25px"}}>
          <div
            className="col-md-5 handleImgBorder"
            style={{ marginRight: "0px", padding:"20px" }}
          >
            <img
             src={"/assets/icons8-dress-48 (1).png"}
              alt=""
              style={{ height: "70px", marginLeft: "10px", marginTop: "2px" }}
            />
          </div>
          <div className="col-md-5 handleImgBorder"  style={{ marginRight: "0px", padding:"20px" }}>
            <img
             src={"/assets/icons8-dress-48 (2).png"}
              alt=""
              style={{ height: "80px", marginLeft: "5px" }}
            />
          </div>
        </div>

        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="col-md-6 handleImgBorder">
            <img
              src={"/assets/icons8-dress-48 (1).png"}
              alt=""
              style={{ height: "70px", marginLeft: "10px", marginTop: "2px" }}
            />
          </div>
          <div className="col-md-6 handleImgBorder">
            <img
              src={"/assets/icons8-dress-48 (2).png"}
              alt=""
              style={{ height: "75px", marginLeft: "5px" }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Favorite;
