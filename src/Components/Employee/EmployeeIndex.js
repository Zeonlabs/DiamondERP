import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";

class EmployeeIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <div>Employees</div>
      </Sidebar>
    );
  }
}

export default EmployeeIndex;
