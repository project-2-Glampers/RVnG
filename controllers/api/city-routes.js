const router = require('express').Router();
const { RV, User, City } = require('../../models');



// GET /api/rv

router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  City.findAll({
    // include: {
    //     model: City,
    //     attributes: ['id', 'name', 'state', 'country']
    // }
  
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
    // include: {
    //     model: City,
    //     attributes: ['id', 'name', 'state', 'country']
    // }
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
