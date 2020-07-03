import React, { Component } from "react";
import {
  Button,
  // Search,
  DataTable,
  TableContainer,
  TableToolbar,
  // TableBatchAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  Table,
  TableHead,
  TableRow,
  // TableSelectAll,
  TableHeader,
  TableBody,
  // TableSelectRow,
  TableCell,
  Pagination,
} from "carbon-components-react";
import { Add24, View24 } from "@carbon/icons-react";
// import {
//   Add20,
//   ListDropdown24,
//   FilterEdit24,
//   Settings24,
// } from "@carbon/icons-react";
class PageTopSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: [
        {
          attached_groups: "Kevins VM Groups",
          id: 1,
          name: "Load Balancer 3",
          port: 3000,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Disabled",
          btn: 1,
        },
        {
          attached_groups: "Maureens VM Groups",
          id: 2,
          name: "Load Balancer 1",
          port: 443,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Starting",
          btn: 2,
        },
        {
          attached_groups: "Andrews VM Groups",
          id: 3,
          name: "Load Balancer 2",
          port: 80,
          protocol: "HTTP",
          rule: "DNS delegation",
          status: "Active",
          btn: 3,
        },
        {
          attached_groups: "Marcs VM Groups",
          id: 4,
          name: "Load Balancer 6",
          port: 3000,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Disabled",
          btn: 4,
        },
        {
          attached_groups: "Mels VM Groups",
          id: 5,
          name: "Load Balancer 4",
          port: 443,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Starting",
          btn: 5,
        },
        {
          attached_groups: "Ronjas VM Groups",
          id: 6,
          name: "Load Balancer 5",
          port: 80,
          protocol: "HTTP",
          rule: "DNS delegation",
          status: "Active",
          btn: 6,
        },
        {
          attached_groups: "Andrews VM Groups",
          id: 3,
          name: "Load Balancer 2",
          port: 80,
          protocol: "HTTP",
          rule: "DNS delegation",
          status: "Active",
          btn: 3,
        },
        {
          attached_groups: "Marcs VM Groups",
          id: 4,
          name: "Load Balancer 6",
          port: 3000,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Disabled",
          btn: 4,
        },
        {
          attached_groups: "Mels VM Groups",
          id: 5,
          name: "Load Balancer 4",
          port: 443,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Starting",
          btn: 5,
        },
        {
          attached_groups: "Ronjas VM Groups",
          id: 6,
          name: "Load Balancer 5",
          port: 80,
          protocol: "HTTP",
          rule: "DNS delegation",
          status: "Active",
          btn: 6,
        },
        {
          attached_groups: "Mels VM Groups",
          id: 5,
          name: "Load Balancer 4",
          port: 443,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Starting",
          btn: 5,
        },
        {
          attached_groups: "Ronjas VM Groups",
          id: 6,
          name: "Load Balancer 5",
          port: 80,
          protocol: "HTTP",
          rule: "DNS delegation",
          status: "Active",
          btn: 6,
        },
        {
          attached_groups: "Andrews VM Groups",
          id: 3,
          name: "Load Balancer 2",
          port: 80,
          protocol: "HTTP",
          rule: "DNS delegation",
          status: "Active",
          btn: 3,
        },
        {
          attached_groups: "Marcs VM Groups",
          id: 4,
          name: "Load Balancer 6",
          port: 3000,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Disabled",
          btn: 4,
        },
        {
          attached_groups: "Mels VM Groups",
          id: 5,
          name: "Load Balancer 4",
          port: 443,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Starting",
          btn: 5,
        },
        {
          attached_groups: "Ronjas VM Groups",
          id: 6,
          name: "Load Balancer 5",
          port: 80,
          protocol: "HTTP",
          rule: "DNS delegation",
          status: "Active",
          btn: 6,
        },
        {
          attached_groups: "Andrews VM Groups",
          id: 3,
          name: "Load Balancer 2",
          port: 80,
          protocol: "HTTP",
          rule: "DNS delegation",
          status: "Active",
          btn: 3,
        },
        {
          attached_groups: "Marcs VM Groups",
          id: 4,
          name: "Load Balancer 6",
          port: 3000,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Disabled",
          btn: 4,
        },
        {
          attached_groups: "Mels VM Groups",
          id: 5,
          name: "Load Balancer 4",
          port: 443,
          protocol: "HTTP",
          rule: "Round robin",
          status: "Starting",
          btn: 5,
        },
        {
          attached_groups: "Ronjas VM Groups",
          id: 6,
          name: "Load Balancer 5",
          port: 80,
          protocol: "HTTP",
          rule: "DNS delegation",
          status: "Active",
          btn: 6,
        },
      ],
      headerData: [
        {
          header: "View",
          key: "id",
        },
        {
          header: "Name",
          key: "name",
        },
        {
          header: "Protocol",
          key: "protocol",
        },
        {
          header: "Port",
          key: "port",
        },
        {
          header: "Rule",
          key: "rule",
        },
        {
          header: "Attached Groups",
          key: "attached_groups",
        },
        {
          header: "Status",
          key: "status",
        },
      ],
      currentPage: 0,
      dataPerPage: 10,
      currentPageData: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      currentPage: 1,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(
      "PageTopSection -> componentDidUpdate -> prevState.currentPage",
      prevState.currentPage
    );
    if (prevState.currentPage !== this.state.currentPage) {
      const username = this.state.rowData || [];
      const { currentPage, dataPerPage } = this.state;
      const indexOfLastTodo = currentPage * dataPerPage;
      const indexOfFirstTodo = indexOfLastTodo - dataPerPage;
      const currentPageData = username.slice(indexOfFirstTodo, indexOfLastTodo);
      this.setState({
        currentPageData,
      });
      console.log("this ia a s array data", currentPageData);
    }
  };

  handelViewButton = (id) => {
    console.log("PageTopSection -> handelViewButton -> id", id);
    const split = id.split(":");
    const singleData = this.state.rowData.find(
      (data) => data.id === parseInt(split[0])
    );
    console.log("button press", singleData);
  };

  itemRangeText = (min, max, total) => {
    console.log("min", min, "max", max, "ottal", total);
    // this.setState({
    //   currentPage: min,
    // });
  };

  itemText = (min, max) => {
    console.log("itemText ->", "min", min, "max", max);
  };

  onChange = (e) => {
    console.log("PageTopSection -> onChange -> e", e);
    this.setState({
      currentPage: e.page,
    });
  };

  pageRangeText = (current, total) => {
    console.log(
      "pageRangeText->itemText ->",
      "current",
      current,
      "total",
      total
    );
  };

  pageText = (page) => {
    console.log("PageTopSection -> pageText -> page", page);
  };

  render() {
    return (
      <div className="pagetop-wrapper">
        <DataTable
          rows={this.state.currentPageData}
          headers={this.state.headerData}
          size="compact"
          render={({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getSelectionProps,
            getBatchActionProps,
            onInputChange,
            selectedRows,
          }) => (
            <TableContainer title={this.props.title}>
              <TableToolbar>
                {/* <TableBatchAction {...getBatchActionProps()}>
            <TableBatchAction
              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
              renderIcon={Delete}
              onClick={()=>console.log('clicked')}>
              Delete
            </TableBatchAction>
            <TableBatchAction
              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
              renderIcon={Save}
              onClick={()=>console.log('clicked')}>
              Save
            </TableBatchAction>
            <TableBatchAction
              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
              renderIcon={Download}
              onClick={()=>console.log('clicked')}>
              Download
            </TableBatchAction>
          </TableBatchAction> */}
                <TableToolbarContent className="tollbar-content">
                  <TableToolbarSearch
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? -1 : 0
                    }
                    onChange={onInputChange}
                    className="search-box"
                  />
                  <TableToolbarMenu
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? -1 : 0
                    }
                    className="setting-icon"
                  >
                    <TableToolbarAction
                      primaryFocus
                      onClick={() => alert("Alert 1")}
                    >
                      Action 1
                    </TableToolbarAction>
                    <TableToolbarAction onClick={() => alert("Alert 2")}>
                      Action 2
                    </TableToolbarAction>
                    <TableToolbarAction onClick={() => alert("Alert 3")}>
                      Action 3
                    </TableToolbarAction>
                  </TableToolbarMenu>
                  <Button
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? -1 : 0
                    }
                    onClick={this.props.handelAddData}
                    size="small"
                    kind="primary"
                    className="add-data-button"
                  >
                    {this.props.button}
                    <Add24 />
                  </Button>
                </TableToolbarContent>
              </TableToolbar>
              <Table>
                <TableHead>
                  <TableRow>
                    {/* <TableSelectAll {...getSelectionProps()} /> */}
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <>
                      <TableRow {...getRowProps({ row })}>
                        {row.cells.map((cell) =>
                          cell.info.header === "id" ? (
                            <TableCell key={cell.id}>
                              <View24
                                onClick={() => this.handelViewButton(cell.id)}
                              />
                            </TableCell>
                          ) : (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          )
                        )}
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        />
        <div
          style={{
            maxWidth: "800px",
          }}
        >
          <Pagination
            backwardText="Previous page"
            disabled={false}
            forwardText="Next page"
            isLastPage={false}
            itemRangeText={this.itemRangeText}
            itemText={this.itemText}
            itemsPerPageText="Items per page:"
            onChange={this.onChange}
            page={1}
            pageInputDisabled={false}
            pageNumberText="Page Number"
            pageRangeText={this.pageRangeText}
            pageSize={10}
            pageSizes={[10]}
            pageText={this.pageText}
            pagesUnknown={false}
            totalItems={this.state.rowData.length}
          />
        </div>
      </div>
    );
  }
}

export default PageTopSection;
