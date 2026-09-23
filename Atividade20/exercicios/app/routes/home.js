module.exports = function(app) {
    app.get('/informacao/home', function(req, res) {
        res.render('informacao/home');
    });
}