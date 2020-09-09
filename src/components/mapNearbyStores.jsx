import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "../data/skateboard-parks.json";
import LaundryShops from "./laundryShop";
import { Grid } from "@material-ui/core";

export default function NearByShops() {
  const [viewport, setViewport] = useState({
    latitude: 17.4401,
    longitude: 78.3489,
    width: "50vw",
    height: "100vh",
    zoom: 10,
  });
  const [selectedPark, setSelectedPark] = useState(null);
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <LaundryShops style={{ padding: "20px" }} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ReactMapGL
            style={{ marginLeft: "20px", position: "sticky" }}
            {...viewport}
            mapboxApiAccessToken={
              "pk.eyJ1IjoiYWRoaXNoMSIsImEiOiJja2VqeGN4ZjYwejR0MnFucDF0aWM1ZWNpIn0.ogjwjuHPdMyo_lMyotZXzw"
            }
            mapStyle="mapbox://styles/adhish1/ckejxvk9a0n3l1ar0h32ym0tx"
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          >
            {parkDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src="/washing.svg" alt="Icon" />
                </button>
              </Marker>
            ))}

            {selectedPark ? (
              <Popup
                latitude={selectedPark.geometry.coordinates[1]}
                longitude={selectedPark.geometry.coordinates[0]}
                onClose={() => {
                  setSelectedPark(null);
                }}
              >
                <div>
                  <h2>{selectedPark.properties.NAME}</h2>
                  <p>{selectedPark.properties.DESCRIPTIO}</p>
                </div>
              </Popup>
            ) : null}
          </ReactMapGL>
        </Grid>
      </Grid>
    </div>
  );
}
