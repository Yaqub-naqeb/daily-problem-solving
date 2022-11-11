



const fun=(str)=>{
let x=str.split(' ');

for(let i=0;i<x.length;i++){

    for(let j=0;j<x[i].length;j++){
        let pit=x[i][0];

        console.log(pit.toUpperCase());

    }
}


// return str;
}


const str='hello javascript';
fun(str);
