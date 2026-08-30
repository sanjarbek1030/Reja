// lesson No21, Call back funcs.
console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba bo'ling", // 0-20
  "to'g'ri boshliq tanlang va ko'proq o'rganing", // 20-30
  "mustaqil ishlarshni boshlang", // 30 - 40
  "siz kuchli bo'lgan narsalarni qiling", // 40 - 50
  "yoshlarga investitsiya qilish", // 50 -60
  "dam oling, endi foydasi yo'q", // 60
];


// callback func example

/* 
function maslahatBering(a, callBack) {
  if (typeof a !== "number") callBack("insert a number", null);
  else if (a <= 20) callBack(null, list[0]);
  else if (a > 20 && a <= 30) callBack(null, list[1]);
  else if (a > 30 && a <= 40) callBack(null, list[2]);
  else if (a > 40 && a <= 50) callBack(null, list[3]);
  else if (a > 50 && a <= 60) callBack(null, list[4]);
  else {
    setTimeout(function() {callBack(null, list[5]);}, 5000)
  }
}

console.log("passed here: 0");
maslahatBering(65, (err, data) => {
  if(err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here: 1");
*/

// asynchronous function
async function maslahatBering(a, callBack) {
  if (typeof a !== "number") callBack("insert a number", null);
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}


// then/catch
/*
console.log("passed here: 0");
maslahatBering(20)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here: 1");
*/

// asynchronous/await
async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
  javob = await maslahatBering(75);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();

// Extra tasks
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
  
  //console.log(countLetters("sanjar", "a"));
  //console.log(countLetters2("boburbek", "b"));
  //console.log(countLetters3("mexanizatsiyalashtirilganligidanmikina", "a"));
  