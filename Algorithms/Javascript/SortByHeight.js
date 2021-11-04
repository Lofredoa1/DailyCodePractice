// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. (Tree = -1)

function sortByHeight(a) {

    let filtered = a.filter(val => val !== -1)
    let sorted = filtered.sort((a, b) => a-b)
    return a.map(val => val === -1? -1: sorted.shift())


}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))