import React, { useEffect, useState } from "react";
import { Button, Typography, Box, CircularProgress,Modal } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { SageMakerRuntimeClient, InvokeEndpointCommand } from "@aws-sdk/client-sagemaker-runtime";
import toast from "react-hot-toast";
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
const Congratulation = ({ setCongratulation, setconfirm, setMobiledata,setStatus}) => {
  const [loading, setLoading] = useState(false);
  const [base64String, setBase64String] = useState('');
  const [measurements,setMeasurements] = useState('');

  const [openUpdate, setOpenUpdate] = useState(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);

  const config = {
    credentials: {
      accessKeyId: `${process.env.REACT_APP_ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.REACT_APP_SECRET_ACCESS_KEY}`,
    },
    region: `${process.env.REACT_APP_REGION}` // e.g., 'us-west-2'
  }
  const sagemaker = new SageMakerRuntimeClient(config);

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
      toast.loading("Performing VTO...");
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
      const params = {
        EndpointName: `${process.env.REACT_APP_PREPROCESS_ENDPOINT}`, // Specify the name of your SageMaker endpoint
        Body: JSON.stringify(payload), // Specify the input data for inference
        ContentType: 'application/json', // Specify the content type of the input data
        CustomAttributes : `user_id = ${userId}`,
      };
      const command = new InvokeEndpointCommand(params);
      await sagemaker.send(command)
      .then((response) => {
        const string = new TextDecoder().decode(response.Body);
        const data = JSON.parse(string);
        console.log("data:",data);
        sessionStorage.setItem("vtoImage",data.payload.images[0]);
        toast.dismiss();
        toast.success("Success");
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
        toast.dismiss();
        toast.error("Error Occured");
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
                right: "30%",
                bottom: "10px",
                fontFamily: "SoleilRegular",
                fontWeight: 400,
                // fontSize: "1rem",
                fontSize: "12px",
                lineHeight: 1,
                letterSpacing: "0.00735em",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{position:"relative",right:"2%",top:"7px"}}>Powered by</span>
              <span>
                <img
                  src={"/assets/swaplogoblack.png"}
                  alt="not found"
                  style={{ height: "45px", cursor: "pointer"}}
                />
              </span>
            </Typography>
            <div>
              <img
                src={"/assets/cross.png"}
                alt="not found"
                style={{ transform: "scale(0.2)", cursor: "pointer",position:"relative",bottom:"3.3em",left:"18.5em" }}
                onClick={() => {
                  setCongratulation(false);
                  setStatus(false);
                }}
              />
            </div>
          <Typography
            color="text.secondary"
            variant="body2"
            style={{
              fontSize: "1.6rem",
              textAlign:"center",
              letterSpacing: "0.01em",
              marginBottom: "10px",
              position: "relative",
              bottom: "3.8em",
              fontFamily: "SoleilBold",
              sansSerif: "sans-serif",
              color: "white",
            }}
          >
            Verify your Image
          </Typography>
          <div style={{ display: "flex", flexDirection:"column" ,gap:"30px",justifyContent:"space-between",alignItems:"center",marginTop:"3em",height:"450px"}}>
            <img
              src={`data:image/jpeg;base64,${localStorage.getItem("AIImage")}`}
              alt="AI base64 Image"
              style={{filter:"drop-shadow(0px 0px 6px #555)",objectFit:"contain"}}
              width={"170"}
            />
             <Button variant="contained" onClick={handleOpenUpdate} size="medium" color="inherit" sx={{fontFamily:"SoleilBold"}}>
                View Measurements
              </Button>
            <Modal open={openUpdate} onClose={handleCloseUpdate}>
              <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",backgroundColor:"white",padding:"20px",borderRadius:"10px"}}>
                  <div style={{ margin: "5px",display:"flex",flexDirection:"column",gap:"6px" }}>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Ankle : <span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.ankle} cm</span>
                    </Typography>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Arm-length : <span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.arm_length} cm</span>
                    </Typography>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Belly : <span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.belly} cm</span>
                    </Typography>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Chest : <span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.chest} cm</span>
                    </Typography>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Height : <span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.height} cm</span>
                    </Typography>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Hips : <span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.hips} cm</span>
                    </Typography>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Neck : <span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.neck} cm</span>
                    </Typography>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Shoulders : <span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.shoulder_width} cm</span>
                    </Typography>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Thigh : <span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.thigh} cm</span>
                    </Typography>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Waist :<span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.waist} cm</span>
                    </Typography>
                    <Typography style={{fontFamily:"SoleilRegular",fontSize:"20px"}}>
                      Wrist : <span style={{backgroundColor:"#E2E6EF", padding:"5px"}}>{measurements.wrist} cm</span>
                    </Typography>
                  </div>
              </div>
            </Modal>
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
                fontFamily: "SoleilRegular",
                sansSerif: "sans-serif",
                marginBottom: "20px",
                borderRadius:"10px",
              }}
              onClick={() => {
                performVTO();
              }}
            >
              {loading ?  (

              <CircularProgress />
              ) :(
              <Typography style={{fontFamily:"SoleilBold"}}>CONTINUE</Typography>

              )}
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Congratulation;
