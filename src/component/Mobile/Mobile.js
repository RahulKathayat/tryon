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
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          padding: "2%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: 350,
            width: "100%",
            border: "1.5px gray solid",
            borderRadius: "20px",
            fontFamily: "SoleilRegular",
            sansSerif: "sans-serif",
            color: "#a19f99",
            height: "640px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transform: "scale(0.97)",
            padding: "1px",
            backgroundImage:"linear-gradient(to bottom, #00050B 9%, #ffffff 9%)",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <img
                  src={"/assets/whiteback.png"}
                  alt="not found"
                  style={{
                    transform: "scale(0.4)",
                    cursor: "pointer",
                    marginLeft: "0px",
                    position:"relative",
                    bottom:"0.3em",right:"0.9em"
                  }}
                  onClick={() => {
                    back(true)
                  }}
                />
              </div>
              <div>
                <img
                  src={"/assets/icons8-cross-50.png"}
                  alt="not found"
                  objectFit="contain"
                  style={{ transform: "scale(0.5)", cursor: "pointer",position:"relative",top: "0.2em",left:"0.5em" }}
                  onClick={() => {
                    close(true);
                  }}
                />
              </div>
            </div>
            <hr style={{ 
              border: "1px solid gray", 
              marginTop: "-8px" ,
              boxShadow:"0px 2px 8px black"
              }} />
          </div>


          <div style={{ maxHeight:"520px"}}>
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
          <div>
            <hr
              style={{
                marginBottom:"1px",
                border:"1px solid gray",
                boxShadow:"0px 2px 8px black"
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
              // className="hoverBgChange"
                style={{
                  // border:
                  //   selectedOptionProfile === "tryOn"
                  //     ? "2px #B4B4B8 solid"
                  //     : "2px white solid",
                  borderRadius: "20px",
                  padding: "10px",
                  paddingBottom:selectedOptionProfile === "tryOn" ? "10px":"0px",
                  transition:"all 0.15s ease-in",
                  cursor: "pointer",
                  // backgroundColor : selectedOptionProfile === "tryOn" ? "#F1EAFF":"",
                  display: "flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center",
                }}
                onClick={() => handleOptionClick("tryOn")}
              >
                <img
                  src={"/assets/fashion.png"}
                  alt=""
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                />
                <div style={{ 
                  color : selectedOptionProfile === "tryOn"
                  ? "black" : "#B4B4B8" ,
                  fontFamily : selectedOptionProfile === "tryOn" ? "SoleilBold" : "SoleilLight" , 
                 }}>Try-on</div>
              </div>
              <div
                // className="hoverBgChange"
                style={{
                  // border:
                  //   selectedOptionProfile === "favorite"
                  //     ? "2px #B4B4B8 solid"
                  //     : "2px white solid",
                  borderRadius: "20px",
                  padding: "10px",
                  paddingBottom:selectedOptionProfile === "favorite" ? "10px":"0px",
                  transition:"all 0.15s ease-in",
                  cursor: "pointer",
                  // backgroundColor : selectedOptionProfile === "favorite" ? "#F1EAFF":"",
                  display: "flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center",
                }}
                onClick={() => handleOptionClick("favorite")}
              >
                <img
                  src={"/assets/bookmark.png"}
                  alt=""
                  style={{
                    height: "18px",
                    width: "18px",
                  }}
                />
                <div style={{ 
                  color : selectedOptionProfile === "favorite"
                  ? "black" : "#B4B4B8" ,
                  fontFamily : selectedOptionProfile === "favorite" ? "SoleilBold" : "SoleilLight" ,
                 }}>Favorite</div>
              </div>
              <div
              // className="hoverBgChange"
                style={{
                  // border:
                  //   selectedOptionProfile === "profile"
                  //     ? "2px #B4B4B8 solid"
                  //     : "2px white solid",
                  borderRadius: "20px",
                  padding: "10px",
                  cursor: "pointer",
                  // backgroundColor : selectedOptionProfile === "profile" ? "#F1EAFF":"",
                  display: "flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center",
                  paddingBottom:selectedOptionProfile === "profile" ? "10px":"0px",
                  transition:"all 0.15s ease-in",
                }}
                onClick={() => handleOptionClick("profile")}
              >
                <img
                  src={"/assets/avatar.png"}
                  alt=""
                  style={{
                    height: "18px",
                    width: "18px",
                  }}
                />
                <div style={{ 
                  color : selectedOptionProfile === "profile"
                  ? "black" : "#B4B4B8" ,
                  fontFamily : selectedOptionProfile === "profile" ? "SoleilBold" : "SoleilLight" ,
                 }}
                 
                 >
                  Profile
                </div>
              </div>

              <div
                // className="hoverBgChange"
                style={{
                  // border:
                  //   selectedOptionProfile === "logout"
                  //     ? "2px #B4B4B8 solid"
                  //     : "2px white solid",
                  borderRadius: "20px",
                  padding: "10px",
                  cursor: "pointer",
                  paddingBottom:selectedOptionProfile === "logout" ? "10px":"0px",
                  transition:"all 0.15s ease-in",
                  // backgroundColor : selectedOptionProfile === "logout" ? "#F1EAFF":""
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
                  src={"/assets/sign-out-option.png"}
                  alt=""
                  style={{
                    height: "21px",
                    width: "21px",
                    marginLeft: "13px",
                  }}
                />
                <div style={{ 
                  color : selectedOptionProfile === "logout"
                  ? "black" : "#B4B4B8" ,
                  fontFamily : selectedOptionProfile === "logout" ? "SoleilBold" : "SoleilLight" ,
                 }}
                >Logout</div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Mobile;
