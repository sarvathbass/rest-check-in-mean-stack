//define methods for crud
var mongodb = require('./MongodDbUtil');
var students = [];
module.exports.create = function (student, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, db) {
        console.log("Connection with mongodb successful");

        //using db handle, get students collection
        var studentsCollection = db.collection('Companies');

        //check
        var existingStudent = students.find(function (e) {
            return (e.name == student.name);
        });
        //insert student record and pass the result to callback with inserted record as second argument
        if (!existingStudent) {
            studentsCollection.insert(student, function (err, result) {
                callback(err, result.ops[0]);
            });
        }
        else {
            callback({ error: "Student with rollNo already exsiting" });
        }
    });
};

module.exports.find = function (id, callback) {
    mongodb.connect(function (err, db) {
        console.log("Connection with mongodb find");

        //using db handle, get students collection
        var studentsCollection = db.collection('Companies');

        //insert student record and pass the result to callback with inserted record as second argument
        studentsCollection.find({ }).toArray(function (err, result) {
            callback(result);
            console.log("find retrive");
        });
    });
};

module.exports.get = function (callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, db) {
        console.log("Connection with 1");

        //using db handle, get students collection
        var studentsCollection = db.collection('Companies');

        //insert student record and pass the result to callback with inserted record as second argument
        studentsCollection.find({}, { _id: 0 }).toArray(function (err, result) {
            callback(result);
        });
    });
};

module.exports.update = function (data, callback) {
    console.log(data);
    mongodb.connect(function (err, db) {
        console.log("Connection with mongodb retrive");
        var studentsCollection = db.collection('Companies');
        studentsCollection.update({ id: data.id }, { $set: { name: data.name, img: data.img, Password: data.Password, desc: data.desc, rank: data.rank, contact: data.contact } }, function (err, result) {
            callback(err, result);
        });
    });
};