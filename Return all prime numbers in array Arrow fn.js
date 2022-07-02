let prime_Numbers=num=>
num=num.filter ((ele)=>{ 
    for(let i=2;i<=Math.sqrt(ele);i++){
       if (ele%i===0){
           return false;
       }else{
           return true;
       }
   }return ele;
});console.log(prime_Numbers([2,3,5,7,9,4,6,1,8]))

