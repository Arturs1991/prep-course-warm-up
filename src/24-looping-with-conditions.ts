import { idText } from "typescript";

export {};

function onlyTheAces(arr : string []) {
    return arr.filter (it=> it.startsWith('A'))
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
