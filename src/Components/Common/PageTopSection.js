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
    };
  }

  handelViewButton = (id) => {
    console.log("PageTopSection -> handelViewButton -> id", id);
    const split = id.split(":");
    const singleData = this.state.rowData.find(
      (data) => data.id === parseInt(split[0])
    );
    console.log("button press", singleData);
  };

  render() {
    return (
      <div className="pagetop-wrapper">
        <DataTable
          rows={this.state.rowData}
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
            <TableContainer title="DataTable with batch actions">
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
                    Add new
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
      </div>
    );
  }
}

export default PageTopSection;
