var rules_service = require('./rules_service')

var main = function(input, rule_set){
  rules = rules_service.read_rules(rule_set)

  ret = rules.map((rule)=>{
    if(input % rule.int == 0) return rule.word
  })
  console.log(ret.length ==0 ?  input : ret);

}

module.exports = {
  main:main
}
