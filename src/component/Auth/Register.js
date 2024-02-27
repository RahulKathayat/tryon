import React from "react";
import { useFormik } from "formik";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

import * as Yup from "yup";
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
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        // await auth.signUp(values.email, values.name, values.password);
        // router.push("/");
      } catch (err) {
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
            px: 4,
            py: "25px",
            width: "100%",
            border: "1.5px gray solid",
            borderRadius: "20px",
            position: "relative",
            transform: "scale(0.9)"
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
              // fontSize: "1rem",
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
            <Stack spacing={1} sx={{ mb: 1, textAlign: "center"}}>
              {/* <Stack spacing={1} sx={{ mb: 3, textAlign: "center" }}>
              </Stack> */}
              <Typography
                variant="h5"
                style={{
                  fontFamily: "SoleilBold",
                  sansSerif: "sans-serif",
                  fontWeight: "bold",
                  transform:"scale(1.1)"
                }}
              >
                Virtual Fitting Room
                <br />
                  <span
                    style={{
                      fontFamily: "SoleilRegular",
                      fontWeight: "normal",
                      fontSize: "14px",
                      position: "relative",
                      bottom: "10px",
                    }}
                  >
                    Find your choice and see it on you
                  </span>
              </Typography>

              <Typography
                variant="h4"
                style={{
                  fontFamily: "SoleilRegular",
                  sansSerif: "sans-serif",
                  fontSize: "18px",
                  // letterSpacing: "0.08rem"
                }}
              >
                Sign Up
              </Typography>
              <Typography
                  variant="h6"
                  style={{
                    fontFamily: "SoleilBook",
                    fontWeight: "",
                    fontSize:"16px"
                  }}
                >
                 Register your email for a quicker try-on!
                </Typography>
            </Stack>
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
                          I agree to vto's
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
                    color: "#4663ac",
                    cursor: "pointer",
                    textDecoration: "underline",
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
                  borderRadius:"25px",
                }}
              >
                Get started
              </Button>

              <div
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
                  marginTop: "2%",
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
              </Typography>
            </form>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
