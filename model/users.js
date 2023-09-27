const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    waste: {
        type: String,
    }
});

const User = mongoose.model('User', userSchema);

const userSchema_1 = new mongoose.Schema({
    waste: {
        type: String,
    }
});

const User1 = mongoose.model('User1', userSchema_1);

const userSchema_2 = new mongoose.Schema({
    waste: {
        type: String,
    }
});

const User2 = mongoose.model('User2', userSchema_2);

const userSchema_3 = new mongoose.Schema({
    waste: {
        type: String,
    }
});

const User3 = mongoose.model('User3', userSchema_3);

const userSchema_4 = new mongoose.Schema({
    waste: {
        type: String,
    }
});

const User4 = mongoose.model('User4', userSchema_4);

const userSchema_5 = new mongoose.Schema({
    waste: {
        type: String,
    }
});

const User5 = mongoose.model('User5', userSchema_5);

const userSchema_6 = new mongoose.Schema({
    waste: {
        type: String,
    }
});

const User6 = mongoose.model('User6', userSchema_6);

const userSchema_7 = new mongoose.Schema({
    waste: {
        type: String,
    }
});

const User7 = mongoose.model('User7', userSchema_7);

const userSchema_8 = new mongoose.Schema({
    waste: {
        type: String,
    }
});

const User8 = mongoose.model('User8', userSchema_8);

// Export an object with all the models
module.exports = {
    User,
    User1,
    User2,
    User3,
    User4,
    User5,
    User6,
    User7,
    User8,
};
