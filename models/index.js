const User = require("./user");
const City = require("./city");
const Event = require("./event");
const Restaurant = require("./restaurant");
const RV = require("./rv");

RV.belongsTo(User, {
  foreignKey: "user_id",
});

RV.belongsTo(City, {
  foreignKey: "city_id",
});

City.hasMany(Restaurant, { as: "restaurants" });
Restaurant.belongsTo(City, {
  foreignKey: "city_id",
});

City.hasMany(Event, { as: "events" });
Event.belongsTo(City, {
  foreignKey: "city_id",
});

module.exports = { User, City, Event, Restaurant, RV };
