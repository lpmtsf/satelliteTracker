import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { updateShowDetailsId } from "../../counterSlice";
import { useDispatch } from "react-redux";
import { SatelliteData } from "../../Types";

export default function ResultElement(props: {
  noradCatId: SatelliteData["NORAD_CAT_ID"];
  objectId: SatelliteData["OBJECT_ID"];
  objectName: SatelliteData["OBJECT_NAME"];
}) {
  const dispatch = useDispatch();

  const showDetails = () => {
    console.log(props.noradCatId);
    dispatch(updateShowDetailsId(props.noradCatId));
  };
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Catalogue ID: {props.noradCatId}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Object ID: {props.objectId}
        </Typography>
        <Typography variant="h6" component="div">
          {props.objectName}
        </Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        sx={{ cursor: "pointer", marginBottom: "10px" }}
        variant="outlined"
        onClick={showDetails}
      >
        {card}
      </Card>
    </Box>
  );
}
