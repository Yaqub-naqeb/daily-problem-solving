
const Capitalization=(str)=>{

const words=str.split(' ').map(word=>{

    //first way

    // let first=word.charAt(0).toUpperCase();
    // let rest=word.slice(1);
    // return `${first}${rest}`;

    //second way && better way

    return word.charAt(0).toUpperCase()+word.slice(1);
    


});

return words.join(' ')

}



const str='hello java'
console.log(Capitalization(str));