import projectRepository from '../dal/projectRepository';
import { getFiltersForProject } from '../utils/helpers/filter';

const getProjects = async (sortBy, sortDirection, page, size, name, capital, dateStart, dateFinish, userId) => {
    const filters = getFiltersForProject(name, capital, dateStart, dateFinish, userId);
    const sortData = !sortBy && !sortDirection ? ['id', 'ASC'] : [sortBy, sortDirection];

    const databaseResult = await projectRepository.getProjects(sortData, page || 1, size || 10, filters);
    const { count: totalProjects, rows: projects } = databaseResult;
    const totalPages = Math.ceil(totalProjects / (size || 10));
    const currentPage = page || 1;
    return {
        totalProjects,
        totalPages,
        currentPage,
        projects,
    };
};

const createProject = async (name, description, capital, dateStart, dateFinish, userId) => {
    const databaseResult = await projectRepository.createProject(name, description, capital, dateStart, dateFinish, userId);
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

export default {
    getProjects,
    createProject,
    getOneProject,
    updateProject,
    deleteProject,
}
