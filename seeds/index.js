const sequelize = require('../config/connection');
const seedRVs = require('./rentals');
const seedCities = require('./cities')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCities();
  console.log('\n----- City SEEDED -----\n');
  await seedRVs();
  console.log('\n----- RVs SEEDED -----\n');
  
  process.exit(0);
};

seedAll();
