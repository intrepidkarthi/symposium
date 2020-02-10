import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const Map = (props: any) => {
  const [center, setCenter] = useState({ lat: 9.8828581, lng: 78.0825503 });
  const [zoom, setZoom] = useState(11);
  return (
    <div
      className="col-sm-12 col-md-10 mx-auto"
      style={{ height: "400px", marginBottom: "30px" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyABKA8bU09dNenWLr1GAE1c_nvI0ZvY6xY" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={9.8828581}
          lng={78.0825503}
          name="My Marker"
          color="blue"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
