import React from "react";
import { useSelector } from "react-redux";
import { selectDetails, selectResults } from "../../counterSlice";
import DetailsCard from "./detailsCard";
import { SatelliteData } from "../../Types";

export default function DetailsComponent() {
  const detailsId = useSelector(selectDetails);
  const results = useSelector(selectResults);

  const filteredResults = results.filter((result: SatelliteData) => {
    return result.NORAD_CAT_ID === detailsId;
  });

  return (
    <DetailsCard
      satelliteData={filteredResults.length ? filteredResults[0] : {}}
    />
  );
}
