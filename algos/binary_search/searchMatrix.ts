function searchMatrix(matrix: number[][], target: number): boolean {
    let row = 0,
        col = matrix[0].length - 1;

    while (true) {
        if (row <= matrix.length - 1 && col >= 0) {
            if (matrix[row][col] === target) return true;
            else if (matrix[row][col] > target) col -= 1;
            else row += 1;
        } else break;
    }

    return false;
}

console.log(
    searchMatrix(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        3
    )
);
console.log(
    searchMatrix(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        13
    )
);
console.log(searchMatrix([[1]], 1));
