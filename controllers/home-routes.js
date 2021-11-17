const router = require('express').Router();
const { Post, User, Comment } = require('../models');




router.get('/', (req, res) => {
  RV.findAll({
    attributes: [
      'id',
      'rental_name',
      'model',
      'price',
      'length',
      'city_id',
     // [sequelize.literal('(SELECT COUNT(*) FROM rv WHERE post.id = vote.post_id)'), 'vote_count']
    ],
  })
    .then(dbRVData => {
      // pass a single post object into the homepage template
      res.render('homepage', dbRVData[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;