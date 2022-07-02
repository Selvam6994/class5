let arr=[22,55,6,7,77,55,76,22];
(function(){
    let res =[];
    res.push(num[0]);
    for(i=1;i<num.length;i++){
        if(res.indexOf(num[i]) == -1){
            res.push(num[i]);
        } 
    }
   console.log(res);
})();


