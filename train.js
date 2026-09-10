// Extra tasks No5
// MITASK-C
// Function Declaration
function findDoublers(str)
{
  // new text: old text -> lower case letters -> array -> sort -> string
  const txt = str.toLowerCase().split('').sort().join('');
  // output is false for now.
  let output = false;

  // looping through our text
  for (let i = 0; i < txt.length-1; i++){
    // if two letters match execute if statement
    if (txt[i] === txt[i+1]){
      // if statement triggers output assigns true
      output = true;
      // leave the for loop immidiately
      break;
    }
  }
  // return the result
  return output;
}

// Function Declaration
function checkDoublers(str){
  
  // new arr1: old text -> lower case letters -> arry
  let arr1 = str.toLowerCase().split("");
  // new empty arr2
  let arr2 = [];

  // loop through arr1
  for (let i = 0; i < arr1.length; i++){
  // making sure no similar letters included
  if (!arr2.includes(arr1[i]))
    {
      // pushing unique letter to new arr2
      arr2.push(arr1[i]);
    }
  }
  // not false -> true; not true -> false
  return arr1.length !== arr2.length;
}

// testing
console.log(checkDoublers("Asdfgha")); // true
console.log(checkDoublers("Asdfgh")); // false

console.log(findDoublers('abcd')); // false
console.log(findDoublers('asdfghja')); // true

// Extra tasks No4
// MITASK-D
// Class Declaration
class Shop {
  // 1. Constructor - obyekt yaratilganda mahsulotlar sonini qabul qiladi
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  // Hozirgi soat va daqiqani (masalan, 20:40) qaytaruvchi yordamchi funksiya
  getVaqt() {
    const hozir = new Date();
    const soat = String(hozir.getHours()).padStart(2, '0');
    const daqiqa = String(hozir.getMinutes()).padStart(2, '0');
    return `${soat}:${daqiqa}`;
  }

  // 2. Qoldiqni ko'rsatish metodi
  qoldiq() {
    const vaqt = this.getVaqt();
    const matn = `hozir ${vaqt}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
    console.log(matn);
    return matn;
  }

  // 3. Mahsulot sotish metodi
  sotish(mahsulot, miqdor) {
    const vaqt = this.getVaqt();
    
    if (this[mahsulot] !== undefined) {
      if (this[mahsulot] >= miqdor) {
        this[mahsulot] -= miqdor;
        console.log(`${vaqt}da ${miqdor}ta ${mahsulot} sotildi.`);
      } else {
        console.log(`${vaqt}da yetarli ${mahsulot} yo'q! Kassa qoldig'i: ${this[mahsulot]}ta.`);
      }
    } else {
      console.log(`Bunday mahsulot (${mahsulot}) do'konda yo'q!`);
    }
  }

  // 4. Yangi mahsulot qabul qilish metodi
  qabul(mahsulot, miqdor) {
    const vaqt = this.getVaqt();
    
    if (this[mahsulot] !== undefined) {
      this[mahsulot] += miqdor;
      console.log(`${vaqt}da ${miqdor}ta ${mahsulot} qabul qilindi.`);
    } else {
      console.log(`Bunday mahsulot (${mahsulot}) do'konda mavjud emas!`);
    }
  }
}

// Do'konni yaratamiz: 4ta non, 5ta lagmon, 2ta cola
//const shop = new Shop(4, 5, 2);

// Qoldiqni tekshirish
//console.log(shop.qoldiq()); 

// Sotish va qabul qilish
//console.log(shop.sotish('non', 3));
//console.log(shop.qabul('cola', 4));

// Yangilangan qoldiqni ko'rish
//console.log(shop.qoldiq()); 



// Extra tasks No3
// MITASK-C
// Function Declaration
function checkContent(str1, str2) {
  const txt1 = str1.split('').sort().join('');
  const txt2 = str2.split('').sort().join('');
  if (txt1===txt2) return true;
  else {
    return false;
  }
}

// testing
//console.log(checkContent("abc", "bac"));
//console.log(checkContent("abc", "bas"));
//console.log(checkContent("mitgroup", "gmtiprou"));
//console.log(checkContent("hello", "yellow"));


// Extra tasks No2
// Function Declaration
function countDigits(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
      if (str[i] >= "0" && str[i] <= "9") {
          count++;
      }
  }
  return count;
}

//console.log(countDigits("uz12bek345is67tan890"));

// lesson No21, Call back funcs.
//console.log("Jack Ma maslahatlari");
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
//run();

// Extra tasks
// 1. Function Declaration
function countLetters(str, char) {
    let count = 0;
    for (const letter of str) {
      if (letter === char) {
        count += 1;
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
  