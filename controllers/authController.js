const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../src/models/usersModel');

// Funzioni per registrare un nuovo utente
const register = async (req, res) => {
    const { id, email, password, name, surname, dateOfBirth, address } = req.body;

    try {
        // Hash della password
        const hashedPassword = await bcrypt.hash(password, 10);

        //nuovo User utilizzando UserModel
        const newUser = User.addUser(id,email,name,surname,dateOfBirth,address);
        res.status(200).json({ message: 'User added succefully', user: newUser});
    } catch (errore) {
        res.status(400).json({ message: error.message});
    }

    };


const login = async (req, res) => {
    const { email, password } = req.body;
    // Verifica la password
    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Genera un token JWT
    const token = jwt.sign({ email: User.email }, 'secretkey', { expiresIn: '1h' });

    res.status(200).json({ token });
};
    // Funzione per cercare utente per id
    const getUserById = (req,res) => {
        const userId = req.params.id;
        const user = User.findUserById(userId);
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

