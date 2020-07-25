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
  officeReturnpacketId: Yup.string().required("*Packet Id is required"),
  // roughName: Yup.string().required("*Rough Name is required"),
  officeReturncarat: Yup.string().required("*carat is required"),
  officeReturnpiece: Yup.string().required("*Piece is required"),
  officeReturnprocessName: Yup.string().required("*Process Name is required"),
  officeReturnassigneName: Yup.string().required("*Assign Name is required"),
  officeReturnDate: Yup.string().required("*Date is required"),
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
            officeReturnpacketId: "",
            // roughName: "",
            officeReturncarat: "",
            officeReturnpiece: "",
            officeReturnprocessName: "",
            officeReturnassigneName: "",
            officeReturnDate: "",
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
                      setFieldValue("officeReturnDate", formateDate);
                    }}
                    id="retutn-office-packet-create-date"
                    placeholder="dd/mm/yyyy"
                    labelText="Create packet Date"
                    className={
                      touched.officeReturnDate && errors.officeReturnDate
                        ? "error"
                        : "bx--col"
                    }
                    dateid="return-office-packet-id"
                    name="officeReturnDate"
                    value={values.officeReturnDate}
                    onBlur={handleBlur}
                  />
                  {touched.officeReturnDate && errors.officeReturnDate ? (
                    <div className="error-message">
                      {errors.officeReturnDate}
                    </div>
                  ) : null}
                </div>
                <div className="bx--col-md-3">
                  <DropDownSelection
                    className={
                      touched.officeReturnpacketId &&
                      errors.officeReturnpacketId
                        ? "error"
                        : "bx--col dropdown-padding"
                    }
                    name="officeReturnpacketId"
                    selectedItem={values.officeReturnpacketId}
                    value={values.officeReturnpacketId}
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
                      setFieldValue("officeReturnpacketId", select.selectedItem)
                    }
                    titleText="Packet id"
                    type="default"
                  />
                  {touched.officeReturnpacketId &&
                  errors.officeReturnpacketId ? (
                    <div className="error-message">
                      {errors.officeReturnpacketId}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="bx--row top-margin-model-input">
                <div className="bx--col-md-3">
                  <TextField
                    className={
                      touched.officeReturncarat && errors.officeReturncarat
                        ? "error"
                        : "bx--col"
                    }
                    name="officeReturncarat"
                    value={values.officeReturncarat}
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
                  {touched.officeReturncarat && errors.officeReturncarat ? (
                    <div className="error-message">
                      {errors.officeReturncarat}
                    </div>
                  ) : null}
                </div>
                <div className="bx--col-md-3">
                  <TextField
                    className={
                      touched.officeReturnpiece && errors.officeReturnpiece
                        ? "error"
                        : "bx--col"
                    }
                    name="officeReturnpiece"
                    value={values.officeReturnpiece}
                    id="return-office-packet-officeReturnpiece"
                    placeholder="enter rate here"
                    // invalid={false}
                    invalidText="Please fill"
                    labelText="Piece :"
                    light={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // onClick={function noRefCheck() {}}
                    required
                    type="number"
                  />
                  {touched.officeReturnpiece && errors.officeReturnpiece ? (
                    <div className="error-message">
                      {errors.officeReturnpiece}
                    </div>
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
                      touched.officeReturnprocessName &&
                      errors.officeReturnprocessName
                        ? "error"
                        : "bx--col dropdown-padding"
                    }
                    name="officeReturnprocessName"
                    selectedItem={values.officeReturnprocessName}
                    value={values.officeReturnprocessName}
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
                      setFieldValue(
                        "officeReturnprocessName",
                        select.selectedItem
                      )
                    }
                    titleText="Process Name"
                    type="default"
                  />
                  {touched.officeReturnprocessName &&
                  errors.officeReturnprocessName ? (
                    <div className="error-message">
                      {errors.officeReturnprocessName}
                    </div>
                  ) : null}
                </div>
                <div className="bx--col-md-3">
                  <DropDownSelection
                    className={
                      touched.officeReturnassigneName &&
                      errors.officeReturnassigneName
                        ? "error"
                        : "bx--col dropdown-padding"
                    }
                    name="officeReturnassigneName"
                    selectedItem={values.officeReturnassigneName}
                    value={values.officeReturnassigneName}
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
                      setFieldValue(
                        "officeReturnassigneName",
                        select.selectedItem
                      )
                    }
                    titleText="Assigne Name"
                    type="default"
                  />
                  {touched.officeReturnassigneName &&
                  errors.officeReturnassigneName ? (
                    <div className="error-message">
                      {errors.officeReturnassigneName}
                    </div>
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
