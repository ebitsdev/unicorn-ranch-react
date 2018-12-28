import React, { Component } from "react";
import UnicornLocation from "../components/UnicornLocation";

class Home extends Component {
  render() {
    return (
      <div className="list-unicorns">
        <div className="list-unicorns-title">
          <h1>Unicorn Ranch</h1>
        </div>
        <div className="list-unicorns-content">
          <div>
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
      </div>
    );
  }
}

export default Home;
