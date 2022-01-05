import commentRepository from '../dal/commentRepository';

const getComments = async (itemId) => {
    const databaseResult = await commentRepository.getComments(itemId);
    return databaseResult;
};

const getOneComment = async (id) => {
    const databaseResult = await commentRepository.getComment(id);
    return databaseResult;
}

const createComment = async (content, itemId, userId) => {
    const databaseResult = await commentRepository.createComment(content, itemId, userId);
    return databaseResult;
};

const updateComment = async (content, itemId, userId, id) => {
    const databaseResult = await commentRepository.updateComment(content, itemId, userId, id);
    return databaseResult;
};

const deleteComment = async (id) => {
    const databaseResult = await commentRepository.deleteComment(id);
    return databaseResult;
};

export default {
    getComments,
    getOneComment,
    createComment,
    updateComment,
    deleteComment,
}
