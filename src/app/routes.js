const Location = require('./models/location');

module.exports = (app, passport) => {

    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/login', (req, res) => {
        res.render('login', {
            message : req.flash('loginMessage')
        });
    });

    app.post("/login", passport.authenticate('local-login', {
        successRedirect: '/profi',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/signup', (req, res) => {
        res.render('signup', {
            message : req.flash('signupMessage')
        });
    });

    app.post("/signup", passport.authenticate('local-signup', {
        successRedirect: '/profi',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/profi', isLoggedIn, (req, res) => {
        res.render('profi', {
            user: req.user
        });
    });

    app.get('/logout', (req, res) =>{
        req.logout();
        res.redirect('/');
    });

    app.post("/addLoc", (req, res) => {
        let location = new Location()
        location.user = req.body.user
        location.latitud = req.body.latitud
        location.longitud = req.body.longitud

        location.save((err, LocationStored)=>{
            if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

            //res.status(200).send({location: LocationStored})
        })
    });

    
};

 function isLoggedIn(req, res, next){
     if(req.isAuthenticated()){
         return next();
     }
     return res.redirect('/');
 }

