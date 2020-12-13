const Project = require('../controllers/project.controller');
// const Manager = require('../controllers/manager.controller');

module.exports = app =>{
    app.get('/api/project', Project.findAll);
    app.post('/api/project/new', Project.addProject);
    app.get('/api/project/:_id', Project.findOne);
    app.put('/api/project/:_id', Project.updateProject);
    app.delete('/api/project/:_id', Project.remove);

    //add manager
    // app.post('/api/manger/new', Project.Manager)
}