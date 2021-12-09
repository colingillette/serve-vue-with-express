const db = require('../models');
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // validate
    if (!req.body.title) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }

    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    Tutorial.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'An error occured when creating a new Tutorial'
            });
        });
}

// Retrieve all Tutorials by Title
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Tutorial.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'There was a problem finding Tutorials by Title'
            });
        });
}

// Retrieve one Tutorial
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with ID: ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'There was a problem finding Tutorial by ID'
            });
        });
}

// Update Tutorial by ID
exports.update = (req, res) => {
    const id = req.params.id;

    Tutorial.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: 'Tutorial was updated successfully' });
            } else {
                res.send({ message: `Cannot update Tutorial with ID: ${id}` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'There was a problem updating Tutorials'
            });
        });
}

// Delete Tutorial by ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: 'Tutorial was deleted successfully' });
            } else {
                res.send({ message: `Cannot delete Tutorial with ID: ${id}` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'There was a problem deleting Tutorial'
            });
        });
}

// Delete all Tutorials
exports.deleteAll = (req, res) => {
    Tutorial.destroy({ where: {}, truncate: false })
        .then(nums => {
            res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'There was a problem deleting all Tutorials'
            });
        });
}

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'There was a problem finding all published Tutorials'
            });
        });
}