const sequelize = require("../config/connection");
const { City } = require("../models");

const cityData = [
  {
    id: 1,
    name: "Austin",
    state: "Texas",
    country: "USA",
  },
  {
    id: 2,
    name: "Sedona",
    state: "Arizona",
    country: "USA",
  },
  {
    id: 3,
    name: "Albuquerque",
    state: "New Mexico",
    country: "USA",
  },
  {
    id: 4,
    name: "Tijuana",
    state: "Baja California",
    country: "Mexico",
  },
  {
    id: 5,
    name: "Montreal",
    state: "Quebec",
    country: "Canada",
  },
  {
    id: 6,
    name: "Reno",
    state: "Nevada",
    country: "USA",
  },
  {
    id: 7,
    name: "Calgary",
    state: "Alberta",
    country: "Canada",
  },
  {
    id: 8,
    name: "Salt Lake City",
    state: "Utah",
    country: "USA",
  },
  {
    id: 9,
    name: "Portland",
    state: "Oregon",
    country: "USA",
  },
  {
    id: 10,
    name: "Seattle",
    state: "Washington",
    country: "USA",
  },
  {
    id: 11,
    name: "Destin",
    state: "Florida",
    country: "USA",
  },
  {
    id: 12,
    name: "Tulsa",
    state: "Oklahoma",
    country: "USA",
  },
  {
    id: 13,
    name: "Durango",
    state: "Durango",
    country: "Mexico",
  },
  {
    id: 14,
    name: "Boulder",
    state: "Colorado",
    country: "USA",
  },
  {
    id: 15,
    name: "San Diego",
    state: "California",
    country: "USA",
  }
];

const cityseeds = () => City.bulkCreate(cityData);

module.exports = cityseeds;
