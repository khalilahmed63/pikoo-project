import React from "react";
import GoogleMapReact from "google-map-react"

const Map = ( text: any ) => <div>{text}</div>;

export default function SimpleMap() {
  // console.log(">>>",lat,lng)
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  // Important! Always set the container height explicitly
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Map lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact> */}
      <p>Map is not working properly</p>
    </div>
  );
}
