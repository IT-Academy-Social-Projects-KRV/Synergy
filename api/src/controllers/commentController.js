const statusCode = require('http-status');
const commentService = require('../services/commentService');

const getComments = async (req, res) => {
    const { itemId } = req.body;
    console.log(req.body)
    const comments = await commentService.getComments(itemId);
    res.send(comments);
}

const getOneComment = async (req, res) => {
    const { id } = req.params;
    const comment = await commentService.getOneComment(id);
    res.send(comment);
};

const createComment = async (req, res) => {
    const {
        content, itemId, userId,
    } = req.body;
    const comment = await commentService.createComment(content, itemId, userId);
    res.status(statusCode.CREATED)
        .json(comment);
};

const updateComment = async (req, res) => {
    const {
        content, itemId, userId,
    } = req.body;
    const { id } = req.params;
    const comment = await commentService.updateComment(content, itemId, userId, id);
    res.status(statusCode.OK)
        .json(comment);
};

const deleteComment = async (req, res) => {
    const { id } = req.params;
    await commentService.deleteComment(id);
    res.status(statusCode.OK)
        .json(`Item ${id} deleted`);
};

module.exports = {
    getComments,
    getOneComment,
    createComment,
    updateComment,
    deleteComment,
}
