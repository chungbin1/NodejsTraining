var express = require("express");
var router = express.Router();
var fs = require("fs");
var data = require("../libs/user.json");
const members = data.members;
router.get("/", function(req, res, next) {
  console.log(members);
});

router.get("/search", function(req, res, next) {
  members.forEach(function(element) {
    var n = element.name;
    var key = "Quang";
    var check = n.indexOf(key);
    if (check > -1) {
      console.log(element);
    }
  });
});

function sortName(members) {
    var sortByName = members.slice(0);
    sortByName.sort(function(a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    return sortByName;
}
router.get("/sort", function(req, res, next) {
  var sortlistUser = sortName(members);
  console.log(sortlistUser);
});

router.get("/reverse", function(req, res, next) {
  var reverseByName = members.slice(0);
  reverseByName.reverse(function(a, b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
  console.log(reverseByName);
});
module.exports = router;
