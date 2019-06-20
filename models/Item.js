var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Item = new Schema(
  {
    iata: {
      type: String
    },
    name: {
      type: String
    },
    primary_color: {
      type: String
    },
    secondary_color: {
      type: String
    },
    bags: {
      type: Boolean
    },
    checkin: {
      type: Boolean
    },
    seats: {
      type: Boolean
    }
  },
  {
    collection: "items"
  }
);

module.exports = mongoose.model("Item", Item);
