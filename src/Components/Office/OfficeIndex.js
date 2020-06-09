import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";

class OfficeIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>Offices</div>
      </Sidebar>
    );
  }
}

export default OfficeIndex;
