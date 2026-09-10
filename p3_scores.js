// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
const oddScores = scores.filter((score) => score % 2 === 1);
console.log("odd:", oddScores);

const doubledScores = oddScores.map((score) => score * 2);
console.log("doubled:", doubledScores);

const sortedScores = doubledScores.sort((a, b) => b - a);
console.log("sorted:", sortedScores);

const halfScores = sortedScores.slice(0, Math.ceil(sortedScores.length / 2));
console.log("half:", halfScores);

// (b)
const result = scores
    .filter((score) => score % 2 === 1)
    .map((score) => score * 2)
    .sort((a, b) => b - a)
    .slice(0, Math.ceil(scores.filter((score) => score % 2 === 1).length / 2));

console.log("result:", result);

// (c)
console.log("scores again:", scores);