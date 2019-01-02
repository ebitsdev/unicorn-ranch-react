import React, { Component } from "react";

class Unicorn extends Component {

  render() {
    return (
      <li>
        <div className="unicorn">
          <div className="unicorn-top">
            <div
              className="unicorn-cover"
              style={{
                width: 200,
                height: 200,
                backgroundImage: `url(${this.props.unicorn.thumbnail ? this.props.unicorn.thumbnail : ""})`
              }}
            />
            <div className="unicorn-location-changer">

              <select label="select unicorn" onChange={(ev) => {this.props.placeUnicorns(this.props.unicorn, ev.target.value)}} value={this.props.unicorn.location}>
                <option label="move unicorn" value="move" disabled>
                  Move to...
                </option>
                <option value="barn">Barn</option>
                <option value="pasture">Pasture</option>
                <option value="trail">Trail</option>
                {/* <option value="none">None</option> */}
              </select>
            </div>
          </div>
          <div className="unicorn-title">{this.props.unicorn.title}</div>
          {/* Handle the case when there are no visitor found */}
          <div className="unicorn-visitor">Visitor: {this.props.unicorn.visitor ? this.props.unicorn.visitor : "No visitor found"}</div>
        </div>
      </li>
    );
  }
}

export default Unicorn;
