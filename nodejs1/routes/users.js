var express = require("express");
var router = express.Router();
var data = require('../data/user.json');
var members = data.members;
var fs = require("fs");
/* GET users listing. */
router.get("/", function(req, res, next) {
      var sortByName = members.slice(0);
      sortByName.sort(function(a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      res.render("users/index", { users: sortByName });
});

router.get("/:username", function(req, res, next) {
  var key = req.params['username'];
  for(var i = 0; i < members.length; i ++) {
    if(members[i].username == key) {
      res.render("users/detail", { user: members[i] });
    }
  }
});
module.exports = router;
