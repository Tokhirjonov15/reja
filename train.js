// TASK C:
function checkContent(a, b) {
  return a.toLowerCase().split("").sort().join("") === 
         b.toLowerCase().split("").sort().join("");
}

console.log(checkContent("alex", "elax")); 
console.log(checkContent("mit", "imt"));
console.log(checkContent("group", "rtsgd"));


// TASK B:
// function countDigits(str) {
//   if (typeof str !== "string") {
//     return "Parameter must be a string";
//   }

//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i]) && str[i] !== " ") { 
//       count++;
//     }
//   }
//   return count;
// }

// // Test
// console.log(countDigits("hello123"));     
// console.log(countDigits("abc4567xyz"));   
// console.log(countDigits("no digits"));    
// console.log(countDigits("2025 year!"));   




// TASK A :

// function countLetter(letter, word) {
//   if (typeof letter !== "string" || typeof word !== "string") {
//     return "Both parameters must be strings";
//   }
//   if (letter.length !== 1) {
//     return "The first parameter must be a single letter";
//   }

//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("e", "koreya"));     
// console.log(countLetter("a", "asaka"));     
// console.log(countLetter("e", "Alex"));     
// console.log(countLetter("s", "MIT"));  


// console.log("Jack Ma maslaxatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "o'zingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yo'q endi", // 60
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {  
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log("passed here 1");

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }

// console.log("passed here 0");
// maslahatBering(20)
// .then((data) => {
//     console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");

//ASYNC/AWAIT
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

//  ⭐️ Synchronous function vs Asynchronous function
// Asynchronous: CALLBACK

// DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng bolmaydi", null);
//   } else {
//     const c = a % b;
//     callback(null, c, true);
//   }
// }

// // CALL
// qoldiqliBolish(5, 3, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("data:", data);
//     console.log("MANTIQLAR ...");
//   }
// }); 


