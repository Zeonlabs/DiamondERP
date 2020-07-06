import React, { Component } from "react";
import { Form, Dropdown } from "carbon-components-react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../Common/CommonComponents";
import SortigTable from "./SortigTable";
// import { Tab } from "carbon-components-react";
// import TabView from "../Common/Tabs";

const validationSchema = Yup.object().shape({
  workPlace: Yup.string().required("*Work place is required"),
  assignName: Yup.string().required("*Assign Name is required"),
  carat: Yup.string().required("*carat is required"),
  rate: Yup.string().required("*rate is required"),
  piece: Yup.string().required("*piece is required"),
});
class RoughSorting extends Component {
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
    return (
      <div style={{ marginBottom: "5%" }}>
        <Formik
          initialValues={{
            workPlace: "",
            assignName: "",
            carat: "",
            rate: "",
            piece: "",
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
              <div className="assign-headding-wrapper">
                <h5 className="h5-form-label">
                  Rough Id : <span style={{ color: "#0F61FD" }}>#RID001</span>
                </h5>
                <h5 className="h5-form-label">
                  Date : <span style={{ color: "#0F61FD" }}>20/03/2020</span>
                </h5>
                <h5 className="h5-form-label">
                  Total Carat : <span style={{ color: "#0F61FD" }}>650.00</span>
                </h5>
              </div>

              <div>
                <SortigTable />
              </div>
              <div className="assign-headding-wrapper">
                <h5 className="h5-form-label">
                  Total Sorting Carat :{" "}
                  <span style={{ color: "#DA1E28" }}>25.00</span>
                </h5>
                <h5 className="h5-form-label">
                  Total Amount :{" "}
                  <span style={{ color: "#0D9F37" }}>27,648 /-</span>
                </h5>
              </div>
              <div className="assign-headding-wrapper">
                <h5 className="h5-form-label">
                  Carat Remaining :{" "}
                  <span style={{ color: "#8A3FFC" }}>45.06</span>
                </h5>
                <h5 className="h5-form-label">
                  Remaining Carat Price :{" "}
                  <span style={{ color: "#8A3FFC" }}>30,000 /-</span>
                </h5>
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

export default RoughSorting;
