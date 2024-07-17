// Importa il modello User
const User = require('../models/usersModel');

// Simulazione di un database


// Funzioni per interagire con il "database"
/*const addUser = (Userid ,Email,Username,surname, dateOfBird, address, hashedPassword) => {
    const existingUserById = findUserById(id);
    if (existingUserById) {
        throw new Error('User with this ID already exists');
}

// Creazione di un nuovo utente utilizzando il modello User
const newUser = new User(id,email,name,surname,dateOfBirth,address,hashedPassword);
Users.push(newUser);

return newUser;
};*/

const findUserByName = (name) => {
    return Users.find(user => user.email === email);
};


// Funzione per trovare un utente per id
const findUserById = (id) => {
    return Users.find(user => user.id === id);
};

module.exports = {
    addUser,
    findUserByName,
    findUserById
};

