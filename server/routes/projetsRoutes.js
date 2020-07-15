const express = require('express')
const projetsController = require('../controllers/projetsController')

const router = express.Router()

router.get('/', projetsController.getAllProjets)
router.post('/add', projetsController.addProjet)
router.get('/:id/competences', projetsController.getProjetCompetences)

router
    .route('/:id')
    .get(projetsController.getProjet)
    .delete(projetsController.deleteProjet)

module.exports = router