const Model = require("./db_connection");

class Registration extends Model {
  static get tableName() {
    return "user_details";
  }

  static get idColumn() {
    return "id";
  }
}

module.exports = Registration;
