export type OneThroughFive = 1 | 2 | 3 | 4 | 5;
export type Evens = 2 | 4 | 6 | 8;

let evenNumber: Evens = 4;
evenNumber = 3;

type EvensAndOneThroughFive = Evens | OneThroughFive;
let anotherNumber: EvensAndOneThroughFive = 5;
anotherNumber = 8;
anotherNumber = 10;