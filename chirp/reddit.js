const path = require('path');
const fs = require('fs');
const request = require('request')

let dataPath = path.join(__dirname, 'data.json');
let dataPath2 = path.join(__dirname, '../RedditARY.json')
let ARY = []
    

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        dataitem = "{\'title\': " + item.data.title + " \'url\': " + item.data.url + "  \'author\': " + item.data.author + "}"
        ARY.push(dataitem);
        fs.appendFileSync(dataPath, dataitem);

        fs.writeFile(dataPath2, JSON.stringify(ARY), err=> {
            if(err) console.log(err);
        });
        
    });
});



// request('https://reddit.com/r/popular.json', (err, res, body) => {
//     if (err) console.log(err);

//     fs.writeFile(dataPath2, JSON.stringify(item.data.title), err=> {
//     if(err) console.log(err);
// }); 

    
// }); 

/*fs.writeFile(datapath, JSON.stringify(chirps), err=> {
    if(err) console.log(err);
}); */
/*
[{
    "name": "bob",
    "comment": "i like to build"
},


JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(dataPath2,{"title":JSON.stringify([item.data.title]), "url":[item.data.url],
        "author":[item.data.author]} + '\n');
    });  */