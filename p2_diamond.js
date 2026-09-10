// P2. Diamond  (commit: "p2: diamond")
//
// node p2_diamond.js 5   prints a 5-wide diamond of '*'.
// n comes from process.argv[2]. Default: 5. Use only odd n.
//
//   *
//  ***
// *****
//  ***
//   *

const n = Number(process.argv[2] ?? 5);

// TODO: print the diamond with for / if and console.log.
// Hint: for row i, count the spaces and the stars separately.
// Hint: "*".repeat(3) gives "***".

for(let i = 0; i < n; i++) {
    let spaces;
    let stars;

    if(i <= Math.floor(n/2)) {
        spaces = Math.floor(n / 2) - i;
        stars = 2 * i + 1;
    }
    else{
        spaces = i - Math.floor(n / 2);
        stars = 2 * (n - i) - 1;
    }

    console.log(" ".repeat(spaces) + "*".repeat(stars));
}
