import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";

class RoughIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar title="Rough List" button="Add Rough">
        <div>Roughs</div>
      </Sidebar>
    );
  }
}

export default RoughIndex;
