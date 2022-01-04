import { Comment, User, Role } from '../models/modelsAssociations';

const getComments = async (itemId) => {
    try {
        const data = await Comment.findAll(
            {
                attributes: ['id', 'content', 'itemId'],
                where: {
                    itemId,
                },
                order: [['createdAt', 'ASC']],
                include: [{
                    model: User,
                    attributes: ['firstName', 'lastName', 'email'],
                    include: {
                        model: Role,
                        attributes: ['name'],
                    },
                },
                ],
                distinct: true,
            },
        );
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const createComment = async (content, itemId, userId) => {
    try {
        const data = await Comment.create({
            content,
            itemId,
            userId,
        });
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const getComment = async (id) => {
    try {
        const data = await Comment.findOne({
            where: { id },
            include: [{
                model: User,
                attributes: ['firstName', 'lastName', 'email'],
                include: {
                    model: Role,
                    attributes: ['name'],
                },
            }],
        });
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const updateComment = async (content, itemId, userId, id) => {
    try {
        const data = await Comment.update({
            content,
            itemId,
            userId,
        }, { where: { id } });
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const deleteComment = async (id) => {
    try {
        await Comment.destroy({ where: { id } });
        return id;
    } catch (err) {
        throw Error(err);
    }
}

export default {
    getComments,
    createComment,
    getComment,
    updateComment,
    deleteComment,
}
