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
