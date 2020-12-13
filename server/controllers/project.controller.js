const Project = require("../models/project.model");


module.exports.findAll = (req,res) =>{
    Project.find({})
    .then(Author => res.json(Author) )
    .catch(err => res.json({message: 'somthing wrong', error: err}));
};

module.exports.addProject = (req,res) =>{
    console.log(req.body) ;
    // const {title, price, desc} = req.body ;
    // console.log(Product);
    Project.create(req.body)
    .then(Project => res.json({Project}))
    .catch(err => res.json(err));
};

module.exports.findOne = (req,res) =>{
    // console.log(req.params._id);
    Project.findOne({_id:req.params._id})
    .then(Project => res.json({Project}))
    .catch(err => res.json({message: 'somthing wrong', error: err}));
};

module.exports.updateProject = (req,res) =>{
    console.log(req.body);
    console.log(req.params._id);
    Project.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
    .then(() => res.json({msg: "ok"}))
    .catch(err => res.json(err));
};

module.exports.remove= (req, res) => {
    console.log(req.params._id);
    Project.deleteOne({_id: req.params._id})
        .then(() => res.json({msg: "ok"}))
        .catch(err => res.json(err));
};

