var path = require('path');
var fs = require('fs');

let chirps = [{
    "name": "bob",
    "comment": "i like to build"
},
{
    "name": "cauli",
    "comment": "i like to eat veges"
},
{
    "name": "sandra",
    "comment": "i like my hair"
},
{
    "name": "dorothy",
    "comment": "we're not in kansas anymore"
},
{
    "name": "jack",
    "comment": "i like beans"
}]

let datapath = path.join(__dirname, '../chrips.json')

fs.writeFile(datapath, JSON.stringify(chirps), err=> {
    if(err) console.log(err);
});