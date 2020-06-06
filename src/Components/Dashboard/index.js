import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";

class DashboardIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>Dashboards</div>
      </Sidebar>
    );
  }
}

export default DashboardIndex;
