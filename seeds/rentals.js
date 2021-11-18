const sequelize = require('../config/connection');
const { RV } = require('../models');

const rentalData = [
    {
        // id: 1,
        rental_name: 'Jonathan Trailer Thomas',
        model: '2021 Trailer',
        price: 162,
        length: 25,
        city_id: 1 
    },
    {
        rental_name: 'Enterprise',
        model: '1966 Classic',
        price: 155,
        length: 25,
        city_id: 3 
    },
    {
        rental_name: 'Voyager',
        model: '1995 Class C',
        price: 79,
        length: 15,
        city_id: 5
    },
    {
        rental_name: 'Discovery',
        model: '2019 Class B',
        price: 147,
        length: 20,
        city_id: 9 
    },
    {
        rental_name: 'Eagle 5',
        model: '1987 Class A',
        price: 150,
        length: 30,
        city_id: 11 
    },
    {
        rental_name: 'Millenium Falcon',
        model: '1977 Class A',
        price: 230,
        length: 45,
        city_id: 13
    },
    {
        rental_name: 'Pequod',
        model: '1851 Campervan',
        price: 67,
        length: 17,
        city_id: 15 
    },
    {
        rental_name: 'The White Whale',
        model: 'Ancient',
        price: 90,
        length: 50,
        city_id: 9 
    },
    {
        rental_name: 'Rogue One',
        model: 'Suicide Runner',
        price: '197',
        length: 35,
        city_id: 6 
    },
    {
        rental_name: 'Bebop',
        model: '1998',
        price: 207,
        length: 26,
        city_id: 4 
    },
    {
        rental_name: 'Spaceballs The RV',
        model: 'Ludacrous Class B',
        price: 127,
        length: 40,
        city_id: 2 
    },
    {
        rental_name: 'Event Horizon',
        model: '1997 Class C',
        price: 666,
        length: 25,
        city_id: 5 
    },
    {
        rental_name: 'Nostromo',
        model: '1979 Class B',
        price: 225,
        length: 35,
        city_id: 10 
    },
    {
        rental_name: 'Sullaco',
        model: '1986 Campervan',
        price: 426,
        length: 27,
        city_id: 12 
    },
    {
        rental_name: 'Reliant',
        model: 'NCC-1864',
        price: 200,
        length: 45,
        city_id: 14 
    },
    {
        rental_name: 'Nautilus',
        model: '1954 Class A',
        price: 20000,
        length: 35,
        city_id: 1 
    },
    {
        rental_name: 'Orca',
        model: '1975 Class C',
        price: 35,
        length: 20,
        city_id: 2 
    },
    {
        rental_name: 'Sealab',
        model: '2021 Camper',
        price: 165,
        length: 15,
        city_id: 3 
    },
    {

        rental_name: 'Black Pearl',
        model: '2003 Class B',
        price: 201,
        length: 35,
        city_id: 6 
    },
    {
        rental_name: 'Kraken',
        model: '12 BC',
        price: 450,
        length: 100,
        city_id: 5 
    },
    {
        rental_name: 'White Widow',
        model: '2021 Class C',
        price: 120,
        length: 35,
        city_id: 8 
    },
]

const seedRVs = () => RV.bulkCreate(rentalData);

module.exports = seedRVs;