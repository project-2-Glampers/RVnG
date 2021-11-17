const router = require('express').Router();
const { RV, User } = require('../../models');



// GET /api/users
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  RV.findAll({
    // include: {
    //     model: User,
    //     attributes: ['id', 'username', 'email', 'password']
    // }
  })
    .then(dbRVData => res.json(dbRVData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
  RV.findOne({
    where: {
      id: req.params.id
    },
    // include: {
    //     model: User,
    //     attributes: ['id', 'username', 'email', 'password']
    // }
  })
    .then(dbRVData => {
      if (!dbRVData) {
        res.status(404).json({ message: 'No rv found with this id' });
        return;
      }
      res.json(dbRVData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  RV.create({
    model: req.body.model,
    price: req.body.price,
    length: req.body.length,
    location: req.body.location
  })
    .then(dbRVData => res.json(dbRVData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  RV.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbRVData => {
      if (!dbRVData[0]) {
        res.status(404).json({ message: 'No rv found with this id' });
        return;
      }
      res.json(dbRVData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
  RV.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbRVData => {
      if (!dbRVData) {
        res.status(404).json({ message: 'No rv found with this id' });
        return;
      }
      res.json(dbRVData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
