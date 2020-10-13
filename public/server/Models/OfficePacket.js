const mongoose = require("mongoose");

const objSchema = mongoose.Schema(
  {
    office_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Offices",
      required: true,
    },
    sawing_manager_name: String,
    sawing_issueCarat: Number,
    sawing_issuePcs: Number,
    sawing_return: Boolean,
    sawing_assign_date: Date,
    sawing_return_carat: Number,
    sawing_return_pcs: Number,
    sawing_diffrence: Number,
    sawing_return_date: Date,
    chapka_manager_names: String,
    chapka_issueCarat: Number,
    chapka_issuePcs: Number,
    chapka_return: Boolean,
    chapka_assign_date: Date,
    chapka_return_carat: Number,
    chapka_return_pcs: Number,
    chapka_diffrence: Number,
    chapka_return_date: Date,
    pcs: Number,
    srno: Number,
    carat: Number,
    packet_status: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("OfficePacket", objSchema);
