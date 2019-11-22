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
        <div className="wrapper">
          <div className="grid">
            <div className="list-container">
              <InputPointField />
              <ListPoint />
            </div>
            <MapBasics />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
