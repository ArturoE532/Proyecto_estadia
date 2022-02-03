const { Router } = require('express');
const router = Router();

const {
    renderSignupForm,
    renderSignInForm,
    signin,
    signup,
    logout
 } = require('../controllers/users.controllers')

const {isAuthenticated} = require('../helpers/auth');

router.get('/users/signup',isAuthenticated, renderSignupForm);

router.post('/users/signup', isAuthenticated, signup);

router.get('/users/signin', renderSignInForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

module.exports = router;