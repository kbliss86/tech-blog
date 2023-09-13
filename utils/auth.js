const withAuth = (req, res, next) => {
  console.log("withAuth ln 2");
    if (!req.session.logged_in) {
      console.log("with auth ln 4");
      res.redirect('/home/login');
    } else {
      console.log("with auth ln 7");
      next();
    }
  };
  
  module.exports = withAuth;
  