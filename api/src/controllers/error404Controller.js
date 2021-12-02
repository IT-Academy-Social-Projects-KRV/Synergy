const status = require('http-status');

const get404ErrorPage = async (req, res) => {
    res.status(status.NOT_FOUND).send('Page not found');
}

module.exports = {
    get404ErrorPage,
}
