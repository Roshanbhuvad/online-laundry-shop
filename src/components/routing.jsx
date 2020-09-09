import React, { Component } from "react";
import ScriptTag from "react-script-tag";
class Routing extends Component {
  state = {};
  componentDidMount()
  {
    var platform = new H.service.Platform({
      apikey: "IHM8DlA58gFrDahrzB4HIxs_Sj4e_yhQ38oAUVCVWio",
    });

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
      document.getElementById("mapContainer"),
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 },
      }
    );

  }
  render() {
    return (
      <div>
        <ScriptTag
          type="module"
          src="https://js.api.here.com/v3/3.1/mapsjs.bundle.js"
        ></ScriptTag>
        <ScriptTag type="text/javascript" src="./script.js" />)<h1>Routing</h1>
      </div>
    );
  }
}

export default Routing;
