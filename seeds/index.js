const sequelize = require('../config/connection');
const seedRVs = require('./rentals');
const seedCities = require('./city')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedRVs();
  console.log('\n----- RVs SEEDED -----\n');
  await seedCities();
  console.log('\n----- City SEEDED -----\n');
  process.exit(0);
};

seedAll();
