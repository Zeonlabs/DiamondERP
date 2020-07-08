import React, { Component } from "react";
import { Form } from "carbon-components-react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField, {
  DateSelection,
  DropDownSelection,
} from "../Common/CommonComponents";
// import { Tab } from "carbon-components-react";
// import TabView from "../Common/Tabs";

const validationSchema = Yup.object().shape({
  packetId: Yup.string().required("*Packet Id is required"),
  roughName: Yup.string().required("*Rough Name is required"),
  officecarat: Yup.string().required("*carat is required"),
  piece: Yup.string().required("*Piece is required"),
  processName: Yup.string().required("*Process Name is required"),
  assigneName: Yup.string().required("*Assign Name is required"),
  createDate: Yup.string().required("*Date is required"),
});
class ReturnOfficePacket extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handelSubmit = (e) => {
    console.log(e);
  };

  // handelOnChange = (e) => {
  //   console.log("AddRoughModal -> handelOnChange -> e", e.target);
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  render() {
    return (
      <div style={{ marginBottom: "15%" }}>
        <Formik
          initialValues={{
            packetId: "",
            roughName: "",
            officecarat: "",
            piece: "",
            processName: "",
            assigneName: "",
            createDate: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // When button submits form and form is in the process of submitting, submit button is disabled
            setSubmitting(true);
            console.log("AddRoughModal -> render -> values", values);
            this.props.close();
            // Simulate submitting to database, shows us values submitted, resets form
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              resetForm();
              setSubmitting(false);
            }, 500);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              {/* <h5 className="h5-form-label">
                Packet Id : <span style={{ color: "#0F61FD" }}>#PID001</span>
              </h5> */}
              <div className="bx--row">
                <div className="bx--col-md-3">
                  <DateSelection
                    dateFormat="d/m/Y"
                    datePickerType="single"
                    onChange={(date) => {
                      const basicDate = new Date(date);
                      const formateDate =
                        basicDate.getDate() +
                        "/" +
                        (basicDate.getMonth() + 1) +
                        "/" +
                        basicDate.getFullYear();
                      setFieldValue("createDate", formateDate);
                    }}
                    id="retutn-office-packet-create-date"
                    placeholder="dd/mm/yyyy"
                    labelText="Create packet Date"
                    className={
                      touched.createDate && errors.createDate
                        ? "error"
                        : "bx--col"
                    }
                    dateid="return-office-packet-id"
                    name="createDate"
                    value={values.createDate}
                    onBlur={handleBlur}
                  />
                  {touched.createDate && errors.createDate ? (
                    <div className="error-message">{errors.createDate}</div>
                  ) : null}
                </div>
                <div className="bx--col-md-3">
                  <DropDownSelection
                    className={
                      touched.packetId && errors.packetId
                        ? "error"
                        : "bx--col dropdown-padding"
                    }
                    name="packetId"
                    selectedItem={values.packetId}
                    value={values.packetId}
                    // itemToString={(item) => (item ? item.text : "")}
                    id="return-packet-id"
                    items={[
                      "Option 1",
                      "Option 2",
                      "Option 3",
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.",
                      "Option 5",
                      "Option 6",
                    ]}
                    label="Select Packet id"
                    light
                    onChange={(select) =>
                      setFieldValue("packetId", select.selectedItem)
                    }
                    titleText="Packet id"
                    type="default"
                  />
                  {touched.packetId && errors.packetId ? (
                    <div className="error-message">{errors.packetId}</div>
                  ) : null}
                </div>
              </div>
              <div className="bx--row top-margin-model-input">
                <div className="bx--col-md-3">
                  <TextField
                    className={
                      touched.officecarat && errors.officecarat
                        ? "error"
                        : "bx--col"
                    }
                    name="officecarat"
                    value={values.officecarat}
                    id="return-office-packet-carat"
                    // invalid={false}
                    invalidText="Please fill"
                    labelText="Carat :"
                    placeholder="enter carat here"
                    light={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // onClick={function noRefCheck() {}}
                    required
                    type="number"
                  />
                  {touched.carat && errors.carat ? (
                    <div className="error-message">{errors.carat}</div>
                  ) : null}
                </div>
                <div className="bx--col-md-3">
                  <TextField
                    className={
                      touched.piece && errors.piece ? "error" : "bx--col"
                    }
                    name="piece"
                    value={values.piece}
                    id="return-office-packet-piece"
                    placeholder="enter rate here"
                    // invalid={false}
                    invalidText="Please fill"
                    labelText="piece :"
                    light={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // onClick={function noRefCheck() {}}
                    required
                    type="number"
                  />
                  {touched.piece && errors.piece ? (
                    <div className="error-message">{errors.piece}</div>
                  ) : null}
                </div>
                <p style={{ display: "grid" }}>
                  Wight lose : <span style={{ color: "#DA1E28" }}>00.00</span>
                </p>
              </div>
              <div className="bx--row top-margin-model-input">
                <div className="bx--col-md-3">
                  <DropDownSelection
                    className={
                      touched.processName && errors.processName
                        ? "error"
                        : "bx--col dropdown-padding"
                    }
                    name="processName"
                    selectedItem={values.processName}
                    value={values.processName}
                    direction="top"
                    // itemToString={(item) => (item ? item.text : "")}
                    id="return-process-name-office"
                    items={[
                      "Option 1",
                      "Option 2",
                      "Option 3",
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.",
                      "Option 5",
                      "Option 6",
                    ]}
                    label="Select Process name"
                    light
                    onChange={(select) =>
                      setFieldValue("processName", select.selectedItem)
                    }
                    titleText="Process Name"
                    type="default"
                  />
                  {touched.processName && errors.processName ? (
                    <div className="error-message">{errors.processName}</div>
                  ) : null}
                </div>
                <div className="bx--col-md-3">
                  <DropDownSelection
                    className={
                      touched.assigneName && errors.assigneName
                        ? "error"
                        : "bx--col dropdown-padding"
                    }
                    name="assigneName"
                    selectedItem={values.assigneName}
                    value={values.assigneName}
                    direction="top"
                    // itemToString={(item) => (item ? item.text : "")}
                    id="return-employee-name-office"
                    items={[
                      "Nmat1",
                      "Vinod2",
                      "Yash3",
                      "Loremipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.",
                      "Pachi5",
                      "bhuro6",
                    ]}
                    label="Select Assigne name"
                    light
                    onChange={(select) =>
                      setFieldValue("assigneName", select.selectedItem)
                    }
                    titleText="Assigne Name"
                    type="default"
                  />
                  {touched.assigneName && errors.assigneName ? (
                    <div className="error-message">{errors.assigneName}</div>
                  ) : null}
                </div>
              </div>
              <div className="bx--modal-footer modal-custome-footer">
                <button
                  tabindex="0"
                  className="bx--btn bx--btn--secondary"
                  type="button"
                  onClick={this.props.close}
                >
                  Close
                </button>
                <button
                  tabindex="0"
                  className="bx--btn bx--btn--primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ReturnOfficePacket;
