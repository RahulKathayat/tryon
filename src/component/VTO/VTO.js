import React from "react";

const VTO = ({ setStatus, SetLogin }) => {
  return (
    <div>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={'/assets/swaplogo.png'} height={60}/>
          {/* <b
            style={{
              marginTop: "20px",
              fontWeight: "bold",
              fontSize: "30px",
              fontFamily:"SoleilBold"
            }}
          >
            VTO
          </b> */}
          &nbsp;&nbsp;
          <img
            src={"/assets/icons8-hanger-50.png"}
            alt="not found"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setStatus(true);
              SetLogin(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VTO;
