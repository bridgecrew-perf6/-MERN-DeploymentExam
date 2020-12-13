const manager = require("../models/manager.model");



module.exports.addManager = (req,res) =>{
    console.log(req.body) ;
    // const {title, price, desc} = req.body ;
    // console.log(Product);
    manager.create(req.body)
    .then(Manager => res.json({Manager}))
    .catch(err => res.json(err));
};

module.exports.findOne = (req,res) =>{
    console.log(req.params._id);
    manager.findOne({_id:req.params._id})
    .then(Manager => res.json({Manager}))
    .catch(err => res.json({message: 'somthing wrong', error: err}));
};

module.exports.updateAuthor = (req,res) =>{
    console.log(req.params._id);
    manager.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
    .then(() => res.json({msg: "ok"}))
    .catch(err => res.json(err));
};

module.exports.remove= (req, res) => {
    console.log(req.params._id);
    manager.deleteOne({_id: req.params._id})
        .then(() => res.json({msg: "ok"}))
        .catch(err => res.json(err));
};

