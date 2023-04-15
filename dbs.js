var mysql = require('mysql');
function result(form){
    let name=form.username.value;
    alert(name);
}

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2197",
  database:'studdata'
});

function search(form){
  let name=form.username.value;
  con.query("SELECT * FROM student", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].username)
  });
}



// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM student", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });