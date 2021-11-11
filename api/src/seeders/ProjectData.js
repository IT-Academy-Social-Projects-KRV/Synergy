const {models, Project} = require('../models1/models')

const projects = [
    {
        name: 'Build house',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'Computer Software Development',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'Design of Plans',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'New Product Development',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'Maintenance of Process Industries',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'Event or Relocations',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'Equipment or System Installation',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'Web app development',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'Synergy CRM',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'The International',
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        name: 'Coup de Grace',
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

