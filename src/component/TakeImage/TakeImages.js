import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import { Button, Typography, Tooltip } from "@mui/material";

const TakeImages = ({ setPhotoImage, setImageFailed, setMeasure }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [instructionPopup,setInstructionPopup] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    console.log( acceptedFiles);
    const file = acceptedFiles[0];
    // console.log(URL.createObjectURL(file));
    if (file) {
      convertImageToBase64(file)
        .then((base64String) => {
          // Do something with the base64String
          console.log("Base64 string:", base64String);
          sessionStorage.setItem("uploadedImage", base64String);
          setUploadedImage({
            file,
            preview: URL.createObjectURL(file),
          });
        })
        .catch((error) => {
          console.error("Error converting image to base64:", error);
        });
    }
  }, []);
  const theme = createTheme();
  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone(
  { 
    accept:{
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
    },
    maxSize: 1048576,  // 1 MB in bytes
    onDrop:onDrop,
    onDropRejected: rejectedFiles => {
      console.log('Rejected files:', rejectedFiles);
    },
  });

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        resolve(reader.result);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }; 

  const [ImageError, setImageError] = useState(null);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            flex: "1 1 auto",
            alignItems: "center",
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            padding:"2%",
          }}
        >
          {instructionPopup ? (
            <Box
            sx={{
              maxWidth: 400,
              minHeight:"100vh",
              px: 4,
              py: "30px",
              width: "100%",
              border: "1.5px gray solid",
              borderRadius: "20px",
              position: "relative",
              transform: "scale(0.9)",
              backgroundImage:"linear-gradient(to bottom, #00050B 10%, #ffffff 10%)",
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
                    fontSize: "1.6rem",
                    // lineHeight: 1.135,
                    letterSpacing: "0.01em",
                    marginBottom: "10px",
                    position: "relative",
                    bottom: "20%",
                    fontFamily: "SoleilRegular",
                    sansSerif: "sans-serif",
                    color: "white",
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
                      transform: "scale(0.3)",
                      cursor: "pointer",
                      marginTop: "-50px",
                      marginRight:"-35px",
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
              maxWidth: 400,
              minHeight:"100vh",
              px: 4,
              py: "30px",
              width: "100%",
              border: "1.5px gray solid",
              borderRadius: "20px",
              position: "relative",
              transform: "scale(0.9)",
              backgroundImage:"linear-gradient(to bottom, #00050B 10%, #ffffff 10%)",
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
                    fontSize: "1.6rem", 
                    letterSpacing: "0.01em",
                    marginBottom: "10px",
                    fontFamily: "SoleilBold",
                    color: "white",
                    position: "relative",
                    bottom: "20%",
                  }}
                >
                  Upload an Image
                </Typography>
              </div>
              <div>
                <div>
                  <img
                    src={"/assets/icons8-x-50.png"}
                    alt="not found"
                    style={{
                      transform: "scale(0.3)",
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
                         uploadedImage?.file?.path
                        ? "100%"
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
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Box
                style={{
                  border: "1.2px solid #6554AF",
                  borderRadius: "15px",
                  width: "100%",
                }}
              >
                <Typography
                  color="text.secondary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "12px",
                    marginBottom: "12px",
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
                    height:"300px",
                    display:"flex",
                    justifyContent:"space-between"
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
                    <>
                    
                      <img
                        src={"/assets/female-front.png"}
                        alt="not found"
                        objectFit="contain"
                        />
                        <div style={{fontSize:"10px" ,letterSpacing:"0.04em"}}>
                           <span style={{fontFamily:"SoleilRegular",textAlign:"center"}}>Guidelines to upload photo for better results:</span>
                           <ul >
                            <br/>
                              <li style={{fontFamily:"SoleilLight"}}>Tight fitted clothes</li><br/>
                              <li style={{fontFamily:"SoleilLight"}}>Hair tied up.</li> <br/>
                              <li style={{fontFamily:"SoleilLight"}}>Flat Shoes/Bare feet</li> 
                           </ul>
                        </div>
                    </>
                  )}
                </div>
                <hr style={{border:"1.5px solid #6554AF",position:"relative",top:"8px"}}/>
                <div
                  {...getRootProps()}
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
                  <input {...getInputProps()} />
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
                  {isDragActive ? (<div>Drop here..</div>) : (<div>UPLOAD</div>)}
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
                  marginRight: "30px",
                  marginLeft: "30px",
                  justifyContent: "center",
                  // color:"black",
                  // fontSize:"bold",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Your privacy is very important and all photos will be securely locked
                after we generate your measurements
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
                  borderRadius:"10px",
                }}
                onClick={() => {
                  if (uploadedImage?.file?.path == null) {
                    setImageError("Please Upload a image");
                  }else{
                    setPhotoImage(false);
                    setMeasure(true);
                  }
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
