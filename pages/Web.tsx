import { useState } from "react";
import React from "react";
import {
  FormGroup,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  FormLabel,
  RadioGroup,
  FormControl,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Stack,
  Button,
} from "@mui/material";
import ListUser from "./ListUser";
import DeleteIcon from "@mui/icons-material/Delete";

export interface Alluser {
  Firstname: string;
  Lastname: string;
  Email: string;
  Pdpa: boolean;
  Gender: string;
  Hobby: string[];
  Status: string | null;
  Note: string;
}

export default function Web() {
  const [firstname, setFirstName] = useState<string>("");
  const [lasttname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pdpa, setPDPA] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("Male");
  const [hobby, setHobby] = useState<string[]>([]);
  const [status, setStatus] = useState<string | null>("");
  const [note, setNote] = useState<string>("");
  const [user, setUser] = useState<Alluser[]>([]);

  const adduser = (): void => {
    const newUser = {
      Firstname: firstname,
      Lastname: lasttname,
      Email: email,
      Pdpa: pdpa,
      Gender: gender,
      Hobby: hobby,
      Note: note,
      Status: status,
    };
    setUser([...user, newUser]);
  };

  const reset = (): void => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPDPA(false);
    setGender("Male");
    setHobby([]);
    setStatus("");
    setNote("");
  };
  const Hobbychange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = hobby.indexOf(event.target.value);
    if (index === -1) {
      setHobby([...hobby, event.target.value]);
    } else {
      setHobby(hobby.filter((hobby) => hobby !== event.target.value));
    }
  };

  const HandleDelete = (x: number) => {
    const deleteuser = [...user];
    deleteuser.splice(x, 1);
    setUser(deleteuser);
  };

  return (
    <>
      <>
        <Box
          className="navbar"
          sx={{
            backgroundColor: "#497add",
            position: "fixed",
            top: 0,
            left: 0,
            height: { lg: "10vh", xs: "7vh" },
            width: "100vw",
          }}
        >
          <Box
            sx={{
              typography: { lg: "h4", xs: "h6" },
              textAlign: "center",
              color: "#ffff",
              marginTop: 2,
            }}
          >
            User Profile Management System
          </Box>
        </Box>
        <Box></Box>
        <form>
          <Box
            sx={{
              width: "auto",
              display: "grid",
              padding: { lg: 10, xs: 2 },
              gridTemplateColumns: { lg: "1fr 50%", md: "auto" },
            }}
          >
            <Box className="grid-item">
              <Box
                className="textprofile"
                sx={{
                  textAlign: "center",
                  typography: { lg: "h4", xs: "h6" },
                  display: "grid",
                  justifyContent: "center",
                  paddingTop: { lg: 0, xs: 5 },
                }}
              >
                <p>Profile management</p>
              </Box>
              <Box
                className="leftform"
                sx={{
                  width: { lg: "40vw", md: "92vw", xs: "80vw" },
                  left: 0,
                  border: "#d1d1d1",
                  borderStyle: "solid",
                  borderRadius: 5,
                  borderWidth: 1,
                  padding: 2,
                  backgroundColor: "#ffff",
                }}
              >
                <Box
                  className="grid"
                  sx={{
                    paddingLeft: 1,
                    display: "grid",
                    justifyItems: "center",
                    width: "auto",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <TextField
                        id="firstname"
                        label="First Name"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        variant="outlined"
                        sx={{ width: "100%" }}
                        value={firstname}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="lastname"
                        label="Last Name"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        variant="outlined"
                        sx={{ width: "100%" }}
                        value={lasttname}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  className="checkboxall"
                  sx={{
                    paddingLeft: 1,
                    paddingTop: 1,
                  }}
                >
                  <Box
                    sx={{
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <TextField
                      id="email"
                      label="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      variant="outlined"
                      sx={{ width: "100%" }}
                      value={email}
                    />
                  </Box>

                  <Box
                    className="CheckboxPDPA"
                    sx={{
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => setPDPA(e.target.checked)}
                          checked={pdpa}
                        />
                      }
                      label="Confirm PDPA"
                    />
                  </Box>

                  <Box
                    className="Gender"
                    sx={{
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <FormControlLabel
                          value="Male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="Female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="Etc"
                          control={<Radio />}
                          label="Etc"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>

                  <Box
                    className="Hobby"
                    sx={{
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <FormLabel component="legend">Hobby</FormLabel>
                    <FormGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="Game"
                            checked={hobby.includes("Game")}
                            onChange={Hobbychange}
                          />
                        }
                        label="Game"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="Music"
                            checked={hobby.includes("Music")}
                            onChange={Hobbychange}
                          />
                        }
                        label="Music"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="Craff"
                            checked={hobby.includes("Craff")}
                            onChange={Hobbychange}
                          />
                        }
                        label="Craff"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="Reading"
                            checked={hobby.includes("Reading")}
                            onChange={Hobbychange}
                          />
                        }
                        label="Reading"
                      />
                    </FormGroup>
                  </Box>

                  <Box
                    className="Status"
                    sx={{
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={"Single"}>Single</MenuItem>
                        <MenuItem value={"Married"}>Married</MenuItem>
                        <MenuItem value={"Divorce"}>Divorce</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Box
                    className="Note"
                    sx={{
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      onChange={(e) => {
                        setNote(e.target.value);
                      }}
                      label="Note"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      value={note}
                    />
                  </Box>

                  <Box
                    className="button"
                    sx={{
                      justifyContent: "flex-end",
                      paddingBottom: 1,
                      paddingTop: 1,
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button variant="contained" onClick={reset}>
                        Reset
                      </Button>
                      <Button variant="contained" onClick={adduser}>
                        Submit
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="grid-item">
              <Box
                className="showuser"
                sx={{
                  marginTop: { lg: 14, xs: 2, md: 5 },
                }}
              >
                {user.map((Users: Alluser, index) => (
                  <Box
                    key={index}
                    className="userdetail"
                    sx={{
                      backgroundColor: "#ffff",
                      padding: 3,
                      justifyItems: "center",
                      border: "#d1d1d1",
                      borderStyle: "solid",
                      borderRadius: 5,
                      borderWidth: 1,
                      marginBottom: 5,
                    }}
                  >
                    <Box
                      className="icon"
                      sx={{
                        display: "grid",
                        justifyItems: "end",
                        width: "auto",
                      }}
                    >
                      <Grid container spacing={4}>
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              typography: "subtitle1",
                              fontWeight: "bold",
                            }}
                            className="UserText"
                          >
                            {" "}
                            User : {index + 1}
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            className="flexbt"
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <DeleteIcon
                              sx={{
                                "&:hover": {
                                  background: "#e2e2e2",
                                },
                                borderRadius: 5,
                                transition: 0.5,
                                cursor: "pointer",
                              }}
                              onClick={() => HandleDelete(index)}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <ListUser key={index} user={Users} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </form>
      </>
    </>
  );
}
