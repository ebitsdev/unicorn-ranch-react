import React, { Component } from "react";
import Unicorn from "./Unicorn";

class Unicorns extends Component {
  render() {

    return (
      <div className="unicorn-location">
        <h2 className="unicorn-location-title">{this.props.title}</h2>
        <div className="unicorn-location-unicorns">
          <ol className="unicorns-grid">
            {/* Check for unicorns and if they exist then render them */}
            {this.props.unicorns &&
              this.props.unicorns.map(unicorn => (
                <Unicorn
                  key={unicorn.id}
                  placeUnicorns={this.props.placeUnicorns} unicorn={unicorn}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Unicorns;
