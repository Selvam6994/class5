let arr1=[4,6,5,3,8];
let arr2=[1,7,2,9,10];
(function(){
    res1=[];
    res2=[];
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
   let l = arr1.length /2;
   if(l%2===0){
       res.push(arr1[(arr1.length/2)-1],arr1[arr1.length/2]);
       res2.push(arr2[(arr2.length/2)-1],arr2[arr2.length/2]);
   }else{
       res.push(arr1[Math.floor(arr1.length/2)]);
       res2.push(arr2[Math.floor(arr2.length/2)]);
   }
   
   console.log(res1);
   console.log(res2);
})();
