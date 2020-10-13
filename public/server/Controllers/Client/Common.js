const Rough = require("../../models/Rough");
const OfficePacket = require("../../Models/OfficePacket");

const getList = async (req, res) => {
  // const body = req.body;
  const data = await Rough.find(
    { completed: false },
    { carat: 1, _id: 1 }
  ).sort({ createdAt: -1 });
  const packetSrNo = await OfficePacket.find({}, { srno: 1, _id: 1 });
  // console.log("getList -> caratList", data);

  const commonGet = {
    caratList: data,
    officePacketSrno: packetSrNo,
  };
  try {
    // console.log("createRough -> body", body, "postsaved", postSaved);
    if (commonGet != null) {
      res.json({ commonGet, message: "Data inserted Successfully" });
    } else {
      res.json({ message: "Database Error" });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getList,
};
