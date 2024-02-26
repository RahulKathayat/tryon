import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import { Button, Typography, Tooltip } from "@mui/material";

const TakeImages = ({ setPhotoImage, setImageFailed, setMeasure }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImage2, setUploadedImage2] = useState(null);
  const [instructionPopup,setInstructionPopup] = useState(false);

  if (uploadedImage2?.file?.path) {
    const encode = btoa(uploadedImage2?.file?.path);
    console.log("2", encode);
  }
  if (uploadedImage?.file?.path) {
    const encode = btoa(uploadedImage?.file?.path);
    console.log("1", encode);
  }

  const onDrop = useCallback((acceptedFiles) => {
    console.log( acceptedFiles);
    const file = acceptedFiles[0];
    // console.log(URL.createObjectURL(file));
    setUploadedImage({
      file,
      preview: URL.createObjectURL(file),
    });
  }, []);
  const onDrop2 = useCallback((acceptedFiles) => {
    console.log( acceptedFiles);
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
            // height: "100vh",
            justifyContent: "center",
            padding:"2%",
          }}
        >
          {instructionPopup ? (
            <Box
            sx={{
              maxWidth: 450,
              px: 4,
              py: "30px",

              // paddingBottom: "70px",
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
                fontFamily: "SoleilLight",
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
                    fontWeight: "bold",
                    fontSize: "1.8rem",
                    // lineHeight: 1.135,
                    letterSpacing: "0.01em",
                    marginBottom: "10px",

                    fontFamily: "SoleilRegular",
                    sansSerif: "sans-serif",
                    color: "black",
                  }}
                >
                  INSTRUCTIONS
                </Typography>
              </div>
              <div>
                <div>
                  <img
                    src={"/assets/icons8-x-50.png"}
                    alt="not found"
                    style={{
                      transform: "scale(0.35)",
                      cursor: "pointer",
                      marginTop: "-50px",
                      marginRight:"-35px"
                    }}
                    onClick={() => {
                      setInstructionPopup(false)
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2%",
                gap:"25px",
              }}
            >
              {/* Add instructions Here  */}
              <Typography
                color="text.secondary"
                variant="h6"
                style={{
                  fontFamily: "SoleilRegular",
                  sansSerif: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  // letterSpacing: "0.00735em",
                  color: "black",
                  marginTop: "2%",
                }}
              >
                 Photo help

              </Typography>
              <Typography
                color="text.secondary"
                variant="h6"
                style={{
                  fontFamily: "SoleilRegular",
                  sansSerif: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  lineHeight: 1,
                  letterSpacing: "0.00735em",
                  color: "black",
                  textAlign: "center",
                  maxWidth: "330px",
                }}
              >
                • To get the best result think smiley passport photo rather than a selfie.

              </Typography>
              <Typography
                color="text.secondary"
                variant="h6"
                style={{
                  fontFamily: "SoleilRegular",
                  sansSerif: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  lineHeight: 1,
                  letterSpacing: "0.00735em",
                  color: "black",
                  textAlign: "center",
                  maxWidth: "330px",
                }}
              >
                • Make sure to stand back, chin above the shoulders, body facing the camera to get the best results.

              </Typography>
              <Typography
                color="text.secondary"
                variant="h6"
                style={{
                  fontFamily: "SoleilRegular",
                  sansSerif: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  lineHeight: 1,
                  letterSpacing: "0.00735em",
                  color: "black",
                  textAlign: "center",
                  maxWidth: "330px",
                }}
              >
                • Make sure your face and neck are visible in the photo, wear something that shows your neck.

              </Typography>
              <Typography
                color="text.secondary"
                variant="h6"
                style={{
                  fontFamily: "SoleilRegular",
                  sansSerif: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  lineHeight: 1,
                  letterSpacing: "0.00735em",
                  color: "black",
                  textAlign: "center",
                  maxWidth: "330px",
                }}
              >
                • Don't have hair resting on your shoulders, keep the hair in front or tied back.

              </Typography>
              <Typography
                color="text.secondary"
                variant="h6"
                style={{
                  fontFamily: "SoleilRegular",
                  sansSerif: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  lineHeight: 1,
                  letterSpacing: "0.00735em",
                  color: "black",
                  textAlign: "center",
                  maxWidth: "330px",
                }}
              >
                • Make sure your face is evenly lit, try standing in front of the window.

              </Typography>
              <Typography
                color="text.secondary"
                variant="h6"
                style={{
                  fontFamily: "SoleilRegular",
                  sansSerif: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  lineHeight: 1,
                  letterSpacing: "0.00735em",
                  color: "black",
                  textAlign: "center",
                  maxWidth: "330px",
                }}
              >
                • Don't stand too close or far from the camera, use timer on your phone to time the perfect click.

              </Typography>
            </div>

            </Box>
          ) : (
            <Box
            sx={{
              maxWidth: 450,
              px: 4,
              py: "30px",

              // paddingBottom: "70px",
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
                fontFamily: "SoleilLight",
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
                    fontWeight: "bold",
                    fontSize: "1.7rem",
                    // lineHeight: 1.135,
                    letterSpacing: "0.01em",
                    marginBottom: "10px",

                    fontFamily: "SoleilBold",
                    sansSerif: "sans-serif",
                    color: "black",
                  }}
                >
                  Upload 2 Images
                </Typography>
              </div>
              <div>
                <div>
                  <img
                    src={"/assets/icons8-x-50.png"}
                    alt="not found"
                    style={{
                      transform: "scale(0.35)",
                      cursor: "pointer",
                      marginTop: "-50px",
                      marginRight:"-35px"
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
                    onClick={ () => setInstructionPopup(true)}
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
                  border: "1.2px solid #6554AF",
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
                    fontFamily: "SoleilRegular",
                    // sansSerif: "sans-serif",
                    fontWeight:"bold",
                    color: "black",
                    letterSpacing:"0.03em",
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
                  {uploadedImage ? (
                    <img
                      src={uploadedImage.preview}
                      alt="not found"
                      className="Girl"
                      style={{objectFit:"contain"}}
                    />
                  ):(
                    <img
                      src={"/assets/female-front.png"}
                      alt="not found"
                      className="Girl"
                    />
                  )}
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
                        fontFamily: "SoleilLight",
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
                        fontFamily: "SoleilLight",
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
                        fontFamily: "SoleilLight",
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
                        fontFamily: "SoleilLight",
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
                        fontFamily: "SoleilLight",
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
                        fontFamily: "SoleilLight",
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
                        fontFamily: "SoleilLight",
                        sansSerif: "sans-serif",
                        color: "black",
                      }}
                    >
                      FEET
                    </Typography>
                  </span>
                </div>
                <hr style={{border:"1.5px solid #6554AF"}}/>

                <div
                  {...getRootPropsFirst()}
                  style={{
                    paddingBottom: "10px",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontFamily:"SoleilBold",
                  }}
                >
                  <span>
                    <img
                      src={"/assets/upload-cloud-icon.png"}
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
                  border: "1.2px solid #6554AF",
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
                    fontFamily:"SoleilBold",
                    fontWeight: "bold",
                    sansSerif: "sans-serif",
                    color: "black",
                    letterSpacing:"0.03em",
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
                  {uploadedImage2 ? (
                    <img
                      src={uploadedImage2.preview}
                      alt="not found"
                      className="Boy"
                      style={{objectFit:"contain"}}
                    />
                  ) : (
                    <img
                      src={"/assets/fullbody-side.png"}
                      alt="not found"
                      className="Boy"
                      
                    />
                  )}
                </div>
                <hr style={{border:"1.5px solid #6554AF"}}/>
                <div
                  {...getRootPropsSecond()}
                  style={{
                    paddingBottom: "10px",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    fontWeight:"bold",
                    cursor: "pointer",
                    fontFamily:"SoleilBold"
                  }}
                >
                  <span >
                    <img
                      src={"/assets/upload-cloud-icon.png"}
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
                  fontFamily: "SoleilLight",
                  sansSerif: "sans-serif",
                  marginRight: "40px",
                  marginLeft: "40px",
                  justifyContent: "center",
                  // color:"black",
                  // fontSize:"bold",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Your privacy is very important and all photos will be securely locked
                after we give you your size
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                fullWidth
                size="large"
                sx={{
                  backgroundColor: "black",
                  '&:hover': {
                    backgroundColor: '#2B2730',
                    transform:"scale(1.01)",
                  },
                  transition: 'backgroundColor 0.3s ease,transform 0.3s ease',
                  mt:3,
                  mb:2,
                }}
                type="submit"
                variant="contained"
                style={{
                  fontFamily: "SoleilBold",
                  sansSerif: "sans-serif",
                  borderRadius:"25px",
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
          )}
          
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default TakeImages;
