import React, { useState } from "react";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    color: "black",
  },
});

const App = () => {
  const classes = useStyles();
  const [selectedButton, setSelectedButton] = useState(null);

  const [selectedAdjustment, setSelectedAdjustment] = useState(null);
  const [confirm, setconfirm] = useState(false);

  const handleAdjustmentChange = (adjustment) => {
    setSelectedAdjustment(adjustment);
  };

  const handleButtonClick = (btnType) => {
    setSelectedButton(btnType);
  };
  return (
    <div style={{ fontFamily: "Soleil", sansSerif: "sans-serif" }}>
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
                maxWidth: 550,
                px: 3,
                py: "50px",
                width: "100%",
                border: "3px #d4cfc5 solid",
                borderRadius: "8px",
              }}
            >
              <div className="row ">
              <div className="col-md-5 handlePaddingLeft">
                  <h5>Adjust sliders</h5>
                  <div>
                    <input
                      type="radio"
                      id="headSize"
                      name="adjustment"
                      checked={selectedAdjustment === "headSize"}
                      onChange={() => handleAdjustmentChange("headSize")}
                    />
                    <label
                      htmlFor="headSize"
                      className={`txtPadding ${
                        selectedAdjustment === "headSize" ? "selected" : ""
                      }`}
                    >
                      Head size
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="neckLength"
                      name="adjustment"
                      checked={selectedAdjustment === "neckLength"}
                      onChange={() => handleAdjustmentChange("neckLength")}
                    />
                    <label
                      htmlFor="neckLength"
                      className={`txtPadding ${
                        selectedAdjustment === "neckLength" ? "selected" : ""
                      }`}
                    >
                      Neck length
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="shoulders"
                      name="adjustment"
                      checked={selectedAdjustment === "shoulders"}
                      onChange={() => handleAdjustmentChange("shoulders")}
                    />
                    <label
                      htmlFor="shoulders"
                      className={`txtPadding ${
                        selectedAdjustment === "shoulders" ? "selected" : ""
                      }`}
                    >
                      Shoulders
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="arms"
                      name="adjustment"
                      checked={selectedAdjustment === "arms"}
                      onChange={() => handleAdjustmentChange("arms")}
                    />
                    <label
                      htmlFor="arms"
                      className={`txtPadding ${
                        selectedAdjustment === "arms" ? "selected" : ""
                      }`}
                    >
                      Arms
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="waist"
                      name="adjustment"
                      checked={selectedAdjustment === "waist"}
                      onChange={() => handleAdjustmentChange("waist")}
                    />
                    <label
                      htmlFor="waist"
                      className={`txtPadding ${
                        selectedAdjustment === "waist" ? "selected" : ""
                      }`}
                    >
                      Waist
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="hips"
                      name="waist"
                      checked={selectedAdjustment === "hips"}
                      onChange={() => handleAdjustmentChange("hips")}
                    />
                    <label
                      htmlFor="hips"
                      className={`txtPadding ${
                        selectedAdjustment === "hips" ? "selected" : ""
                      }`}
                    >
                      Hips
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="legLength"
                      name="waist"
                      checked={selectedAdjustment === "legLength"}
                      onChange={() => handleAdjustmentChange("legLength")}
                    />
                    <label
                      htmlFor="legLength"
                      className={`txtPadding ${
                        selectedAdjustment === "legLength" ? "selected" : ""
                      }`}
                    >
                      Leg length
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="legWidth"
                      name="waist"
                      checked={selectedAdjustment === "legWidth"}
                      onChange={() => handleAdjustmentChange("legWidth")}
                    />
                    <label
                      htmlFor="legWidth"
                      className={`txtPadding ${
                        selectedAdjustment === "legWidth" ? "selected" : ""
                      }`}
                    >
                      Leg width
                    </label>
                  </div>

                  <style jsx>{`
                    .selected {
                      font-weight: bold;
                      color: black;
                    }
                    /* Add any additional styling here */
                  `}</style>
                </div>

                <div className="col-md-2 handleImg">
                  <img
                    src={"/assets/135bbd59-1f58-496c-960f-300e1cd4feb1.jpg"}
                    alt=""
                  />
                </div>
              </div>
              
              <div className="row handleSlider">
                <hr></hr>
                <Box sx={{ width: 400 }}>
                  <Slider
                    classes={{ root: classes.root }}
                    track={false}
                    style={{ color: "#000" }}
                    aria-labelledby="track-false-slider"
                    defaultValue={60}
                  />
                </Box>
                <hr></hr>
              </div>
              <div className="btnCenter">
                <button
                  className={`handleBtn ${
                    selectedButton === "backBtn" ? "selectedBtn" : ""
                  }`}
                  onClick={() => handleButtonClick("backBtn")}
                >
                  Back
                </button>

                <button
                  className={`handleBtn ${
                    selectedButton === "confirmBtn" ? "selectedBtn" : ""
                  }`}
                  onClick={() => {
                    handleButtonClick("confirmBtn");
                    setconfirm(true);
                  }}
                >
                  Confirm
                </button>
              </div>
            </Box>
          </Box>
        </ThemeProvider>
      </div>

      {confirm && (
        <div className="col-md-6 ">
          <div className="handleSuccessImg">
            <img
              src={"/assets/4c04325c-4800-4d79-924d-a274b2c3a0d3.jpg"}
              alt="found"
            ></img>
            <p className="centerTet">
              Profile Created Successfully!
              <br /> Entering your virtual room
            </p>
          </div>
          <br />
          <h6 style={{ marginLeft: "62px" }}>Confirmation Popup window</h6>
        </div>
      )}
    </div>
  );
};

export default App;
