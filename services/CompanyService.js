//var studentDao = require('../daos/StudentDao');
var studentDao = require('../daos/CompanyDocumentDao');

module.exports.createStudent = function (student, callback) {
    studentDao.create(student, callback);
};

module.exports.getStudentByRollNo = function (rollNo, callback) {
    studentDao.find(rollNo, callback);
};

module.exports.getAllStudents = function (callback) {
    studentDao.get(callback);
};

module.exports.updateApplicant = function (data, callback) {
    console.log("service",data);
    studentDao.update(data, callback);
};