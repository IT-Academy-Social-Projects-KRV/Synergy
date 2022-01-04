import statusCode from 'http-status';
import commentService from '../services/commentService';

const getComments = async (req, res) => {
    const { itemId } = req.body;
    const comments = await commentService.getComments(itemId);
    res.status(statusCode.OK)
        .json(comments);
}

const getOneComment = async (req, res) => {
    const { id } = req.params;
    const comment = await commentService.getOneComment(id);
    res.status(statusCode.OK)
        .json(comment);
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
        .json(`Comment ${id} deleted`);
};

export {
  getComments,
  getOneComment,
  createComment,
  updateComment,
  deleteComment,
};
