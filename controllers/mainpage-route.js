const router = require('express').Router();
const { Riddles, Answers } = require('../models');
// const Riddles = require('../models/Riddles.js');
// const Answers = require('../models/Answers.js');
const withAuth = require('../utils/authorize');

router.get('/', async (req, res) => {
  try {
    const dbRiddlesData = await Riddles.findAll(
    //   {
    //   include: [
    //     {
    //       model: Answers,
    //       // attributes: ['title'],
    //     },
    //   ],
    // }
    );

    const riddles = dbRiddlesData.map((riddles) =>
      riddles.get({ plain: true })
    );

    res.render('homepage', {
      riddles,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/riddles/:id', withAuth, async (req, res) => {
  try {
    const dbRiddlesData = await Riddles.findByPk(req.params.id, {
      include: [
        {
          model: Answers,
          attributes: [
            'id',
            'title',
          ],
        },
      ],
    });

    const riddles = dbRiddlesData.get({ plain: true });
    res.render('riddles', { riddles, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/answers/:id', withAuth, async (req, res) => {
  try {
    const dbAnswersData = await Answers.findByPk(req.params.id);

    const answers = dbAnswersData.get({ plain: true });

    res.render('answers', { answers, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log("Test login route")
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');

});

module.exports = router;
