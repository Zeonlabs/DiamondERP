import React, { Component } from "react";
import Sidebar from "../../Common/Sidebar";

class SellerIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>Sellers</div>
      </Sidebar>
    );
  }
}

export default SellerIndex;
