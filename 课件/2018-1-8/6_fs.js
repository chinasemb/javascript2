const fs = require('fs');

fs.readFile('www/index.html',(error,data)=>{
    if(error){
        console.log('404');
    }else{
        console.log(data.toString());
    }
});