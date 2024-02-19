import React from "react";

const VTO = ({ setStatus, SetLogin }) => {
  return (
    <div>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <b
            style={{
              marginTop: "20px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            VTO
          </b>
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
