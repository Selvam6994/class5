//AnonymusFunction
let arr = [1,5,7,9,3,77];
arr=arr.filter(function(number){
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i==0)
        return false;
    }return true;
}
);console.log(arr);



//New
let numArray = [1,55,44,22,3,6,7,9,10]; 
numArray=(function(){  
                                                               
    numArray = numArray.filter((number) => {
      
    for (var i = 2; i <= Math.sqrt(number); i++)
     {
        if (number % i === 0)
         return false;
    }
    return true;
});
console.log(numArray);
})();
