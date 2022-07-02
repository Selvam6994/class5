
//Anonymus Function
let arr=[1,2,5,4,8,9,7,3];
let result=[];
arr=arr.filter(function(ele){
    if (ele%2!==0)
    result.push(ele)
    return result;
});
console.log(result);

// Immediately Invoked Function
(()=>{
    let Num = [1,3,5,4,6,7,9,8];
    let oddNum =[];
    for (let ele of Num){
        if(ele%2!==0)
        oddNum.push(ele);
    }
        console.log(oddNum);
return oddNum })();
//new
let num=[1,3,5,4,6,7,9,8];
num=(function(){
    
    for(let key of num){
        if(key%2 !== 0){                          
            console.log(key);
        }
    }
})();
