const sequelize = require('../config/connection');
const { City } = require('../models');

const rentalData = [
{
    id: 1,
    name: 'Austin',
    state: 'Texas',
}
]

const seedCities = () => City.bulkCreate(rentalData);

module.exports = seedCities;