export{}
let user = 'hellsadao'

console.log(user);


let x  = 10;

const y = 20;

const title = 'Web Developer';

let Bool : boolean = true;

let Num: number = 20;

let sentence : string = `hello ${title} how are you`

console.log(sentence);

var n : boolean = null;
var s : string = undefined;
console.log(n, s);

let list: number[] = [1,2,3,4]

const list2: Array<number> = [1,2,3,4]
let person: [string, number] = ['John', 22];

enum X  {Red, Green, Blue};

let r : X = X.Green
console.log(r);


let myVaribale : unknown = 'Ali';



let a = (myVaribale as string).toLowerCase()

console.log(a);

let b ;
b = 10;
b= true

let multyType : number | boolean;

multyType = 20
multyType = true

let anyType : any;
anyType = true
anyType = 'sd'

function add( num1: number,num2?: number): number{
    return num1 + num2
}

add(1,2)

let f = add(2,3)
console.log(f);

add(8)


function fullname (person : { firstname :string, lastname: string}){

   console.log(`${person.firstname} ${person.lastname}`);
   
}

let p = {
firstname: "John",
    lastname: "Hanks",
}



fullname(p);
