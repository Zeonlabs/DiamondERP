import React, { Component } from "react";
import Sidebar from "../Common/Sidebar";
import CreateOfficePacket from "./CreateOfficePacket";
import Model from "../Common/Model";
import ReturnOfficePacket from "./ReturnPacket";
import ReturnOfficeRough from "./ReturnOfficeRough";
// import { TableData } from "../Common/TableData";
import { OfficeRough } from "../Collumn/Office/OfficeRough";
import { connect } from "react-redux";
import { getOfficeList } from "../../Actions/Office";

class OfficeIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: false,
      pageinationRef: {
        totalCount: 0,
        limit: 10,
        skip: 0,
        currentPage: 1,
      },
      tableData: [],
    };
  }

  componentDidMount = () => {
    // const pageData = {
    //   skip: this.state.skip,
    //   limit: this.state.limit,
    // };
    this.props
      .getOfficeList(this.state.pageinationRef)
      .then((res) => {
        this.setState({
          tableData: res.data,
          pageinationRef: {
            ...this.state.pageinationRef,
            totalCount: res.count,
          },
        });
      })
      .catch((e) => console.log(e));

    // this.props.getRoughPrefrence().then((res) => {
    //   console.log("RoughIndex -> componentDidMount -> res", res);
    //   this.setState({
    //     caratList: res.commonGet.caratList,
    //   });
    // });
  };

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

  onPageChange = (page) => {
    console.log("RoughIndex -> onPageChange -> page", page);
    // this.setState({
    //   pageinationRef: {
    //     ...this.state.pageinationRef,
    //     currentPage: page,
    //     skip: (page - 1) * this.state.pageinationRef.limit,
    //   },
    // });
    // const pageData = {
    //   skip: (page - 1) * this.state.pageinationRef.limit,
    //   limit: this.state.pageinationRef.limit,
    // };

    // this.props
    //   .getRough(pageData)
    //   .then((res) =>
    //     this.setState({
    //       tableData: res.data,
    //       pageinationRef: {
    //         ...this.state.pageinationRef,
    //         totalCount: res.count,
    //       },
    //     })
    //   )
    //   .catch((e) => console.log(e));
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
        rowData={this.state.tableData}
        column={OfficeRough}
        tabview={true}
        pageSize={this.onPageChange}
        totalData={this.state.pageinationRef}
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

const mapStateToProps = (state) => ({ ...state.Test });

export default connect(mapStateToProps, { getOfficeList })(OfficeIndex);
