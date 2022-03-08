// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//Each row must contain the digits 1-9 without repetition.
//Each column must contain the digits 1-9 without repetition.
//Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

const isValidSudoku = (board) => {
    
    for (let i = 0; i < 9; i++) {
        let rowCheck = new Set(),
            columnCheck = new Set (),
            boxCheck = new Set();

        for (let j = 0; j < 9; j++) {
            let row = board[i][j];
            let col = board[j][i];
            let box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]

            if (row != '.') {
                if (rowCheck.has(row)) return false
                rowCheck.add(row)
            };

            if (col != '.') {
                if (columnCheck.has(col)) return false
                columnCheck.add(col)
            };

            if (box != '.') {
                if (boxCheck.has(box)) return false
                boxCheck.add(box)
            };
        };
    };
    return true
};


// output true
// const board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// output false
board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))