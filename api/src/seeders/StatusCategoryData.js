const {StatusCategory} = require('../models/models')

const categories = [
    {
        category: 'Shared'
    },
    {
        category: 'User'
    },
    {
        category: 'Project'
    },
    {
        category: 'Item'
    },
]

async function addStatusCategories(){
    for(const c in categories){
        StatusCategory.create(categories[c])
    }
}

module.exports = addStatusCategories;