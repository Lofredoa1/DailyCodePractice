// Given two cells on the standard chess board, determine whether they have the same color or not. Columns A-H/ Rows 1-8

function chessBoardColor (cell1, cell2){
    // const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"]
    let color1 = cell1.split("")
    let color2 = cell2.split("")
    // Color check for cell 1 
    if((parseInt(color1[0], 36) - 9) % 2 != 0 && color1[1] % 2 != 0){
        cell1_color = "dark"
    } else if ((parseInt(color1[0], 36) - 9) % 2 != 0 && color1[1] % 2 == 0){
        cell1_color = "light"
    } else if((parseInt(color1[0], 36) - 9) % 2 == 0 && color1[1] % 2 == 0){
        cell1_color = "dark"
    } else {
        cell1_color = "light"
    }
    // Color check for cell 2 
    if((parseInt(color2[0], 36) - 9) % 2 != 0 && color2[1] % 2 != 0){
        cell2_color = "dark"
    } else if ((parseInt(color2[0], 36) - 9) % 2 != 0 && color2[1] % 2 == 0){
        cell2_color = "light"
    } else if((parseInt(color2[0], 36) - 9) % 2 == 0 && color2[1] % 2 == 0){
        cell2_color = "dark"
    } else {
        cell2_color = "light"
    }
    // Compare color results
    if(cell1_color == cell2_color){
        return true
    } else {
        return false
    }
}

// function inputs
const cell1 = "H1"
const cell2 = "A7"

console.log(chessBoardColor(cell1, cell2))