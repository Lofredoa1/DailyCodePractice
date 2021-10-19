// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
   
    let strL = picture[0].length
    let border = ""
    const newArr = picture.map(s => "*"+s+"*")
    for (i = 0; i < strL + 2 ; i++){
        border += "*"
    }

    return [
        border,
        ...newArr,
        border
    ]
    }

    console.log(addBorder(["abc",
               "ded"]))