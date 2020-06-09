import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";

class RoughIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>Roughs</div>
      </Sidebar>
    );
  }
}

export default RoughIndex;
