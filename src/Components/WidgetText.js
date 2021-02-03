import React from "react";
import "./Dashboard.css";

function WidgetText(props) {
  // Preparing the chart data

  return (
    <div className="widgetWrap">
      <div className="widgetTitle">{props.title}</div>
      <div className="widgetValue">
        <div className="value">{props.value}</div>
        <div className="descrition">{props.description}</div>
      </div>
    </div>
  );
}

export default WidgetText;
