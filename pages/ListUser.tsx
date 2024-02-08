import React from "react";
import { UserDetails } from "./Web";
import { FormControlLabel, Checkbox, Box } from "@mui/material";

interface Props {
  AllUser: UserDetails;
}

const ListUser = ({ AllUser }: Props) => {
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
            Name : {AllUser?.FirstName || "-"} {AllUser?.LastName}
          </p>
        </Box>

        <Box className="grid-itemshow">
          <p>Email : {AllUser?.Email || "-"} </p>
        </Box>

        <Box className="grid-itemshow">
          <p>Gender : {AllUser?.Gender || "-"} </p>
        </Box>

        <Box className="grid-itemshow">
          <p>Hobby : {AllUser?.Hobby.join(" , ") || "-"}</p>
        </Box>

        <Box className="grid-itemshow">
          <p>Status : {AllUser?.Status || "-"} </p>
        </Box>

        <Box className="grid-itemshow">
          <p>Note : {AllUser?.Note || "-"} </p>
        </Box>
      </Box>

      <div className="CheckboxPDPA">
        {!AllUser?.Pdpa ? (
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
