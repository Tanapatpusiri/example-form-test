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

export interface UserDetails {
  FirstName: string;
  LastName: string;
  Email: string;
  Pdpa: boolean;
  Gender: string;
  Hobby: string[];
  Status: string | null;
  Note: string;
}

export default function Web() {
  const [user, setUser] = useState<UserDetails[]>([]);
  const [userdetails, setUserdetails] = useState({
    fname: "",
    lname: "",
    email: "",
    pdpa: false,
    gender: "Male",
    hobby: [],
    note: "",
    status: "",
  });

  const adduser = (): void => {
    const NewUser = {
      FirstName: userdetails.fname,
      LastName: userdetails.lname,
      Email: userdetails.email,
      Pdpa: userdetails.pdpa,
      Gender: userdetails.gender,
      Hobby: userdetails.hobby,
      Note: userdetails.note,
      Status: userdetails.status,
    };
    setUser([...user, NewUser]);
  };

  const reset = (): void => {
    setUserdetails({
      fname: "",
      lname: "",
      email: "",
      pdpa: false,
      gender: "Male",
      hobby: [],
      note: "",
      status: "",
    });
  };

  const handleDeleteUser = (x: number) => {
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
                        value={userdetails.fname}
                        onChange={(e) => {
                          setUserdetails({
                            ...userdetails,
                            fname: e.target.value,
                          });
                        }}
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="lastname"
                        label="Last Name"
                        value={userdetails.lname}
                        onChange={(e) => {
                          setUserdetails({
                            ...userdetails,
                            lname: e.target.value,
                          });
                        }}
                        variant="outlined"
                        sx={{ width: "100%" }}
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
                      value={userdetails.email}
                      onChange={(e) => {
                        setUserdetails({
                          ...userdetails,
                          email: e.target.value,
                        });
                      }}
                      variant="outlined"
                      sx={{ width: "100%" }}
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
                          onChange={(e) => {
                            setUserdetails({
                              ...userdetails,
                              pdpa: e.target.checked,
                            });
                          }}
                          checked={userdetails.pdpa}
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
                        value={userdetails.gender}
                        onChange={(e) => {
                          setUserdetails({
                            ...userdetails,
                            gender: e.target.value,
                          });
                        }}
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
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setUserdetails({
                                ...userdetails,
                                hobby: [
                                  ...userdetails.hobby,
                                  event.target.value as never,
                                ],
                              });
                            }}
                          />
                        }
                        label="Game"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="Music"
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setUserdetails({
                                ...userdetails,
                                hobby: [
                                  ...userdetails.hobby,
                                  event.target.value as never,
                                ],
                              });
                            }}
                          />
                        }
                        label="Music"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="Craff"
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setUserdetails({
                                ...userdetails,
                                hobby: [
                                  ...userdetails.hobby,
                                  event.target.value as never,
                                ],
                              });
                            }}
                          />
                        }
                        label="Craff"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="Reading"
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setUserdetails({
                                ...userdetails,
                                hobby: [
                                  ...userdetails.hobby,
                                  event.target.value as never,
                                ],
                              });
                            }}
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
                        value={userdetails.status}
                        label="Status"
                        onChange={(e) => {
                          setUserdetails({
                            ...userdetails,
                            status: e.target.value,
                          });
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
                      value={userdetails.note}
                      onChange={(e) => {
                        setUserdetails({
                          ...userdetails,
                          note: e.target.value,
                        });
                      }}
                      label="Note"
                      variant="outlined"
                      sx={{ width: "100%" }}
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
                {user.map((Users: UserDetails, index) => (
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
                              onClick={() => handleDeleteUser(index)}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <ListUser key={index} AllUser={Users} />
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
