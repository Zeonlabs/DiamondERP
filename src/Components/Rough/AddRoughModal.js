import React, { Component } from "react";
import { Form, TextInput, Button } from "carbon-components-react";
// import { Tab } from "carbon-components-react";
// import TabView from "../Common/Tabs";

class AddRoughModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handelSubmit = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handelSubmit}>
          <TextInput
            // className="some-class"
            helperText=""
            id="seller-name"
            // invalid={false}
            invalidText="Please fill"
            labelText="Name"
            light={true}
            // onChange={function noRefCheck() {}}
            // onClick={function noRefCheck() {}}
            required
            type="text"
          />
          <Button
            // className="some-class"
            // disabled={false}
            kind="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddRoughModal;
