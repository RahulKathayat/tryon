import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Typography, Slider } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
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
  const [loading, setLoading] = useState(false);
  const [base64String, setBase64String] = useState('');
  const [measurements,setMeasurements] = useState(null);
  const getBase64FromUrl = async () =>{
    const url = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlwffeqV908iY5kmhdHswwipDw5jmPxdmuRRD9XjVOwldNJFM3";
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
    setBase64String(base64);
  }
  useEffect(()=>{
    getBase64FromUrl();
    setMeasurements(JSON.parse(localStorage.getItem('Measurements')));
  },[]);
  const performVTO = async () => {
    try{
      setLoading(true);
      const decodedToken = jwtDecode(localStorage.getItem("refreshTok"));
      const userId = decodedToken.sub.toString();
      const payload = {
        "apparel_image": base64String,
        "apparel_type": "upper_body",
        "sku_id": "123",
        "product_id": "123",
        "human_image": localStorage.getItem("AIImage"),
        "seed": 5541
      };
      console.log("payload: ",payload);
      const headers = {
        'user-id': userId,
      };
      await axios.post(`${process.env.REACT_APP_AI_URL}/fashionAI/virtual-try-on`,payload,{headers})
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("vtoImage",response.data.payload.images[0]);
        setLoading(false);
        setCongratulation(false);
        setconfirm(true);
        setTimeout(() => {
          setconfirm(false);
          setMobiledata(true);
        }, [2000]);
      })
      .catch((e) => {
        console.log("error while making ai api call",e);
        setLoading(false);
      });
    }
    catch(err){
      console.error("something went wrong while performing vto",err);
      setLoading(false);
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
        }}
      >
        <Box
          sx={{
            maxWidth: 450,
            px: 3,
            py: "50px",
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

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ margin: "5px",display:"flex",flexDirection:"column",gap:"6px" }}>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Ankle : {measurements.ankle} cm
              </Typography>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Arm-length : {measurements.arm_length} cm
              </Typography>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Belly : {measurements.belly} cm
              </Typography>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Chest : {measurements.chest} cm
              </Typography>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Height : {measurements.height} cm
              </Typography>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Hips : {measurements.hips} cm
              </Typography>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Neck : {measurements.neck} cm
              </Typography>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Shoulders : {measurements.shoulder_width} cm
              </Typography>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Thigh : {measurements.thigh} cm
              </Typography>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Waist : {measurements.waist} cm
              </Typography>
              <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                Wrist : {measurements.wrist} cm
              </Typography>
              {/* <FormControl>
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
                      fontFamily: "SoleilRegular",
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
                      fontFamily: "SoleilRegular",
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
                      fontFamily: "SoleilRegular",
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
                      fontFamily: "SoleilRegular",
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
                      fontFamily: "SoleilRegular",
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
                      fontFamily: "SoleilRegular",
                      sansSerif: "sans-serif",
                    }}
                  />

                  <FormControlLabel
                    value="Leg length"
                    control={<Radio style={{ color: "black" }} />}
                    label="Leg length"
                    style={{
                      marginRight: "10px",
                      marginBottom: "-8px",
                      fontSize: "10px",
                      fontFamily: "SoleilRegular",
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
                      fontFamily: "SoleilRegular",
                      sansSerif: "sans-serif",
                    }}
                  />
                </RadioGroup>
              </FormControl> */}
            </div>
            <img
              src={`data:image/jpeg;base64,${localStorage.getItem("AIImage")}`}
              alt="AI base64 Image"
              style={{filter:"drop-shadow(0px 0px 6px #555)"}}
              width={"170"}
            />
          </div>

          <div className="btnCenter">
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
                marginBottom: "20px",
                borderRadius:"25px",
              }}
              onClick={() => {
                performVTO();
              }}
            >
              {loading ?  (

              <CircularProgress />
              ) :(
              <Typography>CONTINUE</Typography>

              )}
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Congratulation;
