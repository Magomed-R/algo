// ! Slow
/* function uniquePaths(m: number, n: number): number {
    let paths = 0;

    if (m > 1) paths += uniquePaths(m - 1, n);
    if (n > 1) paths += uniquePaths(m, n - 1);
    if (n === 1 && m === 1) paths++;

    return paths;
} */

// * Fast
function uniquePaths(m: number, n: number): number {
    const array2D = new Array(m).fill(new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0 || i === 0) {
                array2D[i][j] = 1;
            } else {
                array2D[i][j] = array2D[i - 1][j] + array2D[i][j - 1];
            }
        }
    }

    return array2D[m - 1][n - 1];
}

// console.log(uniquePaths(2, 2))
console.log(uniquePaths(3, 7))
// console.log(uniquePaths(19, 13));
