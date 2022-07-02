
let arr1=[1,2,3,4,5,6,7,8];
let k=6;
arr1=(function(){
    for(let i=0;i<k;i++){
        arr1.push(arr1[i]);
        
    }
    for(let i=0;i<k;i++){
        arr1.shift();
    }
    console.log(arr1);
    
})();