var app = require('./app/main.js')
var args = process.argv;

if(isNaN(args[2])){
  console.log("Argument must be an integer");
}else{
  if(typeof args[3] === "undefined"){
    rules = './rules/feature_1.txt'
  } else{
    rules = args[3]
  }
  app.main(args[2], rules)
}
