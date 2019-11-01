import React from "react";

class Map extends React.Component {
  render() {
    return (
      <iframe
        title="map with marker"
        src="https://www.google.com/maps/d/embed?mid=1jM_eBJCLpdk0iqVRVFE7op14fdmA-W0_"
        width="1000"
        height="480"
        style={{ border: "5px solid black", borderRadius: "5px" }}
      ></iframe>
    );
  }
}

export default Map;
