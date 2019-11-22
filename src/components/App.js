import React from "react";
import InputPointField from "../containers/InputPointField";
import ListPoint from "../containers/ListPoint";
import MapBasics from "../containers/MapBasic";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>fun-box.ru</h1>
        </header>
        <div className="list-container">
          <InputPointField />
          <ListPoint />
        </div>
        <div className="map-container">
          <MapBasics />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
