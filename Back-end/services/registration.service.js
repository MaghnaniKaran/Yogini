const registration = require("../models/user.model");

const save = async (payload) => {
  // INSERT INTO users(id,name,phno,city) VALUES(?,?,?,?);
  return await registration.query().insertGraphAndFetch(payload);
};

module.exports = {
  save,
};
