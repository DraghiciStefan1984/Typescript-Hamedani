function doSomething()
{
    for(let i=0; i<5; i++) console.log(i);
}

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: any[];

// arrow function od lambda expression
let doLog=(message)=>console.log(message);

interface Point
{
    x: Number;
    y: Number;
}

//inline annotation
let drawPoint=(point:Point)=>{}

doSomething()