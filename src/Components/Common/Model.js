import React, { Component } from "react";
import { Modal } from "carbon-components-react";
import TabView from "./Tabs";

class Model extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("props in modal", this.props);
    return (
      <div>
        <Modal
          open={this.props.open}
          hasForm
          modalHeading="Add Rough"
          onRequestClose={this.props.close}
          primaryButtonText="Save"
          secondaryButtonText="Close"
          // selectorPrimaryFocus
        >
          <TabView tabContent={this.props.tabContent} />
        </Modal>
      </div>
    );
  }
}

export default Model;
