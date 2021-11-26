const projectRepository = require('../dal/projectRepository');

const getProjects = async (req) => {
    const { sort, page, size, capital, name, date_start, date_finish } = req.query;
    const sortData = !sort ? ['id', 'ASC'] : sort.match(/[a-z]+[^A-Z]+|[a-z][\W_][a-z]+|[A-Z]+(?![a-z])/g);
    const capitalData = !capital ? [0, 10000000] : capital.match(/([0-9]+)/g);

    const databaseResult = await projectRepository.getProjects(sortData, page || 1, size || 5, capitalData, name, date_start, date_finish);

    const { count: totalProjects, rows: projects } = databaseResult;
    const totalPages = Math.ceil(totalProjects / (size || 5));
    const currentPage = page || 1;
    return {
        totalProjects,
        totalPages,
        currentPage,
        projects
    };
};

const createProject = async (name, description, capital, date_start, date_finish) => {
    const databaseResult = await projectRepository.createProject({
        name,
        description,
        capital,
        date_start,
        date_finish,
        statusId: 1
    });
    return databaseResult;
};

const getOneProject = async (id) => {
    const databaseResult = await projectRepository.getProject(id);
    return databaseResult;
}

const updateProject = async (name, description, capital, date_start, date_finish, id) => {
    const databaseResult = await projectRepository.updateProject(name, description, capital, date_start, date_finish, id);
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
    deleteProject
}
