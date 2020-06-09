import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";

class OrderIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>Orders</div>
      </Sidebar>
    );
  }
}

export default OrderIndex;
