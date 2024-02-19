import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import { Button, Typography, Tooltip } from "@mui/material";

const TakeImages = ({ setPhotoImage, setImageFailed, setMeasure }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImage2, setUploadedImage2] = useState(null);

  if (uploadedImage2?.file?.path) {
    const encode = btoa(uploadedImage2?.file?.path);
    console.log("2", encode);
  }
  if (uploadedImage?.file?.path) {
    const encode = btoa(uploadedImage?.file?.path);
    console.log("1", encode);
  }

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage({
      file,
      preview: URL.createObjectURL(file),
    });
  }, []);
  const onDrop2 = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage2({
      file,
      preview: URL.createObjectURL(file),
    });
  }, []);
  const theme = createTheme();
  const {
    getRootProps: getRootPropsFirst,
    getInputProps: getInputPropsFirst,
    isDragActive: isDragActiveFirst,
  } = useDropzone({ onDrop: onDrop });
  const {
    getRootProps: getRootPropsSecond,
    getInputProps: getInputPropsSecond,
    isDragActive: isDragActiveSecond,
  } = useDropzone({ onDrop: onDrop2 });

  const [ImageError, setImageError] = useState("");
  const [Image2Error, setImage2Error] = useState("");
  return (
    <div>
      <ThemeProvider theme={theme}>
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
              maxWidth: 450,
              px: 3,
              py: "30px",

              paddingBottom: "70px",
              width: "100%",
              border: "3px #d4cfc5 solid",
              borderRadius: "8px",
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
                fontFamily: "Soleil",
                sansSerif: "sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: 1,
                letterSpacing: "0.00735em",
                color: "black",
              }}
            >
              Powerd by swap{" "}
              <span>
                <img
                  src={"/assets/icons8-social-64.png"}
                  alt="not found"
                  style={{ height: "22px", cursor: "pointer" }}
                />
              </span>
            </Typography>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "40px",
                }}
              >
                <Typography
                  color="text.secondary"
                  variant="body2"
                  style={{
                    fontWeight: 400,
                    fontSize: "1.7rem",
                    lineHeight: 1.135,
                    letterSpacing: "0.00735em",
                    marginBottom: "10px",

                    fontFamily: "Soleil",
                    sansSerif: "sans-serif",
                    color: "black",
                  }}
                >
                  Take 2 Images
                </Typography>
              </div>
              <div>
                <div>
                  <img
                    src={"/assets/icons8-x-50.png"}
                    alt="not found"
                    style={{
                      transform: "scale(0.4)",
                      cursor: "pointer",
                      marginTop: "-30px",
                    }}
                    onClick={() => {
                      setPhotoImage(false);
                      setImageFailed(true);
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2%",
              }}
            >
              <div
                className="progress"
                style={{ width: "300px", height: "5px" }}
              >
                <div
                  className="progress-bar bg-pink"
                  role="progressbar"
                  style={{
                    width:
                      uploadedImage2?.file?.path && uploadedImage?.file?.path
                        ? "100%"
                        : uploadedImage?.file?.path ||
                          uploadedImage2?.file?.path
                        ? "50%"
                        : "0%",
                  }}
                ></div>
              </div>

              <div style={{ marginLeft: "20px" }}>
                <Tooltip title="Instructions" placement="top">
                  <img
                    src={"/assets/info_471662.png"}
                    alt="not found"
                    style={{ height: "20px", cursor: "pointer" }}
                  />
                </Tooltip>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "20px",
              }}
            >
              <Box
                style={{
                  border: "2px solid #cbd4ce",
                  borderRadius: "20px",
                  width: "45%",
                }}
              >
                <Typography
                  color="text.secondary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                    fontFamily: "Soleil",
                    sansSerif: "sans-serif",
                    color: "black",
                  }}
                >
                  FRONT POSE
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "5%",
                    position: "relative",
                  }}
                >
                  <img
                    src={"/assets/blackgirl.jpeg"}
                    alt="not found"
                    className="Girl"
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: 30,
                      // left: 40,
                    }}
                    className="HAIR"
                  >
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        fontSize: "8.9px",
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        marginTop: "-10px",
                        color: "black",
                      }}
                    >
                      {" "}
                      HAIR UP
                      <span>
                        <img
                          src={"/assets/icons8-dot-24.png"}
                          alt=""
                          className="Hairimage"
                        />
                      </span>
                    </Typography>
                  </div>

                  <span
                    style={{
                      position: "absolute",
                      // top: 80,
                      // right: 15,
                      color: "black",
                      fontWeight: 200,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                      // color:"black"
                    }}
                    className="TIGHT"
                  >
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        fontSize: "8.9px",
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        color: "black",
                      }}
                    >
                      TIGHT
                    </Typography>
                  </span>

                  <span style={{ position: "absolute" }} className="icons8">
                    <img
                      src={"/assets/icons8-dot-24.png"}
                      alt=""
                      style={{ height: "10px", cursor: "pointer" }}
                    />
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      // top: 95,
                      // right: 15,
                      color: "black",
                      fontWeight: 200,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                    }}
                    className="FITTED"
                  >
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        fontSize: "8.9px",
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        color: "black",
                      }}
                    >
                      FITTED
                    </Typography>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      // top: 110,

                      color: "black",
                      fontWeight: 200,

                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                    }}
                    className="CLOTHES"
                  >
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      className="CLOTHEST"
                      style={{
                        fontSize: "8.9px",
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        color: "black",
                      }}
                    >
                      CLOTHES
                    </Typography>
                  </span>

                  <span
                    style={{
                      position: "absolute",
                      bottom: 40,
                      left: 0,
                      color: "black",
                      fontWeight: 200,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                      // marginLeft:"2px"
                    }}
                    className="FLAT"
                  >
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        fontSize: "8.9px",
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        color: "black",
                      }}
                    >
                      FLAT SHOES
                    </Typography>

                    <span style={{ position: "absolute" }} className="Shoes">
                      <img
                        src={"/assets/icons8-dot-24.png"}
                        alt=""
                        style={{ height: "10px", cursor: "pointer" }}
                      />
                    </span>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 25,
                      left: 0,
                      color: "black",
                      fontWeight: 200,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                      // marginLeft:"2px"
                    }}
                    className="BARE"
                  >
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        fontSize: "8.9px",
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        color: "black",
                      }}
                    >
                      OR BARE
                    </Typography>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: 0,
                      color: "black",
                      fontWeight: 200,
                      fontSize: "0.8rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                      // marginLeft:"2px"
                    }}
                    className="FEET"
                  >
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        fontSize: "8.9px",
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        color: "black",
                      }}
                    >
                      FEET
                    </Typography>
                  </span>
                </div>
                <hr />

                <div
                  style={{
                    paddingBottom: "10px",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span {...getRootPropsFirst()}>
                    <img
                      src={"/assets/upload-arrow.png"}
                      alt=""
                      style={{
                        height: "40px",
                        width: "40px",
                        marginRight: "5px",
                      }}
                    />
                  </span>
                  UPLOAD
                </div>
              </Box>
              <Box
                style={{
                  border: "2px solid #cbd4ce",
                  borderRadius: "20px",
                  width: "45%",
                }}
              >
                <Typography
                  color="text.secondary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",

                    fontFamily: "Soleil",
                    sansSerif: "sans-serif",
                    color: "black",
                  }}
                >
                  SIDE POSE
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "5%",
                  }}
                >
                  <img
                    src={"/assets/boy.png"}
                    alt="not found"
                    className="Boy"
                  />
                </div>
                <hr />
                <div
                  style={{
                    paddingBottom: "10px",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span {...getRootPropsSecond()}>
                    <img
                      src={"/assets/upload-arrow.png"}
                      alt=""
                      style={{
                        height: "40px",
                        width: "40px",
                        marginRight: "5px",
                      }}
                    />
                  </span>
                  UPLOAD
                </div>
              </Box>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Typography
                color="text.secondary"
                variant="body2"
                style={{
                  fontFamily: "Soleil",
                  sansSerif: "sans-serif",
                  marginRight: "40px",
                  marginLeft: "40px",
                  justifyContent: "center",
                  // color:"black",
                  // fontSize:"bold",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Your privacy is important all photos will be securely locked
                after we give you your size
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "black",
                  fontFamily: "Soleil",
                  sansSerif: "sans-serif",
                }}
                onClick={() => {
                  if (uploadedImage2?.file?.path == null) {
                    setImage2Error("Please Upload a image");
                  }
                  if (uploadedImage?.file?.path == null) {
                    setImageError("Please Upload a image");
                  }
                  if (uploadedImage2?.file?.path && uploadedImage?.file?.path) {
                  }
                  setPhotoImage(false);
                  setMeasure(true);
                }}
              >
                NEXT
              </Button>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default TakeImages;
