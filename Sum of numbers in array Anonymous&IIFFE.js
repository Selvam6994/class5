//Anonymus Function
let sum_Arr=(function(...no){
    let total = 0;
    for(let i of no){
    total = total+i;}
    return total;});
    console.log(sum_Arr(1,4,3,5,6,6,7));


//New
let Arr = [1,4,3,5,6,6,7];
Arr=(function(){
    let sum = 0;
    for(let ele of Arr){
        sum = sum+ele
      }  console.log(sum);
    return sum;
  }
  )();

