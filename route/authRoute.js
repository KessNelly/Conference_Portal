const express = require ('express');
const {authMiddleware, isAdmin} = require ("../middlewares/authMiddleware");
const { createUser, forgotPasswordToken, resetPassword, updatePassword, loginAdmin, getallUsers, handleRefreshToken, logOut, getaUser, deleteaUser, updateaUser} = require('../controllers/userController');
const { loginUser } = require('../controllers/userController');
const router = express.Router();


router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.put('/password',authMiddleware, updatePassword);
router.post('/login', loginUser);
router.post('/admin-login', loginAdmin);
router.get('/all-users', authMiddleware, isAdmin, getallUsers);

router.get('/refresh', handleRefreshToken);
router.get('/logout', logOut);

router.get('/:id',authMiddleware, isAdmin, getaUser);
router.delete('/:id', deleteaUser);

router.put('/edit-user',authMiddleware, updateaUser);



module.exports = router;
