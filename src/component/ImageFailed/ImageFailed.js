import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import { Typography } from "@mui/material";
const theme = createTheme();
const ImageFailed = () => {
  return (
    <div>
      <div style={{ fontFamily: "SoleilRegular", sansSerif: "sans-serif" }}>
        <ThemeProvider theme={theme}>
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "SoleilRegular",
                    sansSerif: "sans-serif",
                    fontWeight: 400,
                    fontSize: "2rem",
                    lineHeight: 1,
                    letterSpacing: "0.00735em",
                    color: "black",
                  }}
                >
                  Oops!
                </Typography>
                <div>
                  <img
                    src={"assets/search-not-found.png"}
                    alt=""
                    style={{ height: "200px", width: "300px" }}
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
                  We couldn't find a face in the
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
                  images. Please try again
                </Typography>
              </div>
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ImageFailed;
