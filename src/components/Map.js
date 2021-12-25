import React, { memo } from "react";
import stateCodes from "../data/StateCodes.json";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

const MapChart = ({ data, setTooltipContent }) => {
  return (
    <>
      <ComposableMap
        data-tip=""
        projection="geoEquirectangular"
        projectionConfig={{
          scale: 1000
        }}
      >
        <ZoomableGroup center={[80, 23]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const stateCode = geo.properties.HASC_1.split(".")[1];
                      const stateName = stateCodes[stateCode];
                      const totalConfirmed = data[stateCode].total.confirmed;
                      setTooltipContent(
                        `${stateName} | Total confirmed: ${totalConfirmed}`
                      );
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none"
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none"
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
