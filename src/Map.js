import React, { useEffect, useState } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";

import "./Map.css";

function Map() {
  const stationUrl =
    "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json";

  const stationStatusUrl =
    "https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json";
  const [center, setCenter] = useState({ lat: 59.926171, lng: 10.742574 });
  const zoom = 13;
  const [stations, setStations] = useState([]);
  const [stationStatuses, setStationStatuses] = useState([]);
  useEffect(() => {
    async function fetchStations() {
      const response = await fetch(stationUrl);
      const data = await response.json();
      setStations(data.data.stations);
    }
    async function fetchStationStatuses() {
      const response = await fetch(stationStatusUrl);
      const data = await response.json();
      setStationStatuses(data.data.stations);
    }
    fetchStations();
    fetchStationStatuses();
  }, []);
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const options = {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  };
  const [currentStation, setCurrentStation] = useState({});
  return (
    <LoadScript googleMapsApiKey="AIzaSyAm5i-LiJFcXQ2eBOWwD2Jrl-akuSv8ojg">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={center}
      >
        <MarkerClusterer options={options}>
          {(clusterer) =>
            stations.map((station, i) => (
              <Marker
                className="marker"
                key={i}
                onClick={() => {
                  setCenter({ lat: station.lat, lng: station.lon });
                  setCurrentStation({
                    id: stationStatuses[i].station_id,
                    id_2: station.station_id,
                    name: station.name,
                    lat: station.lat,
                    lon: station.lon,
                    numAvailableBikes: stationStatuses[i].num_bikes_available,
                    freeSpots: stationStatuses[i].num_docks_available,
                  });
                }}
                position={{ lat: station.lat, lng: station.lon }}
                clusterer={clusterer}
              ></Marker>
            ))
          }
        </MarkerClusterer>
        {currentStation.name && (
          <InfoWindow
            position={{ lat: currentStation.lat, lng: currentStation.lon }}
            clickable={true}
            onCloseClick={() => setCurrentStation({})}
          >
            <div>
              <h4>{currentStation.name}</h4>
              <p>{"Available bikes: " + currentStation.numAvailableBikes}</p>
              <p>{"Free spots: " + currentStation.freeSpots}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
