const fs = require('fs')
const obj = require('./data');

const createJSON = (value)=> {
    let data = JSON.stringify(value);
    fs.writeFileSync('data.json', data);
    return true;
} 

createJSON(obj)

return true;