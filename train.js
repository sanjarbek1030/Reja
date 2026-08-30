// 1. Function Declaration
function countLetters(str, char) {
    let count = 0;
    for (const letter of str) {
      if (letter === char) {
        count = count + 1;
      }
    }
    return count;
  }
  
  // 2. Function Expression
  const countLetters2 = function(str, char) {
    let count = 0;
    for (const letter of str) {
      if (letter === char) {
        count += 1;
      }
    }
    return count;
  }
  
  // 3. Arrow Function
  const countLetters3 = (str, char) => {
    let count = 0;
    for (const letter of str) {
      if (letter === char) count += 1;
    }
    return count;
  }
  
  console.log(countLetters("sanjar", "a"));
  console.log(countLetters2("boburbek", "b"));
  console.log(countLetters3("mexanizatsiyalashtirilganligidanmikina", "a"));
  