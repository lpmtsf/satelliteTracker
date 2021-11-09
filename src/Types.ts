interface SatelliteData {
  OBJECT_NAME: String;
  OBJECT_ID: String;
  EPOCH: String;
  MEAN_MOTION: Number;
  ECCENTRICITY: Number;
  INCLINATION: Number;
  RA_OF_ASC_NODE: Number;
  ARG_OF_PERICENTER: Number;
  MEAN_ANOMALY: Number;
  EPHEMERIS_TYPE: Number;
  CLASSIFICATION_TYPE: String;
  NORAD_CAT_ID: Number;
  ELEMENT_SET_NO: Number;
  REV_AT_EPOCH: Number;
  BSTAR: Number;
  MEAN_MOTION_DOT: Number;
  MEAN_MOTION_DDOT: Number;
}

interface DetailsCardProps {
  satelliteData: SatelliteData;
}

export type { SatelliteData, DetailsCardProps };
