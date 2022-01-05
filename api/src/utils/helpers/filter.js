import { Op } from 'sequelize';
import { statusesId } from '../../constans/constants';

const getFiltersForProject = (name, capital, dateStart, dateFinish) => {
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
    filters.statusId = { [Op.ne]: statusesId.DELETED }
    return filters;
}

export { getFiltersForProject };
