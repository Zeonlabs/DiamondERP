import React, { Component } from "react";

class SortigTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="sorting-table-wrapper">
        <table>
          <tr className="sorting-table-header">
            <th>Type</th>
            <th>Carat</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
          <tr>
            <td>Type</td>
            <td>Carat</td>
            <td>Price</td>
            <td>Total</td>
            <td>Remove</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Carat</td>
            <td>Price</td>
            <td>Total</td>
            <td>Remove</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Carat</td>
            <td>Price</td>
            <td>Total</td>
            <td>Remove</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Carat</td>
            <td>Price</td>
            <td>Total</td>
            <td>Remove</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default SortigTable;
