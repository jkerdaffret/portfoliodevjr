const fs = require("fs");

module.exports = {
    addProjet: (req, res) => {
        if(!req.files) {
            return res.status(400).json({"error": "Pas de fichier transféré" });
        }

        let message = "";
        let { nom, description, lien } = req.body;
        let uploadedFile = req.files.image;
        let image = uploadedFile.nom;
        let fileExtension = uploadedFile.mimetype.split("/")[1];
        image_name = nom + "." + fileExtension;

        let nameQuery = "SELECT id, nom, description, image, lien FROM projets WHERE nom = '" + nom + "'";

        db.query(nameQuery, (err, result) => {
            if(err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = "Ce projet existe déjà";
                res.status(403).json({ message });
            } else {
                if (
                    uploadedFile.mimetype === "image/png" ||
                    uploadedFile.mimetype === "image/jpeg" ||
                    uploadedFile.mimetype === "image/gif"
                ) {
                    uploadedFile.mv(`public/images/${image_name}`, (err) => {
                        if (err) {
                            return res.status(500).json({ err });
                        }

                        let query =
                        'INSERT INTO projets (nom, desription, image, lien ) VALUES ("' + nom +'", "' + description +'", "' + image_name +'", "' + lien + '")';

                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).json({ err });
                            }
                            res.status(200).json({ projets: result });
                        })
                    })
                } else {
                    message = "Ce format de d'image n'est pas accepté, seul les fichiers de type 'gif', 'jpeg' et 'png' sont autorisés";
                    res.status(403).json({ message });
                }
            }
        });
    },

    getAllProjets: (req, res) => {
        db.query("SELECT id, nom, image, description, lien FROM projets", (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            } else {
                res.status(200).json({projets: result})
            }
        });
    },

    getProjet: (req, res) => {
        db.query("SELECT id, nom, image, description, lien FROM projets WHERE projets.id '" + req.params.id + "';", (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            } else {
                res.status(200).json({projets: result})
            }
        });
    },

    deleteProjet: (req, res) => {
        let projetId = req.params.id;
        let getImageQuery = 'SELECT image FROM projets WHERE id = "' + projetId + '"';
        let tags = 'DELETE FROM tags WHERE projets.id = "' + projetId + '"';
        let query = 'DELETE FROM projets WHERE id = "' + projetId + '"';

        db.query(getImageQuery, (err, result) => {
            if (err) {
                return res.status(500).json({ err });
            }

            let image = result[0].image;

            fs.unlink(`public/images/${image}`, (err) => {
                if (err) {
                    return res.status(500).json({ err });
                }
                db.query(tags, (err, result) => {
                    if(err) {
                        return res.status(500).json({ err });
                    }
                db.query(query, (err, result) => {
                    if(err) {
                        return res.status(500).json({ err });
                    }
                    res.status(200).json({ projets: result })
                    });
                });
            });
        });
    },

    getProjetCompetences: (req, res) => {
        let projetId = req.params.id
        let query = "SELECT competences.nom AS competences FROM tags JOIN projets ON tags.projetId = projets.id JOIN competences ON tags.competenceId = competences.id WHERE tags.projetId = '" + projetId + "';";
        db.query(query, (err, result) => {
            if(err) {
                return res.status(500).json({ err })
            } else {
                res.status(200).json({tags: result})
            }
        });
    }
}