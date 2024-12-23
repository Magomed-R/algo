function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        const alreadyUse = [];

        for (let j = 0; j < board.length; j++) {
            if (alreadyUse.includes(board[i][j]) && board[i][j] !== ".")
                return false;
            else alreadyUse.push(board[i][j]);
        }
    }

    for (let i = 0; i < board.length; i++) {
        const alreadyUse = [];

        for (let j = 0; j < board.length; j++) {
            if (alreadyUse.includes(board[j][i]) && board[j][i] !== ".")
                return false;
            else alreadyUse.push(board[j][i]);
        }
    }

    let iPlus = 0;
    let jPlus = 0;

    for (let x = 0; x < 9; x++) {
        const alreadyUse = [];

        for (let i = 0 + iPlus; i < 3 + iPlus; i++) {
            for (let j = 0 + jPlus; j < 3 + jPlus; j++) {
                if (alreadyUse.includes(board[i][j]) && board[i][j] !== ".")
                    return false;
                else alreadyUse.push(board[i][j]);
            }
        }

        if (jPlus !== 6) jPlus += 3;
        else {
            jPlus = 0;
            iPlus += 3;
        }
    }

    return true;
}

const input1: string[][] = [
    [".", ".", ".", ".", ".", ".", "5", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "3"],
    [".", "2", ".", "7", ".", ".", ".", ".", "."],
    ["8", "3", "6", "5", ".", ".", ".", ".", "1"],
    [".", ".", ".", ".", ".", "1", ".", ".", "."],
    ["2", ".", ".", ".", ".", ".", ".", ".", "5"],
    [".", ".", ".", ".", ".", ".", ".", ".", "7"],
    [".", ".", ".", "4", ".", ".", ".", "7", "."],
];

const input2 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(input1)); // false
console.log(isValidSudoku(input2)); // true
