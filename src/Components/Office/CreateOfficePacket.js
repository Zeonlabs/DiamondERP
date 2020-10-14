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
  // officeIssueassigneName: Yup.string().required("*Assign Id is required"),
  // roughName: Yup.string().required("*Rough Name is required"),
  officeIssuecarat: Yup.string().required("*carat is required"),
  officeIssuepiece: Yup.string().required("*Piece is required"),
  officeIssueprocessName: Yup.string().required("*Process Name is required"),
  officeIssueassigneName: Yup.string().required("*Assign Name is required"),
  officePaketcreateDate: Yup.string().required("*Date is required"),
});
class CreateOfficePacket extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handelSubmit = (e) => {
    console.log(e);
  };

  handelOnChange = (e) => {
    console.log("AddRoughModal -> handelOnChange -> e", e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    // console.log("SAdasassadasdas------------------------>", this.props.data);
    return (
      <div style={{ marginBottom: "15%" }}>
        <Formik
          initialValues={{
            officeIssueassigneName: "",
            // roughName: "",
            officeIssuecarat: "",
            officeIssuepiece: "",
            officeIssueprocessName: "",
            // officeIssueassigneName: "",
            officePaketcreateDate: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // When button submits form and form is in the process of submitting, submit button is disabled
            setSubmitting(true);
            console.log("AddRoughModal -> render -> values", values);
            this.props.close();
            // Simulate submitting to database, shows us values submitted, resets form
            // setTimeout(() => {
            //   // alert(JSON.stringify(values, null, 2));
            //   resetForm();
            //   setSubmitting(false);
            // }, 500);
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
              <h5 className="h5-form-label">
                Packet Id : <span style={{ color: "#0F61FD" }}>#PID001</span>
              </h5>
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
                      setFieldValue("officePaketcreateDate", formateDate);
                    }}
                    id="office-packet-create-date"
                    placeholder="dd/mm/yyyy"
                    labelText="Create packet Date"
                    className={
                      touched.officePaketcreateDate &&
                      errors.officePaketcreateDate
                        ? "error"
                        : "bx--col"
                    }
                    dateid="office-packet-id"
                    name="officePaketcreateDate"
                    value={values.officePaketcreateDate}
                    onBlur={handleBlur}
                  />
                  {touched.officePaketcreateDate &&
                  errors.officePaketcreateDate ? (
                    <div className="error-message">
                      {errors.officePaketcreateDate}
                    </div>
                  ) : null}
                </div>
                <div className="bx--col-md-3">
                  <DropDownSelection
                    className={
                      touched.officeIssueassigneName &&
                      errors.officeIssueassigneName
                        ? "error"
                        : "bx--col dropdown-padding"
                    }
                    name="officeIssueassigneName"
                    selectedItem={values.officeIssueassigneName}
                    value={values.officeIssueassigneName}
                    // itemToString={(item) => (item ? item.text : "")}
                    id="rough-assignee-id"
                    items={[
                      "Option 1",
                      "Option 2",
                      "Option 3",
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.",
                      "Option 5",
                      "Option 6",
                    ]}
                    label="Select Assign id"
                    light
                    onChange={(select) =>
                      setFieldValue(
                        "officeIssueassigneName",
                        select.selectedItem
                      )
                    }
                    titleText="Assign id"
                    type="default"
                  />
                  {touched.officeIssueassigneName &&
                  errors.officeIssueassigneName ? (
                    <div className="error-message">
                      {errors.officeIssueassigneName}
                    </div>
                  ) : null}
                </div>
                <div className="bx--col-md-3">
                  {/* <DropDownSelection
                    className={
                      touched.roughName && errors.roughName
                        ? "error"
                        : "bx--col dropdown-padding"
                    }
                    name="roughName"
                    selectedItem={values.roughName}
                    value={values.roughName}
                    // itemToString={(item) => (item ? item.text : "")}
                    id="rough-name-office"
                    items={[
                      "Option 1",
                      "Option 2",
                      "Option 3",
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.",
                      "Option 5",
                      "Option 6",
                    ]}
                    label="Select Rough name"
                    light
                    onChange={(select) =>
                      setFieldValue("roughName", select.selectedItem)
                    }
                    titleText="Rough Name"
                    type="default"
                  />
                  {touched.roughName && errors.roughName ? (
                    <div className="error-message">{errors.roughName}</div>
                  ) : null} */}
                </div>
                {/* <div className="bx--col-md-3"></div> */}
              </div>
              <div className="bx--row top-margin-model-input">
                <div className="bx--col-md-3">
                  <TextField
                    className={
                      touched.officeIssuecarat && errors.officeIssuecarat
                        ? "error"
                        : "bx--col"
                    }
                    name="officeIssuecarat"
                    value={values.officeIssuecarat}
                    id="office-packet-carat"
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
                  {touched.officeIssuecarat && errors.officeIssuecarat ? (
                    <div className="error-message">
                      {errors.officeIssuecarat}
                    </div>
                  ) : null}
                </div>
                <div className="bx--col-md-3">
                  <TextField
                    className={
                      touched.officeIssuepiece && errors.officeIssuepiece
                        ? "error"
                        : "bx--col"
                    }
                    name="officeIssuepiece"
                    value={values.officeIssuepiece}
                    id="office-packet-officeIssuepiece"
                    placeholder="enter Piece here"
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
                  {touched.officeIssuepiece && errors.officeIssuepiece ? (
                    <div className="error-message">
                      {errors.officeIssuepiece}
                    </div>
                  ) : null}
                </div>
                <p style={{ display: "grid" }}>
                  Available Carat :{" "}
                  <span style={{ color: "#DA1E28" }}>00.00</span>
                </p>
              </div>
              <div className="bx--row top-margin-model-input">
                <div className="bx--col-md-3">
                  <DropDownSelection
                    className={
                      touched.officeIssueprocessName &&
                      errors.officeIssueprocessName
                        ? "error"
                        : "bx--col dropdown-padding"
                    }
                    name="officeIssueprocessName"
                    selectedItem={values.officeIssueprocessName}
                    value={values.officeIssueprocessName}
                    direction="top"
                    // itemToString={(item) => (item ? item.text : "")}
                    id="process-name-office"
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
                        "officeIssueprocessName",
                        select.selectedItem
                      )
                    }
                    titleText="Process Name"
                    type="default"
                  />
                  {touched.officeIssueprocessName &&
                  errors.officeIssueprocessName ? (
                    <div className="error-message">
                      {errors.officeIssueprocessName}
                    </div>
                  ) : null}
                </div>
                <div className="bx--col-md-3">
                  {/* <DropDownSelection
                    className={
                      touched.officeIssueassigneName && errors.officeIssueassigneName
                        ? "error"
                        : "bx--col dropdown-padding"
                    }
                    name="officeIssueassigneName"
                    selectedItem={values.officeIssueassigneName}
                    value={values.officeIssueassigneName}
                    direction="top"
                    // itemToString={(item) => (item ? item.text : "")}
                    id="employee-name-office"
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
                      setFieldValue("officeIssueassigneName", select.selectedItem)
                    }
                    titleText="Assigne Name"
                    type="default"
                  />
                  {touched.officeIssueassigneName && errors.officeIssueassigneName ? (
                    <div className="error-message">{errors.officeIssueassigneName}</div>
                  ) : null} */}
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

export default CreateOfficePacket;
