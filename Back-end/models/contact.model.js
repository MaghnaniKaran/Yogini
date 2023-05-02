const Model = require("./db_connection");

class Contact extends Model {
  static get tableName() {
    return "contact";
  }

  static get idColumn() {
    return "id";
  }
}

module.exports = Contact;
// 
// 
