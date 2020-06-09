import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";

class FactoryIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>Factorys</div>
      </Sidebar>
    );
  }
}

export default FactoryIndex;
