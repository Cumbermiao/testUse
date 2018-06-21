const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);


function sum(...arg) {
    return arg.reduce((prev, cur) => {
        return prev + cur
    })
}

async function read() {
    let expression = await readFile(path.resolve(__dirname, './expression.txt'),'utf8')    
    let fn = new Function(`return eval(${expression}) `)
    return fn()
}

module.exports = {
    sum,
    read
};