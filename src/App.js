import React from "react";
import Login from "./component/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;

// import { Box } from "@mui/material";
// import React, { useState } from "react";
// import Profile from "./component/Profile";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Favorite from "./component/Favorite";
// import TryOn from "./component/Tryon";
// const theme = createTheme();

// const App = () => {
//   const [selectedOptionProfile, setSelectedOptionProfile] = useState("profile");

//   const handleOptionClick = (option) => {
//     setSelectedOptionProfile(option);
//   };

//   return (
//     <div>
//       <ThemeProvider theme={theme}>
//         <Box
//           sx={{
//             flex: "1 1 auto",
//             alignItems: "center",
//             display: "flex",
//             justifyContent: "center",
//             padding: "2%",
//           }}
//         >
//           <Box
//             sx={{
//               maxWidth: 350,
//               width: "100%",
//               border: "3px #d4cfc5 solid",
//               borderRadius: "8px",
//               fontFamily: "Soleil",
//               sansSerif: "sans-serif",
//               color: "#a19f99",
//             }}
//           >
//             <div style={{ height: "540px" }}>
//               {selectedOptionProfile === "tryOn" && (
//                 <div>
//                   <TryOn />
//                 </div>
//               )}
//               {selectedOptionProfile === "favorite" && (
//                 <div>
//                   <Favorite />
//                 </div>
//               )}
//               {selectedOptionProfile === "profile" && (
//                 <div>
//                   <Profile />
//                 </div>
//               )}
//             </div>

//             <hr style={{ border: "1px #d4cfc5 solid", marginBottom: "0px" }} />
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 fontWeight: "bold",
//                 fontSize: "15px",
//               }}
//             >
//               <div
//                 style={{
//                   border:
//                     selectedOptionProfile === "tryOn"
//                       ? "2px #d4cfc5 solid"
//                       : "2px white solid",
//                   borderRadius: "15px",
//                   padding: "10px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleOptionClick("tryOn")}
//               >
//                 <img
//                   src={"/assets/icons8-cloakroom-100.png"}
//                   alt=""
//                   style={{ height: "25px", width: "25px", marginLeft: "5px" }}
//                 />
//                 <div>Try on</div>
//               </div>
//               <div
//                 style={{
//                   border:
//                     selectedOptionProfile === "favorite"
//                       ? "2px #d4cfc5 solid"
//                       : "2px white solid",
//                   borderRadius: "15px",
//                   padding: "10px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleOptionClick("favorite")}
//               >
//                 <img
//                   src={"/assets/icons8-favorite-100.png"}
//                   alt=""
//                   style={{ height: "25px", width: "25px", marginLeft: "12px" }}
//                 />
//                 <div>Favorite</div>
//               </div>
//               <div
//                 style={{
//                   border:
//                     selectedOptionProfile === "profile"
//                       ? "2px #d4cfc5 solid"
//                       : "2px white solid",
//                   borderRadius: "15px",
//                   padding: "10px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleOptionClick("profile")}
//               >
//                 <img
//                   src={"/assets/icons8-customer-100.png"}
//                   alt=""
//                   style={{ height: "25px", width: "25px", marginLeft: "7px" }}
//                 />
//                 <div>Profile</div>
//               </div>
//             </div>
//           </Box>
//         </Box>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default App;
