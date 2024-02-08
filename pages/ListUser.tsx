import React from "react";
import { Alluser } from "./Web";
import { FormControlLabel, Checkbox, Box } from "@mui/material";

interface Props {
  user: Alluser;
}

const ListUser = ({ user }: Props) => {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto",
        }}
      >
        <Box className="grid-itemshow">
          <p>
            Name : {user?.Firstname || "-"} {user?.Lastname}
          </p>
        </Box>

        <Box className="grid-itemshow">
          <p>Email : {user?.Email || "-"} </p>
        </Box>

        <Box className="grid-itemshow">
          <p>Gender : {user?.Gender || "-"} </p>
        </Box>

        <Box className="grid-itemshow">
          <p>Hobby : {user?.Hobby.join(" , ") || "-"}</p>
        </Box>

        <Box className="grid-itemshow">
          <p>Status : {user?.Status || "-"} </p>
        </Box>

        <Box className="grid-itemshow">
          <p>Note : {user?.Note || "-"} </p>
        </Box>
      </Box>

      <div className="CheckboxPDPA">
        {!user?.Pdpa ? (
          <FormControlLabel
            control={<Checkbox />}
            label="Confirm PDPA"
            disabled
          />
        ) : (
          <FormControlLabel
            control={<Checkbox />}
            label="Confirm PDPA"
            disabled
            checked
          />
        )}
      </div>
    </div>
  );
};

export default ListUser;
