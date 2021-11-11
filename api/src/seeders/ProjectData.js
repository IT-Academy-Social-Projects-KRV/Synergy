const {models, Project} = require('../models1/models')

const projects = [
    {
        name: 'Create house',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'Create house1',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'Create house2',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
]

async function addProjects(){
    for(const p in projects){
        await Project.create(projects[p])
    }
}

module.exports = {addProjects}

