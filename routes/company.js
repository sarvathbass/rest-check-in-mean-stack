var express = require('express');
var router = express.Router();

var studentService = require('../services/CompanyService');

/* GET students listing. */
router.get('/', function (req, res, next) {
  studentService.getAllStudents(function(students) {
    res.send(students);
  });
});

/* GET student by id */
router.get('/:rollNo', function (req, res, next) {
  studentService.getStudentByRollNo(req.params.rollNo, function(student) {
    res.send(student);
  });
});

/* POST add student */
router.post('/', function (req, res, next) {
  studentService.createStudent(req.body, function(err, student) {
    if (err) {
      res.send(err);
    } else {
    res.send(student);
    }
  });
});

// put
router.put('/', function (req, res, next) {
  studentService.updateApplicant(req.body, function (err, student) {
   // console.log("route request",req.body);
    if (!err) {
      res.send(student);
    } else {
      res.send({ responseCode: 1, responseMessage: err.message });
    }
  });
});

module.exports = router;
