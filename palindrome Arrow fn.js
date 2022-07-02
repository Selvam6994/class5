let palindrome=string=>{
    let result=[];
    for(let ele of string){
        let L=ele.split(' ');
        let M=L.reverse();
        let N=M.join('');
        if(ele==N){
            result.push(N);
        }else{
            continue;
        }
    }return result;
};console.log(palindrome(['mango','madam','malayalam','rotator','reper']));