let str=['mango','madam','malayalam','rotator','reper'];
str=(function(){
    var res =[];
    for(i=0;i<str.length;i++){
        let n = str[i].split("");
        let r = n.reverse();                                                                  
        let v = r.join("");
        if(str[i] == v){
            res.push(str[i]);
        }else{
            continue;
        }
    }
    console.log(res);

})();
