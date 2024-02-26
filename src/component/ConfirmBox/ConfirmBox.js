import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const ConfirmBox = () => {
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
            maxWidth: 300,
            py: "20px",
            paddingBottom: "50px",
            width: "100%",
            border: "1.5px gray solid",
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <Typography
            color="text.secondary"
            variant="body2"
            style={{
              position: "absolute",
              right: "10px",
              bottom: "5px",

              fontFamily: "SoleilRegular",
              sansSerif: "sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: 1,
              letterSpacing: "0.00735em",
              color: "black",
            }}
          >
            Powered by Swap{" "}
            <span>
              <img
                src={"/assets/icons8-social-64.png"}
                alt="not found"
                style={{ height: "22px", cursor: "pointer" }}
              />
            </span>
          </Typography>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <img
                src={"assets/login-successful-9696591-7864617.webp"}
                alt=""
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            <Typography
              color="text.secondary"
              variant="body2"
              style={{
                fontFamily: "SoleilRegular",
                sansSerif: "sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1,
                letterSpacing: "0.00735em",
                marginRight: "20px",
                marginLeft: "50px",
                color: "black",
              }}
            >
              Profile Created Successfully!
            </Typography>
            <Typography
              color="text.secondary"
              variant="body2"
              style={{
                fontFamily: "SoleilRegular",
                sansSerif: "sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1,
                letterSpacing: "0.00735em",
                marginRight: "20px",
                marginLeft: "70px",
                color: "black",
              }}
            >
              Entering your virtual room
            </Typography>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ConfirmBox;
