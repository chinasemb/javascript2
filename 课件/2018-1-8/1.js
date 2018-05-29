// console.log(1);

// let num = require('./2.js').num;

/*
    在引入模块的时候，如果是自己创建的，就算在本目录也必须加
    ./
*/

// console.log(require('http'));
console.log(require('./2.js'));

// console.log(require('./2.js').fn());
// console.log(num + 5);