import 'regenerator-runtime/runtime';
import projectRepository from '../../src/dal/projectRepository';
import projectService from '../../src/services/projectService';
import filter from '../../src/utils/helpers/filter';

const mockedValues = ['name', 'description', 'capital', 'dateStart', 'dateFinish', 'id'];
const getProjectsMockedValues = ['sortBy', 'sortDirection', 1, 10, 'name', 'capital', 'dateStart', 'dateFinish'];

test('Create project', async () => {
    const cteateProjectSpy = jest.spyOn(projectRepository, 'createProject').mockImplementation();
    await projectService.createProject(...mockedValues);
    expect(cteateProjectSpy).toHaveBeenCalledWith(...mockedValues);
})

test('Update project', async () => {
    const updateProjectSpy = jest.spyOn(projectRepository, 'updateProject').mockImplementation();
    await projectService.updateProject(...mockedValues);
    expect(updateProjectSpy).toHaveBeenCalledWith(...mockedValues);
})

test('Get one project by id', async () => {
    const getOneProjectSpy = jest.spyOn(projectRepository, 'getProject').mockImplementation();
    await projectService.getOneProject(5);
    expect(getOneProjectSpy).toHaveBeenCalledWith(5);
})

test('Delete projects by id', async () => {
    const deleteProjectSpy = jest.spyOn(projectRepository, 'deleteProject').mockImplementation();
    await projectService.deleteProject(10);
    expect(deleteProjectSpy).toHaveBeenCalledWith(10);
})

test('Sort data', () => {
    const sortDataSpy = jest.spyOn(filter, 'getFiltersForProject').mockImplementation();
    projectService.getProjects('sortBy', 'sortDirection', 1, 10, '5', '6', '7', '8');
    expect(sortDataSpy).toHaveBeenCalledWith('5', '6', '7', '8')
})

test('Get projects', async () => {
    jest.spyOn(filter, 'getFiltersForProject').mockReturnValue('test');
    const getProjectsSpy = jest.spyOn(projectRepository, 'getProjects').mockImplementation(
        () => ({ count: 5, rows: [] }),
    );
    await projectService.getProjects(...getProjectsMockedValues);
    expect(getProjectsSpy).toHaveBeenCalledWith(['sortBy', 'sortDirection'], 1, 10, 'test')
})

test('Total pages', async () => {
    jest.spyOn(projectRepository, 'getProjects').mockImplementation(
        () => ({ count: 1, rows: [{ name: 'project1' }] }),
    );

    const result = await projectService.getProjects(...getProjectsMockedValues);
    expect(result).toEqual({
        currentPage: 1,
        projects: [{ name: 'project1' }],
        totalPages: 1,
        totalProjects: 1,
    });
})
