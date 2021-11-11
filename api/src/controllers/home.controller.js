class HomeController {
  home(req, res) {
    res.status(200).json('u get home page');
  }
}
module.exports = new HomeController();
