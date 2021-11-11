class HomeController {
  home(req, res) {
    res.status(200).json('U get home page');
  }
}
module.exports = new HomeController();
