import React, { Component } from "react";
import Sidebar from "../../Common/Sidebar";

class PacketStatusIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>PacketStatuss</div>
      </Sidebar>
    );
  }
}

export default PacketStatusIndex;
