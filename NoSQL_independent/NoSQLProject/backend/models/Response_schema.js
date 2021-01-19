const mongoose = require('mongoose');
const schema = mongoose.Schema;

const responseSchema = mongoose.Schema({
    // _id: {
    //     type: Number,
    //     required: true
    // },
    // value: {
    //     type: schema.Types.Mixed,
    //     required: false
    // }
});

module.exports = mongoose.model('testresults', responseSchema)
// module.exports = mongoose.model('Database', dataSchema)