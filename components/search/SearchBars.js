import { Autocomplete, Grid, TextField } from "@mui/material";
import React from "react";
import { useFunctions } from "../../context/FunctionsContext";

const SearchBars = () => {
  const {
    titleSearch,
    gameSearch,

  } = useFunctions();

  return (
    <>
      <Grid
        container
        
        sx={{
          marginTop: "40px",
          marginBottom: "10px",
          justifyContent: "center",
          alignItems: "center",
          height: "55px",
        }}
      >
        <Grid item sx={{
          display: "flex",
          alignItems: "center",
          direction:"row",
          gap: 5,
          }}>
          <h4 style={{ color: "white" }}>Search By Title:</h4>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={titleSearch}
            noOptionsText={"No available games"}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: 370,
              maxHeight: 49,
              backgroundColor: "white",
              alignItems: "normal",
              borderRadius: "2px",
              padding: 0,
            }}
            renderInput={(params) => (
              <TextField {...params} variant="filled" label="Select Game" />
            )}
            onChange={(e, newValue) => {
              gameSearch(newValue);

            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBars;
