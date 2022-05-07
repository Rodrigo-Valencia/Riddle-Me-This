const router = require('express').Router();
const { Riddles, Answers } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/authorize');

// GET all riddles for homepage
router.get('/', async (req, res) => {
  try {
    const dbRiddlesData = await Riddles.findAll({
      include: [
        {
          model: Answers,
          attributes: ['answers_queue'],
        },
      ],
    });

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

// GET one riddle
// Use the custom middleware before allowing the user to access the gallery
router.get('/riddles/:id', withAuth, async (req, res) => {
  try {
    const dbRiddlesData = await Riddles.findByPk(req.params.id, {
      include: [
        {
          model: Answers,
          attributes: [
            'riddle_id',
            'answers_queue',
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

// GET one answer
// Use the custom middleware before allowing the user to access the painting
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
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
