import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";
import Model from "../Common/Model";
import CreatePacket from "./CreatePacket";

class FactoryIndex extends Component {
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
      { id: "1", lebal: "Add Rough", tabContent: <CreatePacket /> },
      { id: "2", lebal: "Sorting Rough", tabContent: <CreatePacket /> },
      { id: "3", lebal: "Assign Rough", tabContent: <CreatePacket /> },
    ];
    return (
      <Sidebar
        title="Factory"
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

export default FactoryIndex;
