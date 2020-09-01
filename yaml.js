const YAML = require('yaml')
const fs = require('fs')

var file = fs.readFileSync('./kafka.yaml', 'utf8')
console.log(YAML.parseAllDocuments(file))
