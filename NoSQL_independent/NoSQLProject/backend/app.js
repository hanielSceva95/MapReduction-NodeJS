// --------references used-----------

// http://youtube.com/watch?v=
// https://mongoosejs.com/docs/api.html#model_Model.mapReduce
// https://www.youtube.com/watch?v=3slWCHApiFc
// https://gist.github.com/nherment/1431054
// http://benbuckman.net/articles/mongodb-mapreduce-nodejs-php/
// https://stackoverflow.com/questions/34545921/mapreduce-using-node-js-and-mongoose
// https://mongoosejs.com/docs/api.html#model_Model.mapReduce
// https://www.youtube.com/watch?v=x2_bcCZg8vQ
// https://www.youtube.com/watch?v=3slWCHApiFc

// --------references used ends-----------

// --------imports and node packages---------

// var http = require('http');
// var MongoClient = require('mongodb')
const express = require('express');
const mongoose = require('mongoose');
const Model = require('./models/Data_schema');
const response_model = require('./models/Response_schema');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
// --------imports and node packages ends---------

// var db = mongoose.connection;

// ----------------http request for performing Map Reduce-----------

app.get('/mapReduce', async (req, res) => {
    // db.once('open', function () {
    //     console.log("db connect");
    //     db.dropCollection("testresults", function (err, result) {
    //         if (err) {
    //             console.log("error delete collection");
    //         } else {
    //             console.log("delete collection success");
    //         }
    //     });
    // });
    try {
        const drop = await response_model.remove({});

    } catch (err) {
        throw err;
    }
    var o = {},
        self = this;
    o.map = function () {
        emit(this.external_author_id, {
            external_author_id: this.external_author_id,
            author: this.author,
            content: this.content,
            region: this.region,
            language: this.language,
            count: 1,
        })
    };
    o.reduce = function (k, values) {
        var reduced = {
            external_author_id: values[0].external_author_id,
            author: values[0].author,
            content: this.content,
            region: values[0].region,
            language: values[0].language,
            count: 0,
        }
        var totalcount = 0;
        values.forEach(element => {
            totalcount += element.count;
        });
        reduced.count = totalcount;
        return reduced;
    };
    o.out = { reduce: 'testresults' };
    // o.out =
    Model.mapReduce(o, function (err, result) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            res.json("Map Reduction performed sucessfully");
        }
    });
})

// ----------------http request for performing Map Reduce ends-----------

// ----------------http request for fetching the Reduced data-----------

app.get('/fetchMapReduce', async (req, res) => {
    try {
        const response = await response_model.find();
        // console.log(response);
        res.json(response);
    }
    catch (err) {
        // console.log(err);
        res.json({ message: err });
    }
});
app.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Model({
        name: req.body.name,
        age: req.body.age
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    }
    catch (err) {
        res.json({ messgae: err });
    }
});

// ----------------http request for fetching the Reduced data ends-----------

// ------------connecting database using mongoose-------------------

mongoose.connect('mongodb://localhost:27017/NOSQL', () =>
    console.log("connected to db")
);
// ----------------Starting server-----------------
app.listen(3001, () => {
    console.log('web server listening on port 3001')
}
);

// --------------trial and error code--------------
// Connect to the db
// MongoClient.connect("mongodb://localhost:27017/NOSQL", function (err, db) {
//     console.log("mongo is up and running")

//     if (err) throw err;
//     var dbo = db.db("NOSQL")
//     var data = dbo.collection('data2').find().limit(10).pretty;
//     console.log(data);
//     //Write databse Insert/Update/Query code here..

// });

// const hostname = 'Sceva';
// const port = 8000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });


// app.get('/mapreduce', async (req, res) => {
//     console.log(this.external_author_id, "external_author_id");
//     // // console.log("asfasdfasfsafd44444444")
//     // // var data;
//     // try {
//     //     this.datasample = await Model.find({ "author": "SEATTLE_POST" }).limit(2);
//     //     // console.log("data", this.datasample);
//     //     // res.json(data);
//     // }
//     // catch (err) {
//     //     // console.log(err);
//     //     res.json({ message: err });
//     // }
//     // console.log("this.data", this.datasample)
//     try {
//         // function map(tempdata) {
//         function map() {
//             console.log("--------------------------this.data")
//             // var mapped = {
//             //     author: this.author,
//             //     region: this.region,
//             //     language: this.language,
//             //     publish_date: this.publish_date,
//             //     harvested_date: this.harvested_date,
//             // }
//             // try {
//             // const temp = Model.find({ "author": "SEATTLE_POST" }).limit(1);

//             console.log(this.content, "words");
//             var wordarray = this.content.toLowerCase().split(" ");
//             console.log(wordarray);
//             for (var i = 0; i <= wordarray.length; i++) {
//                 // console.log("asdfasfasdf1111111", tempdata[i].content);
//                 // var words = tempdata[i].content.toLowerCase().split(" ");
//                 // for (var x = 0; x < words.length; x++) {
//                 // wordarray.push(wordarray[x])
//                 // }
//                 console.log("wordarray", wordarray[i]);
//                 // }

//                 // console.log("asdfasfasdf1111---------------111", wordarray);
//                 // for (j = 0; j <= wordarray.length; j++) {
//                 emit(wordarray[i], 1);
//             }
//             // console.log("asdfasfasdf111------data");
//             console.log("asdfasfasdf 111*********1111");

//         };
//         function reduce(key, values) {
//             // console.log("asdfasfasd22222");
//             var count = 0;
//             values.forEach(function (v) { count += v });
//             return count;
//         };
//         // console.log("asdfasfasdf333333333333");
//         // const sample = await Model.mapReduce(map(this.datasample), reduce(), { out: { inline: true } })
//         const sample = db.collection("data2").mapReduce(map(), reduce(), { out: { inline: true } })
//         console.log("samople-----------------------", sample);
//         res.json(sample);
//     }
//     catch (err) {
//         res.json(err);
//     }
// });

