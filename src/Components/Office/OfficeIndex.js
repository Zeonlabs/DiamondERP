import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";
import CreateOfficePacket from "./CreateOfficePacket";
import Model from "../Common/Model";
import ReturnOfficePacket from "./ReturnPacket";
import ReturnOfficeRough from "./ReturnOfficeRough";
import { TableData } from "../Common/TableData";
import { OfficeRough } from "../Collumn/Office/OfficeRough";

class OfficeIndex extends Component {
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
        lebal: "Create Packet",
        tabContent: <CreateOfficePacket close={this.closeModal} />,
      },
      {
        id: "2",
        lebal: "Return Packet",
        tabContent: <ReturnOfficePacket close={this.closeModal} />,
      },
      {
        id: "3",
        lebal: "Return Rough",
        tabContent: <ReturnOfficeRough close={this.closeModal} />,
      },
    ];
    return (
      <Sidebar
        title="Office"
        button="Create Packet"
        onClick={this.onModelPopup}
        addButtonFunction={this.handelAddDataModal}
        rowData={TableData}
        column={OfficeRough}
        tabview={true}
      >
        <Model
          modalName="Office Packet Details"
          open={this.state.model}
          close={this.closeModal}
          tabContent={tabArray}
        />
      </Sidebar>
    );
  }
}

export default OfficeIndex;
