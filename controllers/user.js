const User = require("../models/User");

exports.adduser = async (req, res, next) => {
  console.log("req.body", req.body);
  try {
    if (!req.body.phone) {
      throw new Error("phone is required");
    }
    const name = req.body.name;
    const phonenumber = req.body.phone;
    const email = req.body.emailid;

    const data = await User.create({
      name: name,
      email: email,
      phonenumber: phonenumber,
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(501).json({
      error: err,
    });
  }
};

exports.getElement = async(req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log("Get user is falling", JSON.stringify(error));
    res.status(500).json({ error: error });
  }
};
exports.getDelete = async (req, res, next) => {
  try {
    if (!req.params.id) {
      console.log("id is missing");
      res.status(400).json({ err: "id is missing" });
    }
    const uId = req.params.id;
    await User.destroy({ where: { id: uId } });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
