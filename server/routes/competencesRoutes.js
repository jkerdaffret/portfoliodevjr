const express = require('express')
const competencesController = require('../controllers/competencesController')

const router = express.Router()

router.get('/', competencesController.getAllCompetences)
router.post('/add', competencesController.addCompetence)
router.get('/getfront', competencesController.getFront)
router.get('/getback', competencesController.getBack)
router.get('/getdb', competencesController.getDB)
router.get('/getmobile', competencesController.getMobile)
router.get('/getothers', competencesController.getOthers)

router
    .route('/:id')
    .get(competencesController.getCompetence)
    .patch(competencesController.updateCompetences)
    .delete(competencesController.deleteCompetences)

module.exports = router