// P4. Roster queries  (commit: "p4: roster queries")
//
// An array of objects is the shape of every API response you will meet.
// Do not change the data.

const students = [
  { name: "Yuna",    dept: "CS", score: 92 },
  { name: "Minho",   dept: "EE", score: 88 },
  { name: "Hana",    dept: "ME", score: 84 },
  { name: "Jiho",    dept: "CS", score: 71 },
  { name: "Soyeon",  dept: "CS", score: 97 },
  { name: "Taeyang", dept: "EE", score: 65 },
  { name: "Eunji",   dept: "ME", score: 79 },
  { name: "Junseo",  dept: "CS", score: 58 },
  { name: "Dohyun",  dept: "EE", score: 86 },
  { name: "Seoyeon", dept: "CS", score: 83 },
];

// (a) Names with score >= 80, as an array of strings. 
const highScores = students
  .filter((student) => student.score >= 80)
  .map((student) => student.name);

console.log("80 or more:", highScores);

// (b) Students per department, as an object.
const counts = {};

students.forEach((student) => {
  counts[student.dept] = (counts[student.dept] ?? 0) + 1;
});

console.log("per dept:", counts);

// (c) Ranking by score, one line each: "1. Soyeon (CS) 97"
const ranking = students.slice();

ranking.sort((a, b) => b.score - a.score);

ranking.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name} (${student.dept}) ${student.score}`);
});
