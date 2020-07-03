import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";
import Model from "../Common/Model";
import AddRoughModal from "./AddRoughModal";
import AssignRough from "./AssignRough";
import RoughSorting from "./RoughSorting";

class RoughIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: false,
    };
  }

  // onModelPopup = () => {
  //   this.setState({
  //     model: true,
  //   });
  // };

  closeModal = () => {
    console.log("log in a close modal");
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
        lebal: "Add Rough",
        tabContent: <AddRoughModal close={this.closeModal} />,
      },
      {
        id: "2",
        lebal: "Sorting Rough",
        tabContent: <AssignRough close={this.closeModal} />,
      },
      {
        id: "3",
        lebal: "Assign Rough",
        tabContent: <RoughSorting close={this.closeModal} />,
      },
    ];
    return (
      <Sidebar
        title="Rough List"
        button="Add Rough"
        onClick={this.onModelPopup}
        addButtonFunction={this.handelAddDataModal}
      >
        {/* {console.log("log in render")} */}
        {/* <h1>Hello Fuck</h1> */}
        <Model
          open={this.state.model}
          close={this.closeModal}
          tabContent={tabArray}
        />
      </Sidebar>
    );
  }
}

export default RoughIndex;
