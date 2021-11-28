const login = async (req, res, next) => {
    const { email, password } = req.body;
    res.send('Login page');
}

module.exports = {
    login,
}
