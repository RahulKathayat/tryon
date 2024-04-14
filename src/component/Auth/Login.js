import React,{useState} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Stack, TextField, Typography, Checkbox } from "@mui/material";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import {auth,provider,facebookProvider} from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Login = ({ SetLogin, setPhotoImage }) => {
  const [user,setUser] = useState(null);
  const theme = createTheme();
  const formik1 = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
      checkboxField: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
          toast.loading("Signing in");
          console.log(values);
          const user = {email: values.email, password: values.password}
          await axios
          .post(`${process.env.REACT_APP_BASE_URL}/v1/auth/login`, user)
          .then((response) => {
            console.log(response);
            const refreshToken = response.data.tokens.refresh.token;
            const accessToken = response.data.tokens.access.token;
            localStorage.setItem("refreshTok", refreshToken);
            localStorage.setItem("accessTok", accessToken);
            SetLogin(null);
            setPhotoImage(true);
            toast.dismiss();
            toast.success("Signed in successfully");
          })
          .catch((e) => {
            console.log(e);
            toast.dismiss();
            toast.error("Error occured invalid credentials");
          });
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });
  const handleGoogleSignIn = () => {
     signInWithPopup(auth,provider).
     then(
        async (result) => {
          console.log(result);
          setUser(result.user);
          const googleUser = {email:result.user.email,name:result.user.displayName};
          await axios
          .post(`${process.env.REACT_APP_BASE_URL}/v1/auth/loginWithGoogle`, googleUser)
          .then((response) => {
            console.log(response);
            const refreshToken = response.data.tokens.refresh.token;
            const accessToken = response.data.tokens.access.token;
            localStorage.setItem("refreshTok", refreshToken);
            localStorage.setItem("accessTok", accessToken);
            SetLogin(null);
            setPhotoImage(true);
            toast.success('Signed in with Google');
          })
          .catch((e) => {
            console.log(e);
            toast.error('Error in google sign in');
            console.log("Error in google sign in");
          });
        })
        .catch((err) =>{
        toast.error('Error in google sign in');
        console.log(err);
      });
  };
  const handleFacebookSignIn = () => {
    signInWithPopup(auth,facebookProvider)
    .then(
      async (result) => {
        console.log(result);
        setUser(result.user);
        const fbUser = {email:result._tokenResponse.email,name:result.user.displayName};
        await axios
        .post(`${process.env.REACT_APP_BASE_URL}/v1/auth/loginWithFacebook`, fbUser)
        .then((response) => {
          console.log(response);
          const refreshToken = response.data.tokens.refresh.token;
          const accessToken = response.data.tokens.access.token;
          localStorage.setItem("refreshTok", refreshToken);
          localStorage.setItem("accessTok", accessToken);
          SetLogin(null);
          setPhotoImage(true);
          toast.success('Signed in with Facebook');
        })
        .catch((e) => {
          console.log(e);
          toast.error( 'Error in Facebook sign in');
          console.log("Error in Facebook sign in");
        });
    }).catch((err) =>{
      console.log(err);
    });
  };
  const handleResetPassword = async () => {
    try{
      console.log("reset password clicked");
      // Add reset password login here
    }
    catch(e){
      console.log(e);
    }
  }
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
            height: "100vh",
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
              transform:"scale(0.9)",
              backgroundImage:"linear-gradient(to bottom, #00050B 50% ,#ffffff 50%)",
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
              <Stack spacing={1} sx={{ mb: 3, textAlign: "center" }}>
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "SoleilBold",
                    fontWeight: "bold",
                    transform: "scale(1.1)",
                    color:"white",
                  }}
                >
                  Virtual Fitting Room
                  <br />
                  <span
                    style={{
                      fontFamily: "SoleilLight",
                      fontWeight: "normal",
                      fontSize: "14px",
                      position: "relative",
                      bottom: "10px",
                      color:"white",
                    }}
                  >
                    Find what suits you best
                  </span>
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
                    textAlign: "center",
                    position: "relative",
                    bottom: "10px",
                    marginBottom: "10px",
                  }}
                >
                  Welcome back!
                </Typography>

                <form noValidate onSubmit={formik1.handleSubmit}>
                  <Stack
                    spacing={2}
                    style={{
                      fontFamily: "SoleilRegular",
                      sansSerif: "sans-serif",
                      textAlign: "center",
                    }}
                  >
                    <TextField
                      error={!!(formik1.touched.email && formik1.errors.email)}
                      fullWidth
                      helperText={formik1.touched.email && formik1.errors.email}
                      label="Email Address"
                      name="email"
                      onBlur={formik1.handleBlur}
                      onChange={formik1.handleChange}
                      type="email"
                      value={formik1.values.email}
                      style={{
                        fontFamily: "SoleilRegular",
                        sansSerif: "sans-serif",
                      }}
                    />
                    <TextField
                      error={
                        !!(formik1.touched.password && formik1.errors.password)
                      }
                      fullWidth
                      helperText={
                        formik1.touched.password && formik1.errors.password
                      }
                      label="Password"
                      name="password"
                      style={{
                        fontFamily: "SoleilRegular",
                        sansSerif: "sans-serif",
                      }}
                      onBlur={formik1.handleBlur}
                      onChange={formik1.handleChange}
                      type="password"
                      value={formik1.values.password}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        marginTop: "0px",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkboxField"
                            checked={formik1.values.checkboxField}
                            onChange={formik1.handleChange}
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
                          />
                        }
                        label={
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontFamily: "SoleilRegular",
                              marginTop: "4px",
                            }}
                          >
                            Remember me
                          </Typography>
                        }
                      />
                      <div onClick={handleResetPassword}>
                        <Typography
                          sx={{
                            fontFamily: "SoleilRegular",
                            fontSize: "13px",
                            cursor: "pointer",
                          }}
                        >
                          Forgot password
                        </Typography>
                      </div>
                    </div>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        fontFamily: "SoleilLight",
                        sansSerif: "sans-serif",
                      }}
                    >
                      Don&apos;t have an account? &nbsp;
                      <span
                        underline="hover"
                        variant="subtitle2"
                        style={{
                          color: "#4285F4",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                        onClick={() => {
                          SetLogin(false);
                        }}
                      >
                        Sign up
                      </span>
                    </Typography>
                  </Stack>
                  {formik1.errors.submit && (
                    <Typography color="error" sx={{ mt: 3 }} variant="body2">
                      {formik1.errors.submit}
                    </Typography>
                  )}
                  <Button
                    fullWidth
                    size="large"
                    // sx={{ mt: 3 }}
                    sx={{
                      backgroundColor: "black",
                      "&:hover": {
                        backgroundColor: "#272829",
                        transform: "scale(1.01)",
                      },
                      transition: "backgroundColor 0.3s ease,transform 0.3s ease",
                      mt: 3,
                    }}
                    type="submit"
                    variant="contained"
                    style={{
                      fontFamily: "SoleilBold",
                      sansSerif: "sans-serif",
                      borderRadius: "10px",
                    }}
                  >
                    Continue
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

                    <h6
                      style={{
                        margin: "0 0px",
                        color: "gray",
                        transform: "scale(0.85)",
                      }}
                    >
                      or
                    </h6>

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
                  <div onClick={handleGoogleSignIn}>

                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "SoleilRegular",
                        sansSerif: "sans-serif",
                        fontWeight: 200,
                        fontSize: "0.8rem",
                        letterSpacing: "0.00835em",
                        marginTop: "2%",
                        color: "black",
                        backgroundColor: "white",
                        borderRadius:"10px",
                        filter:"drop-shadow(0px 0px 1px #555)",
                        marginTop:"20px",
                        cursor:"pointer",
                      }}
                    >
                      <span>
                        <img
                          src={"/assets/icons8-google-48.png"}
                          alt="google"
                          style={{
                            transform: "scale(0.58)",
                            cursor: "pointer",
                          }}
                        />
                      </span>
                      Continue with Google
                    </Typography>
                  </div>
                  <div onClick={handleFacebookSignIn}>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "SoleilRegular",
                        fontWeight: 200,
                        fontSize: "0.8rem",
                        // lineHeight: 1,
                        letterSpacing: "0.00835em",
                        marginTop: "2%",
                        color: "black",
                        backgroundColor: "white",
                        borderRadius:"10px",
                        marginTop:"20px",
                        cursor:"pointer",
                        filter:"drop-shadow(0px 0px 1px #555)",
                      }}
                    >
                      <span>
                        <img
                          src={"/assets/icons8-facebook-48.png"}
                          alt="facebook"
                          onClick={handleFacebookSignIn}
                          style={{
                            transform: "scale(0.61)",
                            cursor: "pointer",
                          }}
                        />
                      </span>
                      Continue with Facebook
                    </Typography>
                  </div>
                </form>
              </Box>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Login;
