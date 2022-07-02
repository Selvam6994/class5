var findodd = num => {
    let res=[];
    for(let key of num){
        if(key%2 !== 0){
           res.push(key); 
        }
    }
    return res;
    
 }
 console.log(findodd([2,4,6,3,5,7,9]));
 
