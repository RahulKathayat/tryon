import React, { useState } from "react";
import Profile from "../Profile";
import TryOn from "../Tryon";
import Favorite from "../Favorite";
import { Box } from "@mui/material";

const Mobile = ({ close, back, setMobiledata, setStatus }) => {
  const [selectedOptionProfile, setSelectedOptionProfile] = useState("profile");
  const handleOptionClick = (option) => {
    setSelectedOptionProfile(option);
  };
  return (
    <div>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          padding: "2%",
        }}
      >
        <Box
          sx={{
            maxWidth: 350,
            width: "100%",
            border: "3px #d4cfc5 solid",
            borderRadius: "8px",
            fontFamily: "Soleil",
            sansSerif: "sans-serif",
            color: "#a19f99",
          }}
        >
          <div style={{ height: "540px" }}>
            {selectedOptionProfile === "tryOn" && (
              <div>
                <TryOn close={close} back={back} />
              </div>
            )}
            {selectedOptionProfile === "favorite" && (
              <div>
                <Favorite close={close} back={back} />
              </div>
            )}
            {selectedOptionProfile === "profile" && (
              <div style={{ position: "relative" }}>
                <Profile close={close} back={back} />
              </div>
            )}
          </div>

          <hr
            style={{
              border: "1px #d4cfc5 rgb(212, 207, 197)",
              marginBottom: "0px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            <div
              style={{
                border:
                  selectedOptionProfile === "tryOn"
                    ? "2px #d4cfc5 solid"
                    : "2px white solid",
                borderRadius: "15px",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleOptionClick("tryOn")}
            >
              <img
                src={"/assets/icons8-cloakroom-100.png"}
                alt=""
                style={{
                  height: "25px",
                  width: "25px",
                  marginLeft: "9px",
                }}
              />
              <div style={{ color: "black" }}>Try on</div>
            </div>
            <div
              style={{
                border:
                  selectedOptionProfile === "favorite"
                    ? "2px #d4cfc5 solid"
                    : "2px white solid",
                borderRadius: "15px",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleOptionClick("favorite")}
            >
              <img
                src={"/assets/icons8-favorite-100.png"}
                alt=""
                style={{
                  height: "25px",
                  width: "25px",
                  marginLeft: "15px",
                }}
              />
              <div style={{ color: "black" }}>Favorite</div>
            </div>
            <div
              style={{
                border:
                  selectedOptionProfile === "profile"
                    ? "2px #d4cfc5 solid"
                    : "2px white solid",
                borderRadius: "15px",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleOptionClick("profile")}
            >
              <img
                src={"/assets/icons8-customer-100.png"}
                alt=""
                style={{
                  height: "25px",
                  width: "25px",
                  marginLeft: "9px",
                }}
              />
              <div style={{ color: "black" }}>Profile</div>
            </div>

            <div
              style={{
                border:
                  selectedOptionProfile === "logout"
                    ? "2px #d4cfc5 solid"
                    : "2px white solid",
                borderRadius: "15px",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                const confirm = window.confirm("Are you sure to logout?");
                if (confirm) {
                  setMobiledata(false);
                  setStatus(false);

                  window.location.reload();
                }
              }}
            >
              <img
                src={"/assets/icons8-logout-50.png"}
                alt=""
                style={{
                  height: "21px",
                  width: "21px",
                  marginLeft: "13px",
                }}
              />
              <div style={{ color: "black" }}>Logout</div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Mobile;
