const fs = require('fs');

fs.writeFile('1.txt','hello world',(err)=>{
    if(err){
        console.log('创建失败'+err);
    }

    console.log('成功');
});