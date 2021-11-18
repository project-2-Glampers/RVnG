//this adds authentication feature to any route. Meaning if the user is not logged in and a cookie is saved in sessions it will not allow the user to view that route

const withAuth = (req, res, next) =>{
    if (!req.session.userId){
        res.redirect('/login')
    }else{
        next()
    }
}

module.exports = withAuth;