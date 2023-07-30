const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        minlength: 1,
        maxlength: 20,
        unique: true
    },
    password: {
        type: String,
    },
    photo: {
        type: String,
    },
    userSince: {
        type: Date,
        default: Date.now()
    },
    bio: String,
    role: String,
    isContributing: {
        type: Boolean,
        default: false
    },
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ],
    followingPeople: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Person'
        }
    ],
    recommended: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ],
    userReviews: [String],
    notifications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Notification'
        }
    ],
});

UserSchema.plugin(passportLocalMongoose); 

module.exports = mongoose.model('User', UserSchema);
