import { useState } from "react";
import { format } from "date-fns";
import MapChart from "./Map";
import ReactTooltip from "react-tooltip";

export default function(props) {
  const [content, setContent] = useState("Hello");

  return (
    <div>
      <div>
        As on Date:{" "}
        {format(new Date(props.data.TT.meta.last_updated), "dd-LLL-yyyy")}
      </div>
      <div>Population: {props.data.TT.meta.population}</div>
      <div>Vaccinated Population: {props.data.TT.total.vaccinated1}</div>
      <div className="w-2/3 border-black border-2">
        <MapChart data={props.data} setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}
