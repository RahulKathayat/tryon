import React, { useState } from "react";
import { Box } from "@mui/material";
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

const Measurement = ({
  setMeasure,
  setPhotoImage,
  setStatus,
  setCongratulation,
}) => {
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);

  const toggleSwitch = () => {
    setChecked(!isChecked);
  };
  const toggleSwitch1 = () => {
    setChecked1(!isChecked1);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption11, setSelectedOption11] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption22, setSelectedOption22] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption33, setSelectedOption33] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption55, setSelectedOption55] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");
  const [selectedOption66, setSelectedOption66] = useState("");

  const handleSelectChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };
  const handleSelectChange11 = (e) => {
    setSelectedOption11(e.target.value);
  };
  const handleSelectChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };
  const handleSelectChange22 = (e) => {
    setSelectedOption22(e.target.value);
  };
  const handleSelectChange3 = (e) => {
    setSelectedOption3(e.target.value);
  };
  const handleSelectChange33 = (e) => {
    setSelectedOption33(e.target.value);
  };
  const handleSelectChange4 = (e) => {
    setSelectedOption4(e.target.value);
  };
  const handleSelectChange5 = (e) => {
    setSelectedOption5(e.target.value);
  };
  const handleSelectChange55 = (e) => {
    setSelectedOption55(e.target.value);
  };
  const handleSelectChange6 = (e) => {
    setSelectedOption6(e.target.value);
  };
  const handleSelectChange66 = (e) => {
    setSelectedOption66(e.target.value);
  };

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
            maxWidth: 450,
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
              marginTop: "-40px",
            }}
          >
            <div>
              <img
                src={"/assets/icons8-less-than-30.png"}
                alt="not found"
                style={{
                  transform: "scale(0.6)",
                  cursor: "pointer",
                  marginTop: "10px",
                  marginLeft: "2px",
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
                style={{ transform: "scale(0.4)", cursor: "pointer" }}
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
                  borderRadius: "10px",
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
                    borderRadius: "10px",
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
                    borderRadius: "10px",
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
                  borderRadius: "3px",
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
                  borderRadius: "10px",
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
                    borderRadius: "10px",
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
                    borderRadius: "10px",
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

          {isChecked ? (
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
                    fontWeight: 400,
                    fontSize: "1rem",
                    lineHeight: 2,
                    letterSpacing: "0.00735em",
                  }}
                >
                  <b>Your Height</b>
                  <span style={{ color: "red" }}>*&nbsp;</span>
                </div>

                {!isChecked1 ? (
                  <>
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <select
                          value={selectedOption1}
                          onChange={handleSelectChange1}
                          style={{
                            borderColor: "#bfc7c7",
                            borderRadius: "3px",
                            border: "2px solid #bfc7c7",
                            width: "60px",
                            padding: "2px",
                          }}
                        >
                          <option value="">-</option>
                          <option value="option1">4ft</option>
                          <option value="option2">5ft</option>
                          <option value="option3">6ft</option>
                        </select>
                      </div>
                      <div style={{ marginLeft: "30px" }}>
                        <select
                          value={selectedOption2}
                          onChange={handleSelectChange2}
                          style={{
                            borderColor: "#bfc7c7",
                            borderRadius: "3px",
                            border: "2px solid #bfc7c7",
                            width: "60px",
                            padding: "2px",
                          }}
                        >
                          <option value="">-</option>
                          <option value="option0">0in</option>
                          <option value="option1">1in</option>
                          <option value="option2">2in</option>
                          <option value="option3">3in</option>
                          <option value="option4">4in</option>
                          <option value="option5">5in</option>
                          <option value="option6">6in</option>
                          <option value="option7">7in</option>
                          <option value="option8">8in</option>
                          <option value="option9">9in</option>
                          <option value="option10">10in</option>
                          <option value="option11">11in</option>
                        </select>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Box sx={{ width: 145 }}>
                      <Slider
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
                  </>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5%",
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
                  <b>Your shirt size</b>
                  <span style={{ color: "red" }}>
                    *&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </div>

                <div>
                  <select
                    value={selectedOption3}
                    onChange={handleSelectChange3}
                    style={{
                      borderColor: "#bfc7c7",
                      borderRadius: "3px",
                      border: "2px solid #bfc7c7",
                      width: "60px",
                      padding: "2px",
                    }}
                  >
                    <option value="">-</option>
                    <option value="option1">XS</option>
                    <option value="option2">S</option>
                    <option value="option3">M</option>
                    <option value="option4">L</option>
                    <option value="option5">XL</option>
                    <option value="option6">2XL</option>
                    <option value="option7">3XL</option>
                  </select>
                </div>
                {/* <div></div> */}
              </div>
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
                  <b>Your waist size</b>
                  <span style={{ color: "red" }}>*&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div>
                  <select
                    value={selectedOption4}
                    onChange={handleSelectChange4}
                    style={{
                      borderColor: "#bfc7c7",
                      borderRadius: "3px",
                      border: "2px solid #bfc7c7",
                      width: "60px",
                      padding: "2px",
                    }}
                  >
                    <option value="">-</option>
                    <option value="option1">28</option>
                    <option value="option2">30</option>
                    <option value="option3">32</option>
                    <option value="option1">34</option>
                    <option value="option2">36</option>
                    <option value="option3">38</option>
                    <option value="option1">40</option>
                    <option value="option2">42</option>
                    <option value="option3">44</option>
                  </select>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5%",
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
                  <b>Your weight &nbsp;</b>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <select
                      value={selectedOption5}
                      onChange={handleSelectChange5}
                      style={{
                        borderColor: "#bfc7c7",
                        borderRadius: "3px",
                        border: "2px solid #bfc7c7",
                        width: "60px",
                        padding: "2px",
                      }}
                    >
                      <option value="">-</option>

                      <option value="option1">50</option>
                      <option value="option2">51</option>
                      <option value="option3">52</option>
                      <option value="option1">53</option>
                      <option value="option2">54</option>
                      <option value="option3">55</option>
                      <option value="option1">56</option>
                      <option value="option2">57</option>
                      <option value="option3">58</option>
                      <option value="option1">59</option>
                      <option value="option1">60</option>
                      <option value="option2">61</option>
                      <option value="option3">62</option>
                      <option value="option1">63</option>
                      <option value="option2">64</option>
                      <option value="option3">65</option>
                      <option value="option1">66</option>
                      <option value="option2">67</option>
                      <option value="option3">68</option>
                      <option value="option1">69</option>
                      <option value="option1">70</option>
                    </select>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <select
                      value={selectedOption6}
                      onChange={handleSelectChange6}
                      style={{
                        borderColor: "#bfc7c7",
                        borderRadius: "3px",
                        border: "2px solid #bfc7c7",
                        width: "60px",
                        padding: "2px",
                      }}
                    >
                      <option value="">-</option>
                      <option value="option1">.5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ) : (
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

                {!isChecked1 ? (
                  <>
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <select
                          value={selectedOption11}
                          onChange={handleSelectChange11}
                          style={{
                            borderColor: "#bfc7c7",
                            borderRadius: "3px",
                            border: "2px solid #bfc7c7",
                            width: "60px",
                            padding: "2px",
                          }}
                        >
                          <option value="">-</option>
                          <option value="option1">4ft</option>
                          <option value="option2">5ft</option>
                          <option value="option3">6ft</option>
                        </select>
                      </div>
                      <div style={{ marginLeft: "30px" }}>
                        <select
                          value={selectedOption22}
                          onChange={handleSelectChange22}
                          style={{
                            borderColor: "#bfc7c7",
                            borderRadius: "3px",
                            border: "2px solid #bfc7c7",
                            width: "60px",
                            padding: "2px",
                          }}
                        >
                          <option value="">-</option>
                          <option value="option0">0in</option>
                          <option value="option1">1in</option>
                          <option value="option2">2in</option>
                          <option value="option3">3in</option>
                          <option value="option4">4in</option>
                          <option value="option5">5in</option>
                          <option value="option6">6in</option>
                          <option value="option7">7in</option>
                          <option value="option8">8in</option>
                          <option value="option9">9in</option>
                          <option value="option10">10in</option>
                          <option value="option11">11in</option>
                        </select>
                      </div>
                    </div>
                  </>
                ) : (
                  <Box sx={{ width: 145 }}>
                    <Slider
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
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5%",
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
                  <b>Bra Size</b>
                  <span style={{ color: "red" }}>*&nbsp;</span>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <select
                      value={selectedOption55}
                      onChange={handleSelectChange55}
                      style={{
                        borderColor: "#bfc7c7",
                        borderRadius: "3px",
                        border: "2px solid #bfc7c7",
                        width: "60px",
                        padding: "2px",
                      }}
                    >
                      <option value="">-</option>

                      <option value="option1">26</option>
                      {/* <option value="option2">2</option> */}
                      <option value="option3">28</option>
                      {/* <option value="option4">2</option> */}
                      <option value="option5">30</option>
                      {/* <option value="option6">31</option> */}
                      <option value="option7">32</option>
                      <option value="option8">34</option>
                      <option value="option9">36</option>
                    </select>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <select
                      value={selectedOption66}
                      onChange={handleSelectChange66}
                      style={{
                        borderColor: "#bfc7c7",
                        borderRadius: "3px",
                        border: "2px solid #bfc7c7",
                        width: "60px",
                        padding: "2px",
                      }}
                    >
                      <option value="">-</option>
                      <option value="option1">AA</option>
                      <option value="option1">A</option>
                      <option value="option1">B</option>
                      <option value="option1">C</option>
                      <option value="option1">D</option>
                      <option value="option1">DD</option>
                    </select>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5%",
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
                  <b>Dress Size</b>
                  <span style={{ color: "red" }}>
                    *&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </div>

                <div>
                  <select
                    value={selectedOption33}
                    onChange={handleSelectChange33}
                    style={{
                      borderColor: "#bfc7c7",
                      borderRadius: "3px",
                      border: "2px solid #bfc7c7",
                      width: "60px",
                      padding: "2px",
                    }}
                  >
                    <option value="">-</option>
                    <option value="option1">4</option>
                    <option value="option2">6</option>
                    <option value="option3">8</option>
                    <option value="option1">10</option>
                    <option value="option2">12</option>
                    <option value="option3">14</option>
                    <option value="option3">16</option>
                  </select>
                </div>
              </div>
            </div>
          )}

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
                setMeasure(false);
                setCongratulation(true);
              }}
            >
              NEXT
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Measurement;
