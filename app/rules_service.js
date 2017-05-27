// Get rule set
let fs = require('fs');
let read_rules=(rule_file)=>{

    let file_data = fs.readFileSync(rule_file,  'utf8')
    let lines =  file_data.split('\n');
    let cleaned_rules = []
    lines.map((line) => line != '' ? cleaned_rules.push(line) : null )
    let ret =[]
    cleaned_rules.map((r)=>{
      rule = r.split(' ');
      ret.push({
        'int':rule[0],
        'word':rule[1]
      });
    })
    return ret
}
module.exports = {
  read_rules: read_rules
}
