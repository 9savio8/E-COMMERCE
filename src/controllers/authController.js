const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/usersModel');


// Funzioni per registrare un nuovo utente
const register = async (req, res) => {
    const {Email, Password, UserName, Role } = req.body;

    try {
        // Hash della password
        const hashedPassword = await bcrypt.hash(Password, 10);

        //nuovo User utilizzando UserModel
        const newUser = await user.create({UserName, Email, Password: hashedPassword, Role})
        res.status(200).json({message: 'user added successfully', user: newUser})        
    }catch(err){
        res.status(400).json({message: err.message})
    }
    };


const login = async (req, res) => {
    const { email, password } = req.body;
    // Verifica la password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Genera un token JWT
    const token = jwt.sign({ email: user.email }, 'secretkey', { expiresIn: '1h' });

    res.status(200).json({ token });
};
    // Funzione per cercare utente per id
    const getUserById = (req,res) => {
        const userId = req.params.id;
        const user = user.findUserById(userId);
        if (user) {
            res.status(200).json({ user});
        } else {
            res.status(404).json({ message: 'User not found'});
        }
    };

module.exports = {
    register,
    login,
    getUserById
};