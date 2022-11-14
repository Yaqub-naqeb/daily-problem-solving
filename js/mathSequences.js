




const Sequence=(arr)=>{


    var result='';

    for(let i=1;i<arr.length;i++){
        console.log(arr[i]);
        if( (arr[i]+arr[0]===arr[i+1])){
            // if(i!==arr.length-1){return}
            result='Arithmatic';
       
        } 
        else if(arr[i]*arr[0]===arr[i+1]){
            result='geometric';
        }
    }
    return result;



    // return arr;
}


console.log(Sequence([2,4,6,8]));
console.log(Sequence([3,9,27]));
// arithmatec
// console.log(Sequence([2,4,6,8,16]));
//geometric
