// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

//The area of an island is the number of cells with a value 1 in the island.

//Return the maximum area of an island in grid. If there is no island, return 0.


const maxAreaOfIsland = (grid) => {
    let ans = 0;
    let n = grid.length;
    let m = grid[0].length;
    
    const traverse = (i, j) => {
        if (i < 0 || j < 0 || i >= n || j >=m || !grid[i][j]) return 0
        grid[i][j] = 0
        return 1 + traverse(i-1, j) + traverse(i, j-1) + traverse(i+1, j) + traverse(i, j+1)
    };
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j]) ans = Math.max(ans, traverse(i, j))
        };
    };
    return ans
};


const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
              [0,0,0,0,0,0,0,1,1,1,0,0,0],
              [0,1,1,0,1,0,0,0,0,0,0,0,0],
              [0,1,0,0,1,1,0,0,1,0,1,0,0],
              [0,1,0,0,1,1,0,0,1,1,1,0,0],
              [0,0,0,0,0,0,0,0,0,0,1,0,0],
              [0,0,0,0,0,0,0,1,1,1,0,0,0],
              [0,0,0,0,0,0,0,1,1,0,0,0,0]]

console.log(maxAreaOfIsland(grid))