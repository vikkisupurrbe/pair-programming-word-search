// input: a matrix of letters, a string for the keyword
// output: true if the word is found
//         false if not found
// steps:
// 1. get the rows horizontal arrays, join the letters, get the new array with joint letters
// 2. loop through the new array horizontalJoin to look for the word
//    true if found, false if not
// 3. create a new matrix for the vertialJoin
//    if the word is not given, return false
// 4. iniate a empty array to transpose, transpose the matrix, transposedMatrix
// 5. scan the transposed matrix's rows using the existed horizontalJoin
//    true if found
//    false if not



const wordSearch = (letters, word) => {
     
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (l of horizontalJoin) {
      if (l.includes(word)) return true
    }

    let transposeArr = [];
    for (let i = 0; i < letters[0].length; i++) {
      transposeArr.push([]);
    }

    for (let row = 0; row < letters.length; row++) {
      for (let col = 0; col < letters[row].length; col++) {
          transposeArr[col][row] = letters[row][col];
      }
    }
      
    const verticalJoin = transposeArr.map(ls => ls.join(''))
    
    for (l of verticalJoin) {
      if (l.includes(word)) return true
    }
  
    return false;
    
};



module.exports = wordSearch

/* Modified the matrix so that FRANK is present in the second column,
console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'R', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'A', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'N', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'K', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], "FRANK"));
*/  