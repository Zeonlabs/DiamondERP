import React, { Component } from "react";
import { Form, Dropdown } from "carbon-components-react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField, { DateSelection } from "../Common/CommonComponents";
// import { Tab } from "carbon-components-react";
// import TabView from "../Common/Tabs";

const validationSchema = Yup.object().shape({
  workPlace: Yup.string().required("*Work place is required"),
  assignName: Yup.string().required("*Assign Name is required"),
  carat: Yup.string().required("*carat is required"),
  rate: Yup.string().required("*rate is required"),
  piece: Yup.string().required("*purchas date is required"),
});
class AssignRough extends Component {
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
      <div style={{ marginBottom: "15%" }}>
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
                  Assign Id : <span style={{ color: "#0F61FD" }}>#AID001</span>
                </h5>
                <h5 className="h5-form-label">
                  Total Carat : <span style={{ color: "#0F61FD" }}>650.00</span>
                </h5>
              </div>
              <div className="bx--row">
                <div className="bx--col-md-4">
                  <Dropdown
                    ariaLabel="Dropdown"
                    className={
                      touched.workPlace && errors.workPlace
                        ? "error"
                        : "bx--col"
                    }
                    name="workPlace"
                    direction="bottom"
                    selectedItem={values.workPlace}
                    value={values.workPlace}
                    // itemToString={(item) => (item ? item.text : "")}
                    id="carbon-dropdown-example"
                    items={[
                      "Option 1",
                      "Option 2",
                      "Option 3",
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.",
                      "Option 5",
                      "Option 6",
                    ]}
                    label="Select work place"
                    light
                    onChange={(select) =>
                      setFieldValue("workPlace", select.selectedItem)
                    }
                    titleText="Work Place"
                    type="default"
                  />
                  {touched.workPlace && errors.workPlace ? (
                    <div className="error-message">{errors.workPlace}</div>
                  ) : null}
                </div>
                <div className="bx--col-md-4">
                  <Dropdown
                    ariaLabel="Dropdown"
                    className={
                      touched.assignName && errors.assignName
                        ? "error"
                        : "bx--col"
                    }
                    name="assignName"
                    direction="bottom"
                    selectedItem={values.assignName}
                    value={values.assignName}
                    // itemToString={(item) => (item ? item.text : "")}
                    id="rough-assignee-name"
                    items={[
                      "Option 1",
                      "Option 2",
                      "Option 3",
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.",
                      "Option 5",
                      "Option 6",
                    ]}
                    label="Select employee name"
                    light
                    onChange={(select) =>
                      setFieldValue("assignName", select.selectedItem)
                    }
                    titleText="Assign to Person"
                    type="default"
                  />
                  {touched.assignName && errors.assignName ? (
                    <div className="error-message">{errors.assignName}</div>
                  ) : null}
                </div>
                {/* <div className="bx--col-md-3"></div> */}
              </div>
              <div className="bx--row top-margin-model-input">
                <div className="bx--col-md-4">
                  <TextField
                    className={
                      touched.carat && errors.carat ? "error" : "bx--col"
                    }
                    name="carat"
                    value={values.carat}
                    id="rough-carat"
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
                <div className="bx--col-md-4">
                  <TextField
                    className={
                      touched.rate && errors.rate ? "error" : "bx--col"
                    }
                    name="rate"
                    value={values.rate}
                    id="rough-rate"
                    placeholder="enter amount here"
                    // invalid={false}
                    invalidText="Please fill"
                    labelText="Rate :"
                    light={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // onClick={function noRefCheck() {}}
                    required
                    type="number"
                  />
                  {touched.rate && errors.rate ? (
                    <div className="error-message">{errors.rate}</div>
                  ) : null}
                </div>
              </div>
              <div className="bx--row top-margin-model-input">
                <div className="bx--col-md-4">
                  <TextField
                    className={
                      touched.piece && errors.piece ? "error" : "bx--col"
                    }
                    name="piece"
                    value={values.piece}
                    id="rough-piece"
                    placeholder="enter amount here"
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
                <div className="bx--col-md-2">
                  <p style={{ display: "grid", marginTop: "6%" }}>
                    Total Amount :{" "}
                    <span style={{ color: "#0D9F37" }}>000000</span>
                  </p>
                </div>
                <div className="bx--col-md-2">
                  {/*               
                <div className="bx--col-md-3"> */}
                  <p style={{ display: "grid", marginTop: "6%" }}>
                    Remaining Carat :{" "}
                    <span style={{ color: "#FF3D00" }}>5.56</span>
                  </p>
                </div>
                {/* </div> */}
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

export default AssignRough;
