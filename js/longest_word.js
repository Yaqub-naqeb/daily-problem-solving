// Finding  longest word in the sentence
const LongestWord = (str) => {
  const words = str.split(" ");
  //  console.log(word);

  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
  return longestWord;
};

const str = "daily problem solving with javaScript";
LongestWord(str);

//


// const longestWD=(str1)=>{
// let word=str1.split(' ')
// let size=0;
// let max=['']
// for(let i=0;i<str1.length;i++){

//   if(arr[i].length>size){
//     size=arr[i].length;
    
//   }

// }

// return size;


// }

// const str1='hello i am your sizeksdfjalj';
// console.log(longestWD(str1));
