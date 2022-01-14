import { Op } from 'sequelize';
import { statusesId } from '../../constans/constants';

const getFiltersForProject = (name, capital, dateStart, dateFinish, userId) => {
    const filters = {};
    if (name) {
        filters.name = { [Op.iLike]: `%${name}%` };
    }
    if (capital) {
        filters.capital = { [Op.between]: capital.split('-') };
    }
    if (dateStart) {
        filters.dateStart = { [Op.gt]: dateStart };
    }
    if (dateFinish) {
        filters.dateFinish = { [Op.lt]: dateFinish };
    }
    if (userId) {
        filters.userId = { [Op.eq]: userId }
    }
    filters.statusId = { [Op.ne]: statusesId.DELETED }
    return filters;
}

export { getFiltersForProject };
