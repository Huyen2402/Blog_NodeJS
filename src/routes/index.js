const newRoute = require('./newRoute')

function route(app){

    app.use('/news', newRoute);
    app.get('/', (req, res) => {
        res.render('home');
      });
     
}

module.exports = route;