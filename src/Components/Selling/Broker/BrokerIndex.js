import React, { Component } from "react";
import Sidebar from "../../Common/Sidebar";

class BrokerIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>Brokers</div>
      </Sidebar>
    );
  }
}

export default BrokerIndex;
