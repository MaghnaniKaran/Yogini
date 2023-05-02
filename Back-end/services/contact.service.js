const contact = require("../models/contact.model");

const save = async (payload) => {
  // INSERT INTO users(id,name,phno,city) VALUES(?,?,?,?);
  return await contact.query().insertGraphAndFetch(payload);
};

module.exports = {
  save,
};
