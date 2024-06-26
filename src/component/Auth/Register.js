import React from "react";
import { useFormik } from "formik";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import axios from "axios";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Button, Stack, TextField, Typography } from "@mui/material";

const Register = ({ SetLogin }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      submit: null,
      checkboxField: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      name: Yup.string().max(255).required("Name is required"),
      password: Yup.string().max(255).required("Password is required")
      .matches(/[A-Z]/, 'At least one Uppercase letter')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'At least one special character')
      .matches(/\d/, 'At least one number')
      .min(8, 'Must be at least 8 characters'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        toast.loading("Registering...");
        console.log(values);
        if(values.checkboxField){
            await  axios
            .post(`${process.env.REACT_APP_BASE_URL}/v1/auth/register`, values)
            .then((response) => {
              console.log(response);
              formik.resetForm();
              SetLogin(true);
              toast.dismiss();
              toast.success("Registered Successfully");
            })
            .catch((error) => {
              console.log("Error registering the user ", error);
              toast.dismiss();
              toast.error("Error Registering the user");
            });
        }
        else{ 
          toast.dismiss();
          toast.error('Agree to privacy policy');
        }
      } catch (err) {
        toast.dismiss();
        toast.success("Error Registering the user");
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });
  return (
    <div>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          padding: "2%",
          height:"100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: 400,
            minHeight:"100vh",
            px: 4,
            py: "25px",
            width: "100%",
            border: "1.5px gray solid",
            borderRadius: "20px",
            position: "relative",
            transform: "scale(0.9)",
            backgroundImage:"linear-gradient(to bottom, #00050B 50%, #ffffff 50%)",
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
            <Stack spacing={2} sx={{ mb: 2,mt:2, textAlign: "center"}}>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "SoleilBold",
                  sansSerif: "sans-serif",
                  fontWeight: "bold",
                  transform:"scale(1.1)",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection:"column",
                  alignItems: "center",
                  color:"white",
                }}
              >
                Join Our Exclusive Community!
                <br />
                  <div
                    style={{
                      fontFamily: "SoleilRegular",
                      fontWeight: "normal",
                      fontSize: "14px",
                      position: "relative",
                      bottom: "10px",
                      maxWidth:"300px",
                      lineHeight:"16px",marginTop: "20px",
                      color:"white",
                    }}
                  >
                    Find your choice and see it on you
                  </div>
              </Typography>
            </Stack>
            <Box sx={{
                backgroundColor:"#FFF9F9",
                borderRadius:"20px",
                padding:"30px",
            }}>
              <Typography
                  variant="h6"
                  style={{
                    fontFamily: "SoleilBook",
                    fontWeight: "",
                    fontSize:"16px",
                    textAlign:"center",
                    position: "relative",
                    bottom: "15px", 
                  }}
                >
                 Register for a quicker try-on!
                </Typography>
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack 
                  spacing={2}
                  style={{ fontFamily: "SoleilRegular", sansSerif: "sans-serif" ,textAlign:"center"}}
                >
                  <TextField
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    size="medium"
                  />
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                    size="medium"
                  />
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                    size="medium"
                  />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        marginTop: "0px",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkboxField"
                            checked={formik.values.checkboxField}
                            onChange={formik.handleChange}
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                          />
                        }
                        label={
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontFamily: "SoleilRegular",
                              marginTop: "4px",
                            }}
                          >
                            I agree to
                          </Typography>
                        }
                      />
                      <span style={{
                        fontSize: "14px",
                        fontFamily: "SoleilBold",
                        marginTop: "4px",
                        position:"relative",
                        left: "-12px",
                        cursor: "pointer",
                        textDecoration:"underline",
                      }}>privacy policy</span>
                    </div>
                  <Typography
                  color="text.secondary"
                  variant="body2"
                  style={{ fontFamily: "SoleilLight", sansSerif: "sans-serif" }}
                >
                  Already have an account? &nbsp;
                  <span
                    underline="hover"
                    variant="subtitle2"
                    style={{
                      color: "#4285F4",
                      cursor: "pointer",
                      fontWeight:"bold",
                    }}
                    onClick={() => {
                      SetLogin(true);
                    }}
                  >
                    Sign In
                  </span>
                  </Typography>
                </Stack>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{
                    backgroundColor: "black",
                    '&:hover': {
                      backgroundColor: '#272829',
                      transform:"scale(1.01)",
                    },
                    transition: 'backgroundColor 0.3s ease,transform 0.3s ease',
                    mt:3,
                  }}
                  type="submit"
                  variant="contained"
                  style={{
                    fontFamily: "SoleilBold",
                    sansSerif: "sans-serif",
                    borderRadius:"10px",
                  }}
                >
                  Get started
                </Button>

                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2%",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      height: "0.5px",
                      width: "45%",
                      backgroundColor: "#a6baac",
                    }}
                  ></div>

                  <h6 style={{ margin: "0 0px",color:"gray",transform:"scale(0.8)" }}>or</h6>

                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: 0,
                      height: "0.5px",
                      width: "45%",
                      backgroundColor: "#a6baac",
                    }}
                  ></div>
                </div>

                <Typography
                  color="text.secondary"
                  variant="body2"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "SoleilLight",
                    sansSerif: "sans-serif",

                    fontWeight: 200,
                    fontSize: "0.8rem",
                    // lineHeight: 1,
                    letterSpacing: "0.00835em",
                    // marginTop: "0",
                    color: "black",
                  }}
                >
                  Continue with
                  <span>
                    <img
                      src={"/assets/icons8-google-48.png"}
                      alt="google"
                      style={{
                        transform: "scale(0.58)",
                        cursor: "pointer",
                      }}
                    />
                    <img
                      src={"/assets/icons8-facebook-48.png"}
                      alt="facebook"
                      style={{ transform: "scale(0.61)", cursor: "pointer",position:"absolute" ,right:"90px"}}
                    />
                  </span>
                </Typography> */}
                <Typography sx={{textAlign:"center",marginTop:"20px",marginBottom:"10px",fontFamily:"SoleilLight",fontSize:"13px",color:"gray"}}>
                  Your privacy matters. We keep your data secure and never share it.
                </Typography>
              </form>
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
