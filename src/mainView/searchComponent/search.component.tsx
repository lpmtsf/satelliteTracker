import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import {
  addNewResult,
  selectSearchId,
  updateSearchId,
} from "../../counterSlice";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

export function SearchComponent() {
  const searchId = useSelector(selectSearchId);
  const [helperText, setHelperText] = useState("");
  const [searchErrorHelperText, setSearchErrorHelperText] = useState("");

  const dispatch = useDispatch();
  const sendRequest = async () => {
    try {
      console.log(`Sending request for ID: ${searchId}`);
      // Proxy added to pass the CORS problems (server does not send Access-Control-Allow-Origin in its responses)
      const proxy = "https://stark-bayou-21768.herokuapp.com/";
      const url = `${proxy}https://celestrak.com/NORAD/elements/gp.php?FORMAT=json&CATNR=${searchId}`;
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("API REQUEST OK: ", data[0]);
      dispatch(addNewResult(data[0]));
    } catch (err) {
      console.log("Error while fetching the API");
      setSearchErrorHelperText(
        `Error while fetching the API. Try to look for another ID (10000 for example 😇)`
      );
      return err;
    }
  };

  const updateId = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event !== null) {
      let value = Number((event.target as HTMLInputElement).value);
      if (value < 10000 || value > 46669) {
        setHelperText("Value must be higher than 10000 and lower than 46670");
      } else {
        setHelperText("");
      }
      dispatch(updateSearchId(event?.target?.value));
    }
  };

  const handleClose = () => {
    setSearchErrorHelperText("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Do code here
      sendRequest();
      event.preventDefault();
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      className="searchComponent"
    >
      <Grid container justifyContent="center">
        <Grid item>
          <TextField
            id="searchTextField"
            label="Enter satellite ID"
            variant="filled"
            sx={{
              width: "300px",
            }}
            error={helperText !== ""}
            helperText={helperText}
            onChange={updateId}
            onKeyDown={onKeyDown}
          />
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={searchErrorHelperText !== ""}
            onClose={handleClose}
            autoHideDuration={3000}
            message={searchErrorHelperText}
            key={"topcenter"}
          />
        </Grid>
        <Grid item alignItems="stretch" style={{ display: "flex" }}>
          <Button
            onClick={sendRequest}
            className="Button"
            variant="contained"
            disabled={helperText !== ""}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchComponent;
