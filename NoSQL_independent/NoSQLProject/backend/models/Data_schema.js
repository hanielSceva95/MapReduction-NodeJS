const mongoose = require('mongoose');
const schema = mongoose.Schema;

const dataSchema = mongoose.Schema({
    external_author_id: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    region: {
        type: String,
        required: false
    },
    language: {
        type: String,
        required: false
    },
    publish_date: Date,
    harvested_date: Date,
    following: {
        type: Number,
        required: false
    },
    followers: {
        type: Number,
        required: false
    },
    updates: {
        type: Number,
        required: false
    },
    post_type: {
        type: String,
        required: false
    },
    account_type: {
        type: String,
        required: false
    },
    retweet: {
        type: Number,
        required: false
    },
    account_category: {
        type: String,
        required: false
    },
    new_june_2018: {
        type: Number,
        required: false
    },
    alt_external_id: {
        type: Number,
        required: false
    },
    tweet_id: {
        type: Number,
        required: false
    },
    article_url: {
        type: String,
        required: false
    },
    tco1_step1: {
        type: String,
        required: false
    },
    tco2_step1: {
        type: String,
        required: false
    },
    tco3_step1: {
        type: String,
        required: false
    }
});

// const Tempschema = mongoose.Schema({
//     name: String,
//     age: Number
// });

module.exports = mongoose.model('databases', dataSchema)
// module.exports = mongoose.model('Database', dataSchema)