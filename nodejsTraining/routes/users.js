var express = require("express");
var router = express.Router();
var data = require("../data/members");
var members = data.members;
var student = require("../data/students");
/* GET users listing. */
router.get("/", function(req, res, next) {
  student.getUser(members);
});

router.get("/search", function(req, res, next) {
  console.log(student.search(members, "hoangdm"));
});

router.get("/sort", function(req, res, next) {
  console.log(student.sort(members));
});

router.get("/reverse", function(req, res, next) {
  console.log(student.reverse(members));
});

router.get('/list', (req, res) => {
  var users = student.sort(members);
  res.render("users/index", {users});
});

router.get('/:name', (req, res) => {
  var user = student.search(members, req.params.name);
  res.render("users/detail", {user});
});

module.exports = router;
