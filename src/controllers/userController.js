// Importa il modello User
const User = require('../models/usersModel');

// Simulazione di un database
const users = [];

// Funzioni per interagire con il "database"
const addUser = (id,email,name,surname, dateOfBird, address, hashedPassword) => {
    const existingUserById = findUserById(id);
    if (existingUserById) {
        throw new Error('User with this ID already exists');
}

// Creazione di un nuovo utente utilizzando il modello User
const newUser = new User(id,email,name,surname,dateOfBirth,address,hashedPassword);
users.push(newUser);

return newUser;
};

const findUserByName = (name) => {
    return users.find(user => user.email === email);
};


// Funzione per trovare un utente per id
const findUserById = (id) => {
    return users.find(user => user.id === id);
};

module.exports = {
    addUser,
    findUserByName,
    findUserById
};

