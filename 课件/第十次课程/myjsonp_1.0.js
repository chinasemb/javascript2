function jsonp(obj){
    let {
        url='',
        data={},
        success=function(){},
        cb='callback'
    } = obj;
    let fnName = 'jQuery' + (+new Date);
    let str = '';
    let arr = [];
    data[cb] = fnName;  //{wd:ms,'callback':'jquery2313213'}
    for(let attr in data){
        arr.push(attr + '=' + data[attr]);
    }
    str = arr.join('&');
    window[fnName] = function(data){
        success(data);
    };

    // console.log(str);
    let oS = document.createElement('script');
    //wd=ms&callback=fn
    oS.src = url + '?'+ str;
    document.getElementsByTagName('head')[0].appendChild(oS);
    oS.remove();
}