// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Solve without allocating memory for a new array

function rotateImage(a) {
    const x = a.length;
    
    for(let i = 0; i < x; i++) {
        for (let j = i; j < x; j++){
            let temp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = temp;
        }
    }
    
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x/2; j++) {
            let temp = a[i][j];
            a[i][j] = a[i][x-1-j];
            a[i][x-1-j] = temp;
        }
    }
    
    return a
}

const a = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]];

console.log(rotateImage(a))