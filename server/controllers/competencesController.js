module.exports = {
    addCompetence: (req, res) => {
        let { nom, ratio, categorie} = req.body;

        let query = "SELECT * FROM competences WHERE nom = '" + nom + "'";

        db.query(query, (err, result) => {
            if(result.length > 0) {
                res.status(403).json({message: 'Cette compétence existe déjà'})
            } else {
                if (err) {
                    return res.status(500).json({ err })
                }

                let query = 'INSERT INTO competences (nom, ratio, categorie) VALUES ("' + nom + '", "' + ratio + '", "' + categorie + '")';

                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).json({ err });
                    }
                    res.status(200).json({ competences: result })
                })
            }
        })
    },

    getAllCompetences: (req, res) => {
        db.query("SELECT * FROM competences", (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            } else {
                res.status(200).json({competences: result})
            }
        })
    },

    getCompetence: (req, res) => {
        db.query("SELECT * FROM competences WHERE competences.id = '" + req.params.id + "'", (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            } else {
                res.status(200).json({competences: result})
            }
        })
    },

    getFront: (req, res) => {
        db.query("SELECT * FROM competences WHERE competences.categorie = 'Front-End'", (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            } else {
                res.status(200).json({competences: result})
            }
        })
    },

    getBack: (req, res) => {
        db.query("SELECT * FROM competences WHERE competences.categorie = 'Back-End'", (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            } else {
                res.status(200).json({competences: result})
            }
        })
    },

    getDB: (req, res) => {
        db.query("SELECT * FROM competences WHERE competences.categorie = 'Base de donnée'", (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            } else {
                res.status(200).json({competences: result})
            }
        })
    },

    getMobile: (req, res) => {
        db.query("SELECT * FROM competences WHERE competences.categorie = 'Mobile'", (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            } else {
                res.status(200).json({competences: result})
            }
        })
    },

    getOthers: (req, res) => {
        db.query("SELECT * FROM competences WHERE competences.categorie = 'Autres'", (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            } else {
                res.status(200).json({competences: result})
            }
        })
    },

    updateCompetences: (req, res) => {
        let competenceId = req.params.id
        let { nom, ratio, categorie } = req.body

        let query = "UPDATE competences SET nom = '" + nom + "', ratio = '" + ratio + "', categorie = '" + categorie + "' WHERE competences.id = '" + competenceId + "';";

        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).json({ err });
            }
            res.status(200).json({ result });
        })
    },

    deleteCompetences: (req, res) => {
        let competenceId = req.params.id
        let tags = 'DELETE FROM tags WHERE competenceId = "' + competenceId + '"';
        let query = 'DELETE FROM competences WHERE id = "' + competenceId + '"';

        db.query(tags, (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            }
        db.query(query, (err, result) => {
            if(err) {
                return res.status(500).josn({ err });
            }
            res.status(200).json({ competences: result })
            })
        })
    },
}