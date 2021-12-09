const projectRepository = require('../dal/projectRepository');

const getProjects = async (sort, page, size, capital, name, dateStart, dateFinish) => {
    const sortData = !sort ? ['id', 'ASC'] : sort.match(/[a-z]+[^A-Z]+|[a-z][\W_][a-z]+|[A-Z]+(?![a-z])/g);
    const capitalData = !capital ? [0, 10000000] : capital.match(/([0-9]+)/g);

    const databaseResult = await projectRepository.getProjects(sortData, page || 1, size || 5, capitalData, name, dateStart, dateFinish);
    const { count: totalProjects, rows: projects } = databaseResult;
    const totalPages = Math.ceil(totalProjects / (size || 5));
    const currentPage = page || 1;
    return {
        totalProjects,
        totalPages,
        currentPage,
        projects,
    };
};

const createProject = async (name, description, capital, dateStart, dateFinish) => {
    const databaseResult = await projectRepository.createProject(name, description, capital, dateStart, dateFinish);
    return databaseResult;
};

const getOneProject = async (id) => {
    const databaseResult = await projectRepository.getProject(id);
    return databaseResult;
}

const updateProject = async (name, description, capital, dateStart, dateFinish, id) => {
    const databaseResult = await projectRepository.updateProject(name, description, capital, dateStart, dateFinish, id);
    return databaseResult;
};

const deleteProject = async (id) => {
    const databaseResult = await projectRepository.deleteProject(id);
    return databaseResult;
};

module.exports = {
    getProjects,
    createProject,
    getOneProject,
    updateProject,
    deleteProject,
}
