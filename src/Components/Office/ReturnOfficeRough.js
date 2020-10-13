import React, { Component } from "react";
import { Form } from "carbon-components-react";
import { Formik } from "formik";
import * as Yup from "yup";
// import TextField from "../Common/CommonComponents";
// import { sumObjValuses } from "../../js/Helper";
import ReturnRoughTable from "./ReturnRoughTable";
// import { Tab } from "carbon-components-react";
// import TabView from "../Common/Tabs";

const validationSchema = Yup.object().shape({
  workPlace: Yup.string().required("*Work place is required"),
  assignName: Yup.string().required("*Assign Name is required"),
  carat: Yup.string().required("*carat is required"),
  rate: Yup.string().required("*rate is required"),
  piece: Yup.string().required("*piece is required"),
});
class ReturnOfficeRough extends Component {
  constructor(props) {
    super(props);

    this.state = {
      officeRetunrData: {
        fiveCarat: "",
        fivePrice: "",
        chockiCarat: "",
        chockiPrice: "",
        singleCarat: "",
        singlePrice: "",
        nofourCarat: "",
        nofourPrice: "",
        laserCarat: "",
        ghatCarat: "",
        makeableCarat: "",
        laserPrice: "",
        ghatPrice: "",
        makeablePrice: "",
        outCarat: "",
        outPrice: "",
      },
      sumOfCarat: 0,
      sumOfAmount: 0,
    };
  }

  handelSubmit = (e) => {
    console.log(e);
  };

  handelOnChange = (e) => {
    // const {
    //   fiveCarat,
    //   fivePrice,
    //   chockiCarat,
    //   chockiPrice,
    //   singleCarat,
    //   singlePrice,
    //   nofourCarat,
    //   nofourPrice,
    //   laserCarat,
    //   ghatCarat,
    //   makeableCarat,
    //   laserPrice,
    //   ghatPrice,
    //   makeablePrice,
    //   outCarat,
    //   outPrice,
    // } = this.state.officeRetunrData;

    this.setState(
      {
        officeRetunrData: {
          ...this.state.officeRetunrData,
          [e.target.name]: parseFloat(e.target.value),
        },
      },
      () => {
        this.setState({
          sumOfCarat:
            this.state.officeRetunrData.fiveCarat +
            this.state.officeRetunrData.chockiCarat +
            this.state.officeRetunrData.singleCarat +
            this.state.officeRetunrData.nofourCarat +
            this.state.officeRetunrData.laserCarat +
            this.state.officeRetunrData.ghatCarat +
            this.state.officeRetunrData.makeableCarat +
            this.state.officeRetunrData.outCarat,
          sumOfAmount:
            this.state.officeRetunrData.fivePrice *
              this.state.officeRetunrData.fiveCarat +
            this.state.officeRetunrData.chockiPrice *
              this.state.officeRetunrData.chockiCarat +
            this.state.officeRetunrData.singlePrice *
              this.state.officeRetunrData.singleCarat +
            this.state.officeRetunrData.nofourPrice *
              this.state.officeRetunrData.nofourCarat +
            this.state.officeRetunrData.laserPrice *
              this.state.officeRetunrData.laserCarat +
            this.state.officeRetunrData.ghatPrice *
              this.state.officeRetunrData.ghatCarat +
            this.state.officeRetunrData.makeablePrice *
              this.state.officeRetunrData.makeableCarat +
            this.state.officeRetunrData.outPrice *
              this.state.officeRetunrData.outCarat,
        });
      }
    );
  };

  handelData = () => {};

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
                <ReturnRoughTable
                  handelOnChange={this.handelOnChange}
                  value={this.state.officeRetunrData}
                />
              </div>
              <div className="assign-headding-wrapper">
                <h5 className="h5-form-label">
                  Total Sorting Carat :{" "}
                  <span style={{ color: "#DA1E28" }}>
                    {this.state.sumOfCarat}
                  </span>
                </h5>
                <h5 className="h5-form-label">
                  Total Amount :{" "}
                  <span style={{ color: "#0D9F37" }}>
                    {this.state.sumOfAmount} /-
                  </span>
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

export default ReturnOfficeRough;
