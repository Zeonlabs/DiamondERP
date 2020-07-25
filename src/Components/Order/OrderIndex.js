import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";
// import CreateOfficePacket from "./CreateOfficePacket";
import Model from "../Common/Model";
// import ReturnOfficePacket from "./ReturnPacket";
// import ReturnOfficeRough from "./ReturnOfficeRough";
import CreateOrder from "./CreateOrder";
import { TableData } from "../Common/TableData";
import { RoughColumn } from "../Collumn/Rough";

class OrderIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: false,
    };
  }

  closeModal = () => {
    // console.log("log in a close modal");
    this.setState({
      model: false,
    });
  };

  handelAddDataModal = () => {
    this.setState({
      model: true,
    });
  };

  render() {
    const tabArray = [
      {
        id: "1",
        lebal: "Add Order",
        tabContent: <CreateOrder close={this.closeModal} />,
      },
    ];
    return (
      <Sidebar
        title="Order Summary"
        button="Add Order"
        onClick={this.onModelPopup}
        addButtonFunction={this.handelAddDataModal}
        rowData={TableData}
        column={RoughColumn}
      >
        <Model
          modalName="Order Details"
          open={this.state.model}
          close={this.closeModal}
          tabContent={tabArray}
        />
      </Sidebar>
    );
  }
}

export default OrderIndex;
