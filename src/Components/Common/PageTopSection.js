import React, { Component } from "react";
import { Button } from "carbon-components-react";
import { Add20 } from "@carbon/icons-react";

class PageTopSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="pagetop-wrapper">
        <div>
          <h2>{this.props.title}</h2>
        </div>
        <div className="functionaliti-on-top">
          <Button className="add-things-button">
            {this.props.button}
            <Add20 />
          </Button>
        </div>
      </div>
    );
  }
}

export default PageTopSection;
