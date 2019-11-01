import React from "react";
import "./App.css";
import logo from "./logo.png";
import Videos from "./Videos";
import Map from './Map';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>NIT Agartala</h3>
        </header>
        <main className="App-main">
          <img src={logo} alt="nit agartala logo"></img>
          <h1>Aayam Tech Fest Videos</h1>
          <Videos />
          <h1>Map of NIT Agartala</h1>
          <Map/>
          {/* <MapContainer /> */}
        </main>
      </div>
    );
  }
}

export default App;
