var studentModule = {
  showUser: function(member) {
    console.log("name:        " + member.name);
    console.log("Birthday:    " + member.birthday);
    console.log("Sex:         " + member.sex);
    console.log("Department:  " + member.department);
  },
  getUser: function(members) {
    members.forEach(function(member) {
      studentModule.showUser(member);
    });
  },
  search : function(members, username) {
      var arr = [];
      var j = 0;
      for (var i = 0; i < members.length; i++) {
        if (username == members[i].username) {
          arr[j] = members[i];
       }
    }
      return arr;
    },
  sort: function(members) {
    for (var i = 0; i < members.length - 1; i++) {
      for (var j = i + 1; j < members.length; j++) {
        if (members[i].name > members[j].name) {
          var tmp = members[i];
          members[i] = members[j];
          members[j] = tmp;
        }
      }
    }
    return members;
  },
  reverse : function(members) {
      var sortByName = studentModule.sort(members);
      sortByName.reverse();
      return sortByName;
    }
};
module.exports = studentModule;
// exports.showUser = function(member) {
//   console.log("name:        " + member.name);
//   console.log("Birthday:    " + member.birthday);
//   console.log("Sex:         " + member.sex);
//   console.log("Department:  " + member.department);
// };
// exports.getUser = function(members) {
//   members.forEach(function(member) {
//     exports.showUser(member);
//   });
// };
// exports.search = function(members, username) {
//   var arr = [];
//   var j = 0;
//   for (var i = 0; i < members.length; i++) {
//     if (username == members[i].username) {
//       arr[j] = members[i];
//    }
// }
//   return arr;
// };
// exports.sort = function(members) {
//   for (var i = 0; i < members.length - 1; i++) {
//     for (var j = i + 1; j < members.length; j++) {
//       if (members[i].name > members[j].name) {
//         var tmp = members[i];
//         members[i] = members[j];
//         members[j] = tmp;
//       }
//     }
//   }
//   return members;
// };
// exports.reverse = function(members) {
//   var sortByName = exports.sort(members);
//   sortByName.reverse();
//   return sortByName;
// };
