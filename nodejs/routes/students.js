var express = require("express");
var router = express.Router();
var fs = require("fs");
router.get("/", function(req, res, next) {
    var obj;
    fs.readFile("./user.json", "utf8", function(err, data) {
        if(err) {
            throw err;
        } else {
            obj = JSON.parse(data);
            obj.forEach(function(element) {
                console.log("username:"+ element.username, "birthday:"+ element.birthday, "gender:" + element.gender);
              });
            
        }
    });
});
router.get("/search", function(req, res, next) {
    var obj;
    fs.readFile("./user.json", "utf8", function(err, data) {
        if(err) {
            throw err;
        } else {
            var key = "Chu";
            obj = JSON.parse(data);
            obj.forEach(function(element) {
                var n = (element.username).indexOf(key);
                if(n > -1) {
                    console.log("username:"+ element.username, "birthday:"+ element.birthday, "gender:" + element.gender);
                }
              });
        }
    });
});

router.get("/sort", function(req, res, next) {
    var obj;
    fs.readFile("./user.json", "utf8", function(err, data) {
        if(err) {
            throw err;
        } else {
            obj = JSON.parse(data);
            var arrUsers = new Array();
            for (var i = 0; i < obj.length; i++){
                arrUsers[i] = obj[i].username;
            }
            arrUsers.sort();
            console.log(arrUsers.valueOf());
        }
    });
});

router.get("/reverse", function(req, res, next) {
    var obj;
    fs.readFile("./user.json", "utf8", function(err, data) {
        if(err) {
            throw err;
        } else {
            obj = JSON.parse(data);
            var arrUsers = new Array();
            for (var i = 0; i < obj.length; i++){
                arrUsers[i] = obj[i].username;
            }
            arrUsers.reverse();
            console.log(arrUsers.valueOf());
        }
    });
});
module.exports = router;

