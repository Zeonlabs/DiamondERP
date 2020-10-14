const Rough = require("../../models/Rough");
const Office = require("../../Models/Office");
const OfficePacket = require("../../Models/OfficePacket");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
// const Unused = require("../../Models/Unused");

const create = async (req, res) => {
  const body = req.body;
  // console.log("create -> body", body);
  const id = uuidv4();
  const office = await Office.findOne({ _id: body.office_id });
  console.log("create -> office", office);

  const officeOnePacket = await OfficePacket.findOne({
    office_id: body.office_id,
  });
  const officePacketAll = await OfficePacket.find();
  // console.log(
  //   "create -> officePacketAll",
  //   officePacketAll,
  //   "------->",
  //   officePacketAll.length + 2
  // );

  // console.log("create -> office", office);

  if (body.packet_status === "sawing") {
    if (body.return === true) {
      try {
        await OfficePacket.updateOne(
          { office_id: body.office_id },
          {
            $set: {
              sawing_return_carat: body.returnCarat || 0,
              sawing_return_pcs: body.returnPcs || 0,
              sawing_diffrence:
                body.difference ||
                officeOnePacket.sawing.issueCarat - body.returnCarat,
              sawing_return_date:
                body.returnDate || moment().format("YYYY-MM-DD"),
              sawing_return: true,
              packet_status: "Sawing Return",
            },
          }
        );
        try {
          await Office.updateOne(
            { _id: body.office_id },
            {
              $set: {
                copyCarat: office.copyCarat + body.returnCarat,
              },
            }
          );
        } catch (error) {
          res.json({ message: error });
        }
      } catch (error) {
        res.json({ message: error });
      }
    } else {
      const data = {
        id,
        office_id: body.office_id,
        sawing_manager_name: body.manager_name || "noName",
        sawing_issueCarat: body.issueCarat || 0.0,
        sawing_issuePcs: body.issuePcs || 0.0,
        sawing_return: body.return || false,
        sawing_assign_date: body.assign_date || moment().format("YYYY-MM-DD"),
        pcs: body.officePacketpcs || 0,
        srno: body.srno || officePacketAll.length + 2,
        carat: body.carat || 0,
        packet_status: "Sawing Issue",
      };
      // console.log("create -> data", data);

      const officePacket = new OfficePacket({
        ...data,
      });
      // console.log("create -> officePacket", officePacket);
      try {
        const postSaved = await officePacket.save();
        // console.log("createRough -> body", body, "postsaved", postSaved);
        if (postSaved != null) {
          try {
            await Office.updateOne(
              { _id: body.office_id },
              {
                $set: {
                  copyCarat: office.copyCarat - body.issueCarat,
                  packetNo: office.packetNo + 1,
                },
              }
            );
          } catch (error) {
            res.json({ message: error });
          }
          res.json({ message: "Data inserted Successfully", data: body });
        } else {
          res.json({ message: "Database Error" });
        }
      } catch (error) {
        res.json({ message: error });
      }
    }
  } else {
    // console.log("create -> office", office);
    if (body.return === true) {
      try {
        await OfficePacket.updateOne(
          { office_id: body.office_id },
          {
            $set: {
              chapka_return_carat: body.returnCarat || 0,
              chapka_return_pcs: body.returnPcs || 0,
              chapka_diffrence:
                body.difference ||
                officeOnePacket.chapka.issueCarat - body.returnCarat,
              chapka_return_date:
                body.returnDate || moment().format("YYYY-MM-DD"),
              chapka_return: true,
              packet_status: "Chapka Return",
            },
          }
        );
        try {
          await Office.updateOne(
            { _id: body.office_id },
            {
              $set: {
                copyCarat: office.copyCarat + body.returnCarat,
              },
            }
          );
        } catch (error) {
          res.json({ message: error });
        }
      } catch (error) {
        res.json({ message: error });
      }
    } else {
      const data = {
        id,
        office_id: body.office_id,
        chapka_manager_name: body.manager_name || "noName",
        chapka_issueCarat: body.issueCarat || 0.0,
        chapka_issuePcs: body.issuePcs || 0.0,
        chapka_return: body.return || false,
        chapka_assign_date: body.assign_date || moment().format("YYYY-MM-DD"),
        pcs: body.officePacketpcs || 0,
        srno: body.srno || officePacketAll.length + 2,
        carat: body.carat || 0,
        packet_status: "Chapka Issue",
      };
      // console.log("create -> data", data);

      const officePacket = new OfficePacket({
        ...data,
      });
      // console.log("create -> officePacket", officePacket);
      try {
        const postSaved = await officePacket.save();
        // console.log("createRough -> body", body, "postsaved", postSaved);
        if (postSaved != null) {
          try {
            await Office.updateOne(
              { _id: body.office_id },
              {
                $set: {
                  copyCarat: office.copyCarat - body.issueCarat,
                  packetNo: office.packetNo + 1,
                },
              }
            );
          } catch (error) {
            res.json({ message: error });
          }
          res.json({ message: "Data inserted Successfully", data: body });
        } else {
          res.json({ message: "Database Error" });
        }
      } catch (error) {
        res.json({ message: error });
      }
    }
  }
};

const officeView = async (req, res) => {};
module.exports = {
  create,
  officeView,
};
