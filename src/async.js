const fs = require('mz/fs');
// a simple async function:
module.exports = async (path) => {
    let expression = await fs.readFile(path, 'utf-8');
    let fn = new Function('return ' + expression);
    console.log(fn)
    let r = fn();
    console.log(r)
    console.log(`Calculate: ${expression} = ${r}`);
    return r;
};