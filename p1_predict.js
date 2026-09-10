// P1. Predict the output  (commit: "p1: equality predictions")
//
// For each line, write your prediction in the comment BEFORE running.
// Then run:  node p1_predict.js
// Wrong predictions are the point. For every miss, add one line
// explaining why, and commit.

console.log(1, 1 == "1");            // prediction: true
console.log(2, 1 === "1");           // prediction: false
console.log(3, 0 == "");             // prediction: true
console.log(4, 0 === "");            // prediction: false
console.log(5, "" == " ");           // prediction: false
console.log(6, null == undefined);   // prediction: true
console.log(7, null === undefined);  // prediction: false
console.log(8, "4" - true);          // prediction: 3
console.log(9, "4" + 1);             // prediction: 41
console.log(10, "4" * "2");          // prediction: 8
console.log(11, typeof "4");         // prediction: string
console.log(12, typeof null);        // prediction: object
console.log(13, typeof []);          // prediction: object
console.log(14, [1, 2] == [1, 2]);   // prediction: false
// 서로 다른 배열 객체이기 때문이다.
console.log(15, NaN === NaN);        // prediction: false
// NaN은 자기 자신과도 같지 않다.
