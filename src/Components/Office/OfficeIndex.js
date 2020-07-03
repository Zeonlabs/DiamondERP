import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";
import CreateOfficePacket from "./CreateOfficePacket";
import Model from "../Common/Model";

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
      { id: "1", lebal: "Add Rough", tabContent: <CreateOfficePacket /> },
      { id: "2", lebal: "Sorting Rough", tabContent: <CreateOfficePacket /> },
      { id: "3", lebal: "Assign Rough", tabContent: <CreateOfficePacket /> },
    ];
    return (
      <Sidebar
        title="Office"
        button="Create Packet"
        onClick={this.onModelPopup}
        addButtonFunction={this.handelAddDataModal}
      >
        <Model
          open={this.state.model}
          close={this.closeModal}
          tabContent={tabArray}
        />
      </Sidebar>
    );
  }
}

export default OfficeIndex;
