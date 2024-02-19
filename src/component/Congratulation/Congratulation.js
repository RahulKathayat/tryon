import React from "react";
import { Box } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Typography, Slider } from "@mui/material";
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
const Congratulation = ({ setCongratulation, setconfirm, setMobiledata }) => {
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
            maxWidth: 450,
            px: 3,
            py: "50px",
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

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ margin: "10px" }}>
              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Adjust slider
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio style={{ color: "black" }} />}
                    label="Head size"
                    style={{
                      marginRight: "10px",
                      marginBottom: "-8px",
                      fontSize: "10px",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio style={{ color: "black" }} />}
                    label="Neck length"
                    style={{
                      marginRight: "10px",
                      marginBottom: "-8px",
                      fontSize: "10px",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio style={{ color: "black" }} />}
                    label="Shoulders"
                    style={{
                      marginRight: "10px",
                      marginBottom: "-8px",
                      fontSize: "10px",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  />

                  <FormControlLabel
                    value="Arms"
                    control={<Radio style={{ color: "black" }} />}
                    label="Arms"
                    style={{
                      marginRight: "10px",
                      marginBottom: "-8px",
                      fontSize: "10px",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  />
                  <FormControlLabel
                    value="Waist"
                    control={<Radio style={{ color: "black" }} />}
                    label="Waist"
                    style={{
                      marginRight: "10px",
                      marginBottom: "-8px",
                      fontSize: "10px",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  />
                  <FormControlLabel
                    value="Hips"
                    control={<Radio style={{ color: "black" }} />}
                    label="Hips"
                    style={{
                      marginRight: "10px",
                      marginBottom: "-8px",
                      fontSize: "10px",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  />

                  <FormControlLabel
                    value="Leg lenght"
                    control={<Radio style={{ color: "black" }} />}
                    label="Leg lenght"
                    style={{
                      marginRight: "10px",
                      marginBottom: "-8px",
                      fontSize: "10px",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  />
                  <FormControlLabel
                    value="Leg width"
                    control={<Radio style={{ color: "black" }} />}
                    label="Leg width"
                    style={{
                      marginRight: "10px",
                      marginBottom: "-8px",
                      fontSize: "10px",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <img
                src={"/assets/135bbd59-1f58-496c-960f-300e1cd4feb1.jpg"}
                alt=""
              />
            </div>
          </div>

          <div className="row handleSlider">
            <hr style={{ border: "2px solid #d4cfc5" }}></hr>

            <Box sx={{ width: 400 }}>
              <Slider
                min={140}
                step={1}
                max={200}
                // getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                // valueLabelDisplay="auto"
                // aria-labelledby="non-linear-slider"
                style={{ color: "black" }}
              />
            </Box>
            <hr style={{ border: "2px #d4cfc5 solid" }}></hr>
          </div>
          <div className="btnCenter">
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
                marginBottom: "20px",
              }}
              onClick={() => {
                setCongratulation(false);
                setconfirm(true);
                setTimeout(() => {
                  setconfirm(false);
                  setMobiledata(true);
                }, [2000]);
              }}
            >
              Confirm
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Congratulation;
