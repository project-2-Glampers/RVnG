const City = require("./city");
const User = require("./user");
const RV = require("./rv");
const Event = require("./event");
const Restaurant = require("./restaurant");


RV.belongsTo(User, {
  foreignKey: "userId",
});

RV.belongsTo(City, {
  foreignKey: "city_id",
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
