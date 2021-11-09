import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { DetailsCardProps } from "./../../Types";

export default function DetailsCard(props: DetailsCardProps) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          NORAD ID: {props.satelliteData.NORAD_CAT_ID}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Object ID: {props.satelliteData.OBJECT_ID}
        </Typography>
        <Typography variant="h5" component="div">
          {props.satelliteData.OBJECT_NAME}
        </Typography>
        <Typography variant="body2">
          EPOCH: {props.satelliteData.EPOCH}
        </Typography>
        <Typography variant="body2">
          Mean motion: {props.satelliteData.MEAN_MOTION}
        </Typography>
        <Typography variant="body2">
          Eccentricity: {props.satelliteData.ECCENTRICITY}
        </Typography>
        <Typography variant="body2">
          Inclination: {props.satelliteData.INCLINATION}
        </Typography>
        <Typography variant="body2">
          Type: {props.satelliteData.CLASSIFICATION_TYPE}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box
      sx={{
        minWidth: 275,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {props.satelliteData.OBJECT_ID ? (
        <Card variant="outlined">{card}</Card>
      ) : (
        ""
      )}
    </Box>
  );
}
