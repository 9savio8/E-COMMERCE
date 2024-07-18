const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/usersModel');
const users = require('../models/usersModel');
const dotenv = require('dotenv').config();

// Funzioni per registrare un nuovo utente
const register = async (req, res) => {
    const {email, password, userName, role } = req.body;
    const existingUserByEmail = findUserByEmail(users.email);
    if (existingUserByEmail) {
        throw new Error('User with this email already exists');
}

    try {
        // Hash della password
        const hashedPassword = await bcrypt.hash(password, 10);

        //nuovo User utilizzando UserModel
        const newUser = await User.create({userName, email, password: hashedPassword, role})
        res.status(200).json({message: 'user added successfully', user: newUser})        
    }catch(err){
        res.status(400).json({message: err.message})
    }
    };


const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    console.log(user)

    console.log(req.body)

    if (user) {
        // Verifica la password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // Genera un token JWT
        const token = jwt.sign({ id: user.usersid, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } else {
        res.status(404).json({message:'user not found!'});
    }
    
};
    // Funzione per cercare utente per id
    const getUserById = async (req,res) => {
        const userId = req.params.id;
        const user =await User.findByPk(userId);
        if (user) {
            res.status(200).json({ message: {user}});
        } else {
            res.status(404).json({ message: 'User not found'});
        }
    };

    const userLogOut = (req, res)=> {
        console.log('logout-----------------------------------------------------<<<<<<<<<<<<<<<<<<<<<<<')
        const disc = 'utente disconnesso correttamente'
        if(disc){
            res.status(200).json({message: disc})
        }else{
            res.status(400).json({message: err.message})
        }
    };

module.exports = {
    userLogOut,
    register,
    login,
    getUserById
};