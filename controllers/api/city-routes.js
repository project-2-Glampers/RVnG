const router = require('express').Router();
<<<<<<< HEAD:controllers/api/city-routes.js
const { City } = require('../../models');
=======
const { RV, User, City } = require('../../models');
>>>>>>> 7170098ce45242e2da0d03ed90ccc862a45a96c5:routes/api/rv-routes.js



// GET /api/rv

router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
<<<<<<< HEAD:controllers/api/city-routes.js
  City.findAll({
    include: {
        model: City,
        attributes: ['id', 'name', 'state', 'country']
=======
  RV.findAll({
    include: [{
        model: User,
        attributes: ['id', 'username', 'email', 'password']
    },{
        model: City,
        attributes: ['id', 'name', 'state']
>>>>>>> 7170098ce45242e2da0d03ed90ccc862a45a96c5:routes/api/rv-routes.js
    }
  ]
  })
    .then(dbCityData => res.json(dbCityData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/rv/1
router.get('/:id', (req, res) => {
  City.findOne({
    where: {
      id: req.params.id
    },
<<<<<<< HEAD:controllers/api/city-routes.js
    include: {
        model: City,
        attributes: ['id', 'name', 'state', 'country']
    }
=======
    include: [{
      model: User,
      attributes: ['id', 'username', 'email', 'password']
  },{
    model: City,
    attributes: ['id', 'name', 'state']
  }
]
>>>>>>> 7170098ce45242e2da0d03ed90ccc862a45a96c5:routes/api/rv-routes.js
  })
    .then(dbCityData => {
      if (!dbCityData) {
        res.status(404).json({ message: 'No city found with this id' });
        return;
      }
      res.json(dbCityData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // POST /api/users
// router.post('/', (req, res) => {
//   // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
//   RV.create({
//     model: req.body.model,
//     price: req.body.price,
//     length: req.body.length,
//     location: req.body.location
//   })
//     .then(dbCityData=> res.json(dbCityData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// PUT /api/users/1
router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  City.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCityData=> {
      if (!dbCityData[0]) {
        res.status(404).json({ message: 'No City found with this id' });
        return;
      }
      res.json(dbCityData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // DELETE /api/users/1
// router.delete('/:id', (req, res) => {
//   RV.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbCityData=> {
//       if (!dbCityData) {
//         res.status(404).json({ message: 'No rv found with this id' });
//         return;
//       }
//       res.json(dbCityData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
