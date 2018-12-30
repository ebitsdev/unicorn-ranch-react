import React, { Component } from "react";
import UnicornLocation from "../components/UnicornLocation";
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="main">

      <div className="list-unicorns">
        <div className="list-unicorns-title">
          <h1>Unicorn Ranch</h1>
          <Header />
        </div>
        <div className="list-unicorns-content">
            <UnicornLocation
              title="Barn"
              placeUnicorns={this.props.placeUnicorns}
              unicorns={this.props.unicorns.filter(
                b => b.location === "barn"
              )}
            />
            <UnicornLocation
              title="Pasture"
              placeUnicorns={this.props.placeUnicorns}
              unicorns={this.props.unicorns.filter(
                b => b.location === "pasture"
              )}
            />
            <UnicornLocation
              title="Trail"
              placeUnicorns={this.props.placeUnicorns}
              unicorns={this.props.unicorns.filter(b => b.location === "trail")}
            />
        </div>
      </div>
      <Footer />
      </div> // main
    );
  }
}

export default Home;
