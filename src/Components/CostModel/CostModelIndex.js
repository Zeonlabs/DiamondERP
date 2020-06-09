import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";

class CostModelIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>CostModels</div>
      </Sidebar>
    );
  }
}

export default CostModelIndex;
