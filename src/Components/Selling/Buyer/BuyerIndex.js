import React, { Component } from "react";
import Sidebar from "../../Common/Sidebar";

class BuyerIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>Buyers</div>
      </Sidebar>
    );
  }
}

export default BuyerIndex;
