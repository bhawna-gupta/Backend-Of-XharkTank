const express= require('express');

const myFunctions1= require('../controllers/pitchesController');


const router = express.Router();

// Pitches Routes

router.post('/pitches',myFunctions1.AddPitch);
router.get('/pitches',myFunctions1.getAllPitches);
router.get('/pitches/:pitch_id',myFunctions1.fetchPitch);
router.post('/pitches/:pitch_id/makeOffer',myFunctions1.makeCounterOffer);

module.exports= router;