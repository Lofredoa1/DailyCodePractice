// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

function countJewels(jewels, stones){
    const j = jewels.split('');
    let count = 0;

    for(i = 0; i < stones.length; i++){
        if(j.includes(stones[i])){
            count += 1;
        }
    }
    return count
}

const jewels = "PrEcIoUs"
const stones = 'faEsihPdjkcxUo'

console.log(countJewels(jewels,stones))