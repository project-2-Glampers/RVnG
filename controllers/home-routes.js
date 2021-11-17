<<<<<<< HEAD:controllers/home-routes.js
const router = require('express').Router();
const { Post, User, Comment } = require('../models');


router.get('/',  (req,res) => {

  res.render('index')
=======
const { application } = require('express');
const router = require('express').Router();
const sequelize = require('../config/connection');



router.get('/', (req,res) => {
  console.log('hello world');
  res.render('index', data);
  
>>>>>>> 67022f29d2679e8ef5eb35b01d05ce1781027c02:routes/home-routes.js
}
);

// router.get('/', (req, res) => {
//   Post.findAll({
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       // pass a single post object into the homepage template
//       res.render('homepage', dbPostData[0]);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;