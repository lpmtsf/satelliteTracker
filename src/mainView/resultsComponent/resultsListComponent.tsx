import React from "react";
import ResultElement from "./resultElementComponent";
import { useSelector } from "react-redux";
import { selectResults } from "../../counterSlice";
import { SatelliteData } from "../../Types";
export default function ResultsList() {
  const results = useSelector(selectResults);

  const resultElements = results.map((result: SatelliteData) => (
    <ResultElement
      key={Number(result.NORAD_CAT_ID)}
      noradCatId={result.NORAD_CAT_ID}
      objectName={result.OBJECT_NAME}
      objectId={result.OBJECT_ID}
    />
  ));

  return <div>{resultElements}</div>;
}
