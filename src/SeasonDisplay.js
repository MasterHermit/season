import "./SeasonDisplay.css";
import React from "react";

const seasonConfig={
  Winter:{
    text:"Let's go Snow Skating",
    iconText:"snowflake"
  },
  Summer:{
    text:"Why God Why",
    iconText:"sun"
  }
};
const getSeason = (lat, month) => {
  let summer = "Summer";
  let winter = "Winter";
  if (month > 1 && month < 9) {
    return lat > 0 ? summer : winter;
  } else {
    return lat > 0 ? winter : summer;
  }
};

const SeasonDisplay = (props) => {
  const month = new Date().getMonth();

  const season = getSeason(props.lat, month);
  const {text,iconText}=seasonConfig[season];
  

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconText} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconText} icon`} />
    </div>
  );
};

export default SeasonDisplay;
