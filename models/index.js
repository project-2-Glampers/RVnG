const City = require("./city");
const User = require("./user");
const RV = require("./rv");
const Event = require("./event");
const Restaurant = require("./restaurant");


// RV.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: 'CASCADE'
// });

// User.hasOne(RV, {
//   foreignKey: "user_id"
// })

RV.belongsTo(City, {
  foreignKey: "city_id",
  onDelete: 'CASCADE'
});

City.hasOne(RV, {
  foreignKey: "city_id"
});







// City.hasMany(Restaurant, { as: "restaurants" });
// Restaurant.belongsTo(City, {
//   foreignKey: "city_id",
// });

// City.hasMany(Event, { as: "events" });
// Event.belongsTo(City, {
//   foreignKey: "city_id",
// });

module.exports = { User, City, Event, Restaurant, RV };
