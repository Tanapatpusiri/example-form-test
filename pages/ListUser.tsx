import React from "react";
import { UserDetails } from "./Web";
import { FormControlLabel, Checkbox, Box, Typography } from "@mui/material";

interface Props {
  AllUser: UserDetails;
}

const ListUser = ({ AllUser }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto",
        }}
      >
        <Box className="grid-itemshow">
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            Name : {AllUser?.FirstName || "-"} {AllUser?.LastName}
          </Typography>
        </Box>

        <Box className="grid-itemshow">
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            Email : {AllUser?.Email || "-"}{" "}
          </Typography>
        </Box>

        <Box className="grid-itemshow">
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            Gender : {AllUser?.Gender || "-"}{" "}
          </Typography>
        </Box>

        <Box className="grid-itemshow">
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            Hobby : {AllUser?.Hobby.join(" , ") || "-"}
          </Typography>
        </Box>

        <Box className="grid-itemshow">
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            Status : {AllUser?.Status || "-"}{" "}
          </Typography>
        </Box>

        <Box className="grid-itemshow">
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            Note : {AllUser?.Note || "-"}{" "}
          </Typography>
        </Box>
      </Box>

      <Box className="CheckboxPDPA">
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
      </Box>
    </Box>
  );
};

export default ListUser;
