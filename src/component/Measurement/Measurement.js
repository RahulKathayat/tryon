import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Button, Typography, Slider } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { SageMakerRuntimeClient, InvokeEndpointCommand } from "@aws-sdk/client-sagemaker-runtime";

function valueLabelFormat(value) {
  const units = ["cm", "MB", "GB", "TB"];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

const Measurement = ({
  setMeasure,
  setPhotoImage,
  setStatus,
  setCongratulation,
}) => {
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(true);
  const [loading, setLoading] = useState(false);

  const config = {
    credentials: {
      accessKeyId: `${process.env.REACT_APP_ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.REACT_APP_SECRET_ACCESS_KEY}`,
    },
    region: `${process.env.REACT_APP_REGION}` // e.g., 'us-west-2'
  }
  const sagemaker = new SageMakerRuntimeClient(config);


  const toggleSwitch = () => {
    setChecked(!isChecked);
  };
  const toggleSwitch1 = () => {
    // setChecked1(!isChecked1);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  // State to store the value of the slider
  const [sliderValue, setSliderValue] = useState(170); // Initial value

  // Handler function to update the slider value
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleSelectChange1 = (e) => {
    console.log(e.target.value);
    setSelectedOption1(e.target.value);
  };
  const callAiApi = async ()=>{
    try{
      setLoading(true);
      const decodedToken = jwtDecode(localStorage.getItem("refreshTok"));
      const userId = decodedToken.sub.toString();
      const payload = {
        "image" : sessionStorage.getItem("uploadedImage"),
        "gender" : isChecked ? "male" : "female",
        "height" : sliderValue,
      };
      console.log(payload);
      const headers = {
        'user-id': userId,
      };
      const params = {
        EndpointName: `${process.env.REACT_APP_PREPROCESS_ENDPOINT}`, // Specify the name of your SageMaker endpoint
        Body: JSON.stringify(payload), // Specify the input data for inference
        ContentType: 'application/json', // Specify the content type of the input data
        CustomAttributes : `user_id = ${userId}`,
      };
      const command = new InvokeEndpointCommand(params);
      // await axios.post(`${process.env.REACT_APP_AI_URL}/fashionAI/invocations`,payload,{headers})
      // .then((response) => {
      //   console.log(response);
      //   localStorage.setItem("AIImage", response.data.payload.image);
      //   localStorage.setItem("Measurements", JSON.stringify(response.data.payload.measurements));
      //   setLoading(false);
      //   setMeasure(false);
      //   setCongratulation(true);
      // })
      // .catch((e) => {
      //   console.log("error while making ai api call",e);
      //   setLoading(false);
      // });
      await sagemaker.send(command)
      .then((response) => {
        const string = new TextDecoder().decode(response.Body);
        const data = JSON.parse(string);
        console.log('Response from endpoint:', data);
        localStorage.setItem("AIImage", data.payload.image);
        localStorage.setItem("Measurements", JSON.stringify(data.payload.measurements));
        setLoading(false);
        setMeasure(false);
        setCongratulation(true);
      })
      .catch((e) => {
          console.error('Error invoking endpoint:', e);
          setLoading(false);
      });
    }catch(err){
      console.log("something went wrong while making ai api call",err);
    }
  }
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
            maxWidth: 400,
            px: 3,
            py: "50px",
            paddingBottom: "80px",
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

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-55px",
              width: "100%",
            }}
          >
            <div>
              <img
                src={"/assets/icons8-less-than-30.png"}
                alt="not found"
                style={{
                  transform: "scale(0.5)",
                  cursor: "pointer",
                  marginTop: "10px",
                  marginLeft: "0px",
                  position:"relative",
                  right:"10px"
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
                style={{ transform: "scale(0.3)", cursor: "pointer",position:"relative",left:"15px" }}
                onClick={() => {
                  setMeasure(false);
                  setStatus(false);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",

              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 2,
              letterSpacing: "0.00735em",
              marginTop: "30px",
            }}
          >
            <b style={{ color: "black" }}>Gender</b>

            <div>
              <input
                type="checkbox"
                id="toggle"
                className="toggleCheckbox"
                checked={isChecked}
                onChange={toggleSwitch}
                style={{ display: "none" }}
              />
              <label
                htmlFor="toggle"
                className="toggleContainer"
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  width: "fit-content",
                  border: "2px solid #343434",
                  borderRadius: "25px",
                  background: "#343434",
                  fontWeight: "bold",
                  color: "#343434",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    padding: "3px",
                    textAlign: "center",
                    zIndex: "1",
                    background: !isChecked ? "#343434" : "white",
                    color: !isChecked ? "white" : "#343434",
                    transition: "all 0.3s",
                    borderRadius: "25px",
                    fontSize: "13px",
                    // padding: "10px",
                  }}
                >
                  MALE
                </div>
                <div
                  style={{
                    padding: "3px",
                    textAlign: "center",
                    zIndex: "1",
                    background: isChecked ? "#343434" : "white",
                    color: isChecked ? "white" : "#343434",
                    transition: "all 0.3s",
                    borderRadius: "25px",
                    fontSize: "13px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  FEMALE
                </div>
              </label>
              <style>
                {`
          #toggle:checked + .toggleContainer::before {
            left: 50%;
          }

          #toggle:checked + .toggleContainer div:first-child {
            color: white;
            transition: color 0.3s, background 0.3s;
          }

          #toggle:checked + .toggleContainer div:last-child {
            color: #343434;
            transition: color 0.3s, background 0.3s;
          }

          #toggle + .toggleContainer div:first-child {
            color: #343434;
            transition: color 0.3s, background 0.3s;
          }

          #toggle + .toggleContainer div:last-child {
            color: white;
            transition: color 0.3s, background 0.3s;
          }
        `}
              </style>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "20px",
              paddingLeft: "20px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 2,
                letterSpacing: "0.00735em",
              }}
            >
              <b style={{ color: "black" }}>Enter your measurements</b>
            </div>

            <div>
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                style={{
                  borderColor: "#bfc7c7",
                  borderRadius: "20px",
                  border: "2px solid #bfc7c7",
                  width: "60px",
                  padding: "2px",
                }}
              >
                <option value="">UK</option>
                <option value="option1">IN</option>
                <option value="option2">US</option>
                <option value="option3">NZ</option>
              </select>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "15px",
              marginTop: "10px",
            }}
          >
            <div>
              <input
                type="checkbox"
                id="toggle1"
                className="toggleCheckbox"
                checked={isChecked1}
                onChange={toggleSwitch1}
                style={{ display: "none" }}
              />
              <label
                htmlFor="toggle1"
                className="toggleContainer"
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  width: "fit-content",
                  border: "2px solid #343434",
                  borderRadius: "25px",
                  background: "#343434",
                  fontWeight: "bold",
                  color: "#343434",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    padding: "3px",
                    textAlign: "center",
                    zIndex: "1",
                    background: !isChecked1 ? "#343434" : "white",
                    color: !isChecked1 ? "white" : "#343434",
                    transition: "all 0.3s",
                    borderRadius: "20px",
                    fontSize: "13px", // Adjusted font size
                  }}
                >
                  CM
                </div>
                <div
                  style={{
                    padding: "3px",
                    textAlign: "center",
                    zIndex: "1",
                    background: isChecked1 ? "#343434" : "white",
                    color: isChecked1 ? "white" : "#343434",
                    transition: "all 0.3s",
                    borderRadius: "20px",
                    fontSize: "13px", // Adjusted font size
                  }}
                >
                  IN
                </div>
              </label>
              <style>
                {`
          #toggle1:checked + .toggleContainer::before {
            left: 50%;
          }

          #toggle1:checked + .toggleContainer div:first-child {
            color: white;
            transition: color 0.3s, background 0.3s;
          }

          #toggle1:checked + .toggleContainer div:last-child {
            color: #343434;
            transition: color 0.3s, background 0.3s;
          }

          #toggle1 + .toggleContainer div:first-child {
            color: #343434;
            transition: color 0.3s, background 0.3s;
          }

          #toggle1 + .toggleContainer div:last-child {
            color: white;
            transition: color 0.3s, background 0.3s;
          }
        `}
              </style>
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5%",
              }}
            >
              <div
                style={{
                  // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 2,
                  letterSpacing: "0.00735em",
                }}
              >
                <b>Your Height</b>
                <span style={{ color: "red" }}>*&nbsp;</span>
              </div>
              <Box sx={{ width: 145 }}>
                <Slider
                  value={sliderValue}
                  onChange={handleSliderChange}
                  min={140}
                  step={1}
                  max={200}
                  getAriaValueText={valueLabelFormat}
                  valueLabelFormat={valueLabelFormat}
                  valueLabelDisplay="auto"
                  aria-labelledby="non-linear-slider"
                  style={{ color: "black" }}
                />
              </Box>
            </div>
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
              }}
              type="submit"
              variant="contained"
              style={{
                // backgroundColor: "black",
                fontFamily: "SoleilBold",
                sansSerif: "sans-serif",
                borderRadius:"25px",
              }}
              onClick={() => {
                callAiApi();
              }}
            >
              {loading ?  (

                <CircularProgress />
              ) :(
                <Typography>NEXT</Typography>

              )}
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Measurement;
